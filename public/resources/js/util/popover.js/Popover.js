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
	static #parts = {
		popover: `<div class="vs5-popover-popover" data-vs5-popover-dir="down"></div>`,
		header: `<div class="vs5-popover-header"></div>`,
		title: `<div class="vs5-popover-title"></div>`,
		close: `<div class="vs5-popover-close">&times;</div>`,
		body: `<div class="vs5-popover-body"></div>`,
		arrow: `<div class="vs5-popover-arrow"></div>`,
	};

	static #defaultOptions = {
		parts: JSON.parse(JSON.stringify(Popover.#parts)),
		showCloseBtn: true,
		showHeader: true,
		showArrow: true,
		title: null,
		content: null,
		placement: `top`,
		fallbackPlacement: [`top`, `right`, `bottom`, `left`],
		trigger: 'click'
	};

	static #elements = {};

	/// VARIABLES \\\
	#target = null;
	#options = null;
	#isShown = false;
	#popoverID = null;

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
		return {
			TOP: `top`,
			RIGHT: `right`,
			LEFT: `left`,
			BOTTOM: `bottom`,
		};
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
	parts(part, template) {
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

		document.body.insertAdjacentElement(`beforeend`, popover);
		this.reposition();

		this.#isShown = true;
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
	 * Repositions the popover.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	reposition() {
		if (!this.#isShown)
			return this;

		let popover = {
			el: document.getElementById(this.#popoverID),
			rect: this.el.getBoundingClientRect(),
			direction: this.el.dataset.vs5PopoverDir,
		};
		let target = {
			el: this.#target,
			rect: this.#target.getBoundingClientRect(),
		};

		let newPlacement;
		if (this.#isOutOfBounds()) {
			for (p in Popover.PLACEMENTS) {
				if (this.#isValidPos(Popover.PLACEMENTS[p])) {
					newPlacement = Popover.PLACEMENTS[p];
					break;
				}
			}
		}

		return this;
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

	}
}
