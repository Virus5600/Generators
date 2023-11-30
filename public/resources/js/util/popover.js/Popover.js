/**
 * `Popover` is a class that allows creation of popovers. It allows multiple elements to be
 * targeted and also allows `HTML` as content for its components or parts.
 *
 * A popover is made up of several parts:
 * - Popover
 * 	- Header
 * 		- Title
 * 		- Close Button
 * 	- Body
 * 	- Footer
 *
 * Each of these parts can be customized to your liking. The default parts are as listed
 * from above. The default parts can be accessed through `Popover.parts()` and can be modified
 * through `Popover.modParts()`.
 *
 * @author Virus5600
 * @version 1.0.0
 */
export default class Popover {
	/// STATIC VARIABLES \\\
	/**
	 * The default parts of the popover. These parts can be modified through the
	 * `Popover.modParts()` method.
	 */
	static #parts = {
		popover: `<div class="vs5-popover-popover" data-vs5-popover-dir="down"></div>`,
		header: `<div class="vs5-popover-header"></div>`,
		title: `<div class="vs5-popover-title"></div>`,
		close: `<div class="vs5-popover-close">&times;</div>`,
		body: `<div class="vs5-popover-body"></div>`,
		arrow: `<div class="vs5-popover-arrow"></div>`,
	};

	/**
	 * The default options of the popover. These options should not be modified
	 * by any means and should only be used as a getter. For public access, use
	 * `Popover.defaultOptions` instead.
	 */
	static #defaultOptions = {
		parts: JSON.parse(JSON.stringify(Popover.#parts)),
		showCloseBtn: true,
		showHeader: true,
		showArrow: true,
		title: null,
		content: null,
		placement: `top`,
		fallbackPlacement: [`top`, `right`, `left`, `bottom`],
		trigger: 'click'
	};

	/**
	 * Contains all the list of elements that has a popover. This list should not be accessed
	 * directly and should only be accessed through the `Popover.instances` getter.
	 */
	static #elements = {};

	/// VARIABLES \\\
	/**
	 * The target of the popover. This only stores an HTMLElement instance.
	 */
	#target = null;

	/**
	 * Contains the options of the popover. This is a JSON object composed of optional parameters.
	 * These optional parameters can be found in the `Popover.defaultOptions` getter.
	 */
	#options = null;

	/**
	 * Defines whether the popover is shown or not.
	 */
	#isShown = false;

	/**
	 * The ID of the popover. This is used to identify the popover in the DOM.
	 */
	#popoverID = null;

	/**
	 * The current placement of the popover. This is used to determine the position of the popover.
	 */
	#currentPlacement = `top`;

	/**
	 * Creates a new instance of the popover. The `target` parameter can either be an HTML
	 * Element or a CSS ID selector (`#stringID`). The `options` parameter is a JSON object
	 * composed of optional parameters. These optional parameters can be found in the
	 * `Popover.defaultOptions` getter.
	 *
	 * @param {string|HTMLElement} target Either an HTML Element or a CSS ID selector
	 * @param {JSON} options A JSON object composed of optional parameters.
	 *
	 * @see Popover.defaultParts
	 */
	constructor(target, options) {
		if (typeof target !== `string` && !(target instanceof HTMLElement)) {
			throw new TypeError(`The 'target' parameter must be a string or an HTMLElement.`);
		}
		if (typeof target === `string` && target.charAt(0) !== `#`) {
			throw new TypeError(`The 'target' parameter must be a CSS' ID selector.`);
		}

		this.#target = target instanceof HTMLElement ? [target][0] : document.getElementById(target.substring(1));
		if (Popover.hasInstance(this.#target))
			return Popover.getInstance(this.#target);

		Popover.#elements[this.#target] = this;

		options.parts = {
			...Popover.#defaultOptions.parts,
			...options.parts
		}

		this.#options = {
			...Popover.#defaultOptions,
			...options
		};

		window.addEventListener(`scroll`, () => {
			this.reposition();
		});
	}

	/// STATIC GETTERS \\\
	static getInstance(el) {
		return Popover.#elements[el];
	}

	static hasInstance(el) {
		return Popover.#elements[el] ? true : false;
	}

	static get instances() {
		return JSON.parse(JSON.stringify(Popover.#elements));
	}

	static get PLACEMENTS() {
		const placements = {
			TOP: `top`,
			RIGHT: `right`,
			LEFT: `left`,
			BOTTOM: `bottom`,
		};

		return JSON.parse(JSON.stringify(placements));
	}

	static #ARROW_DIR(placement) {
		const arrowDir = {
			top: `down`,
			right: `left`,
			bottom: `up`,
			left: `right`
		};

		return JSON.parse(JSON.stringify(arrowDir[placement]));
	}

	static get TRIGGERS() {
		const triggers = {
			CLICK: `click`,
			HOVER: `hover`,
			FOCUS: `focus`,
			MANUAL: `manual`
		};

		return JSON.parse(JSON.stringify(triggers));
	}

	/// GETTERS \\\
	/**
	 * Returns the default parts of the popover.
	 *
	 * @return {JSON} The default parts of the popover.
	 */
	get defaultParts() {
		return JSON.parse(JSON.stringify(Popover.#parts));
	}

	get defaultOptions() {
		return JSON.parse(JSON.stringify(Popover.#defaultOptions));
	}

	/// SETTERS \\\
	/**
	 * Modifies the default parts of the popover.
	 *
	 * @param {JSON} part The new part of the popover.
	 * @param {String} template The template that will replace the specified part of the popover.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	modParts(part, template) {
		if (typeof part !== `string`) {
			throw new TypeError(`The 'part' parameter must be a string.`);
		}

		let dom = new DOMParser().parseFromString(template, "text/html");
		let validHTML = Array.from(dom.body.childNodes).some(node => node.nodeType === 1);
		if (!validHTML) {
			throw new TypeError(`The 'template' parameter must be a valid HTML string.`);
		}

		return this;
	}

	/// METHODS \\\
	/**
	 * Shows the popover.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	show() {
		if (this.#isShown)
			return this;

		let showHeader = this.#options.showHeader;
		let showCloseBtn = this.#options.showCloseBtn;
		let showArrow = this.#options.showArrow;

		let popover = new DOMParser().parseFromString(this.#options.parts.popover, 'text/html').body.firstChild;
		let body = new DOMParser().parseFromString(this.#options.parts.body, 'text/html').body.firstChild;
		popover.append(body);

		this.#popoverID = popover.id = `vs5-popover-${Math.floor(Math.random() * (1E11 - 1E10 + 1) + 1E10)}`;
		body.innerHTML = this.#options.content;

		if (showHeader) {
			let header = new DOMParser().parseFromString(this.#options.parts.header, 'text/html').body.firstChild;
			let title = new DOMParser().parseFromString(this.#options.parts.title, 'text/html').body.firstChild;

			title.innerHTML = this.#options.title;
			header.append(title);
			popover.prepend(header);

			if (showCloseBtn) {
				let close = new DOMParser().parseFromString(this.#options.parts.close, 'text/html').body.firstChild;
				header.append(close);

				close.addEventListener('click', (e) => {
					this.hide();
				});
			}
		}

		if (showArrow) {
			let arrow = new DOMParser().parseFromString(this.#options.parts.arrow, 'text/html').body.firstChild;
			popover.append(arrow);
		}

		// Clean the popover and remove the script tags.
		popover.querySelectorAll(`script`)
			.forEach(v => {
				v.removeAll();
			});

		document.body.insertAdjacentElement(`beforeend`, popover);
		this.#isShown = true;
		this.#setPosition(this.#options.placement);
		this.reposition();

		return this;
	}

	/**
	 * Hides the popover.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	hide() {
		document.getElementById(this.#popoverID).remove();
		this.#popoverID = null;

		this.#isShown = false;
		return this;
	}

	/**
	 * Toggles the popover.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	toggle() {
		if (this.#isShown)	this.hide();
		else				this.show();

		return this;
	}

	/**
	 * Repositions the popover based on the current placement, the fallback placement, and
	 * the position of the viewport when window scrolling is viable.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	reposition() {
		if (!this.#isShown)
			return this;

		let popover = {
			el: document.getElementById(this.#popoverID),
		}
		popover['rect'] = popover.el.getBoundingClientRect();
		popover['direction'] = popover.el.dataset.vs5PopoverDir;

		if (this.#isOutOfBounds() || this.#currentPlacement !== this.#options.placement) {
			let validPosExists = !this.#options.fallbackPlacement.every((p) => {
				if (this.#isValidPos(p)) {
					this.#currentPlacement = p;
					return false;
				}

				return true;
			});

			// If there are no valid positions, then use the fallback placement.
			if (!validPosExists) {
				// Fetch all necessary data.
				let preferredPlacement = this.#options.placement;
				let fallbackPlacement = this.#options.fallbackPlacement;
				let viewport = {
					width: window.innerWidth || document.documentElement.clientWidth,
					height: window.innerHeight || document.documentElement.clientHeight,
					top: window.scrollY,
					left: window.scrollX,
				}
				let target = this.#target;
				let targetRect = {
					width: target.getBoundingClientRect().width - 1,
					height: target.getBoundingClientRect().height - 1,
					top: target.offsetTop,
					left: target.offsetLeft,
				};

				// Calculate the origin and the viewport position
				let origin = {
					x: targetRect.left + (targetRect.width / 2),
					y: targetRect.top + (targetRect.height / 2),
				};
				let pos = {
					x: (viewport.left + (viewport.width / 2)) - origin.x,
					y: (viewport.top + (viewport.height / 2)) - origin.y,
				};

				// Check whether the x-axis is greater than the y-axis or vice-versa.
				if ((Math.abs(pos.x) > Math.abs(pos.y)) && (
					fallbackPlacement.includes(`left`) ||
					fallbackPlacement.includes(`right`)
				)) {
					let x = pos.x - origin.x;
					preferredPlacement = x > 0 ? `right` : `left`;
				}
				else if (Math.abs(pos.x) < Math.abs(pos.y) && (
					fallbackPlacement.includes(`top`) ||
					fallbackPlacement.includes(`bottom`)
				)) {
					let y = pos.y - origin.y;
					preferredPlacement = y > 0 ? `bottom` : `top`;
				}

				this.#setPosition(preferredPlacement);
			}
		}

		return this;
	}

	/**
	 * Destroys the popover.
	 */
	destroy() {
		this.hide();
		delete Popover.#elements[this.#target];
	}

	/// UTILITY METHODS \\\
	/**
	 * Checks whether this popover is out of bounds. This is done by checking the popover's
	 * rectangle and the window's/viewport's rectangle.
	 */
	#isOutOfBounds() {
		if (!this.#isShown) return false;

		const rect = document.getElementById(this.#popoverID).getBoundingClientRect();

		return !(
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	/**
	 * Determines whether the provided placement is a valid position. The positions
	 * are determined by the `placement` parameter and accepts any one of the
	 * provided values. These values are as follows:
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * @param {Popover.PLACEMENTS} placement Any value from `Popover.PLACEMENTS`
	 */
	#isValidPos(placement) {
		this.#setPosition(placement);
		return !this.#isOutOfBounds();
	}

	#setPosition(placement) {
		const arrowSize = 10;

		let popover = document.getElementById(this.#popoverID);
		let target = this.#target;

		let popoverRect = {
			top: popover.offsetTop,
			left: popover.offsetLeft,
			width: popover.getBoundingClientRect().width - 1,
			height: popover.getBoundingClientRect().height - 1
		};
		let targetRect = {
			top: target.offsetTop,
			left: target.offsetLeft,
			width: target.getBoundingClientRect().width - 1,
			height: target.getBoundingClientRect().height - 1
		};
		popover.dataset.vs5PopoverDir = Popover.#ARROW_DIR(placement);

		if (placement === `top`) {
			popover.style.top = `${targetRect.top - (popoverRect.height + arrowSize)}px`;
			popover.style.left = `${targetRect.left + (targetRect.width / 2) - (popoverRect.width / 2)}px`;
		}
		else if (placement === `bottom`) {
			popover.style.top = `${targetRect.top + targetRect.height + arrowSize}px`;
			popover.style.left = `${targetRect.left + (targetRect.width / 2) - (popoverRect.width / 2)}px`;
		}
		else if (placement === `right`) {
			popover.style.top = `${targetRect.top + (targetRect.height / 2) - (popoverRect.height / 2)}px`;
			popover.style.left = `${targetRect.left + targetRect.width + arrowSize}px`;
		}
		else if (placement === `left`) {
			popover.style.top = `${targetRect.top + (targetRect.height / 2) - (popoverRect.height / 2)}px`;
			popover.style.left = `${targetRect.left - popoverRect.width - arrowSize}px`;
		}

		this.#currentPlacement = placement;
	}
}
