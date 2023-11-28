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
		popover: `<div class="vs5-popover-popover"></div>`,
		header: `<div class="vs5-popover-header"></div>`,
		title: `<div class="vs5-popover-title"></div>`,
		close: `<div class="vs5-popover-close">&times;</div>`,
		body: `<div class="vs5-popover-body"></div>`,
		arrow: `<div class="vs5-popover-arrow" data-vs5-popover-dir="down"></div>`,
	};

	static #defaultOptions = {
		parts: JSON.parse(JSON.stringify(Popover.#parts)),
		showCloseBtn: true,
		showHeader: true,
		showArrow: true,
		title: null,
		content: null,
	};

	static #elements = {};

	/// VARIABLES \\\
	#target = null;
	#options = null;
	#isShown = false;
	#popoverID = null;

	constructor(target, options) {
		this.#target = target instanceof HTMLElement ? [target] : document.querySelectorAll(target);
		this.#target.forEach(element => {
			if (!Popover.hasInstance(element)) {
				Popover.#elements[element] = this;
			}
		});

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

	/// GETTERS \\\
	/**
	 * Returns the default parts of the popover.
	 *
	 * @return {JSON} The default parts of the popover.
	 */
	get parts() {
		return JSON.parse(JSON.stringify(Popover.#parts));
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
			}
		}

		if (showArrow) {
			let arrow = new DOMParser().parseFromString(this.#options.parts.arrow, 'text/html').body.firstChild;
			popover.append(arrow);
		}

		document.body.insertAdjacentElement(`beforeend`, popover);

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
}
