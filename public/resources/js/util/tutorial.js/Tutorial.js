import Popover from "./../../libs/bootstrap-components/popover.js";
// const Popover = require("./../../libs/bootstrap-components/popover.js");

/**
 * `Tutorial` is a class that allows creation of tutorials with the use of popovers. It
 * allows multiple elements to be targeted and also allows `HTML` as content for its
 * instructions/descriptions which in turns gives a dynamic experience to whoever may be
 * using this.
 *
 * `Tutorial` is a singleton library and thus, only a single instance of `Tutorial` can
 * run at a time. This is to prevent confusion and remove any unnecessary behavior that
 * may arise with multiple of them running together.
 *
 * @author Virus5600
 * @version 1.0.0
 */
export default class Tutorial {
	/**
	 * Defines the default options that will be used by the `Tutorial` library.
	 */
	static #defaultOptions = {
		arrowBtns: false,
		includePrev: false,
	};

	/**
	 * Defines a list of default keybindings that are used as keyboard controls for
	 * the Tutorial.
	 */
	static #defaultKeybinds = {
		prev: [37],
		next: [13, 32, 39],
		end: [27, 35]
	}

	/**
	 * Defines a list of keybinds currently used by the Tutorial library. By default,
	 * it uses the default keybinds provided from what you get at `Tutorial.defaultKeybinds()`
	 * method.
	 */
	static keybinds = JSON.parse(JSON.stringify(Tutorial.#defaultKeybinds));

	/**
	 * A JSON object which contains the list of elements that will be part of
	 * the **Tutorial**. The list is made up of several more objects in the following
	 * format:
	 *
	 * ```js
	 * {
	 * 	"#cssSelector": {
	 * 		title: "The title that will appear for this component. Most preferably, the name of the element/component",
	 * 		content: "The content that will be displayed when this component comes up. It can contain HTML codes but `<script>` tags will be removed.",
	 * 		callbackInit: () => { console.log("This is an optional parameter in which contains a callback that will be called before the element/component is highlighted"); },
	 * 		callbackEnd: () => { console.log("This is an optional parameter in which contains a callback that will be called after the element/component is highlighted"); },
	 * 	}
	 * }
	 * ```
	 */
	static #components = null;

	/**
	 * Identifies whether this can instantiate `Tutorial` or not. This allows the singleton
	 * to work properly. Furthermore, this variable also identifies whether to start the
	 * actual "tutorial".
	 */
	static #begin = false;

	/**
	 * Defines whether the `Tutorial` is already instantiated or not. This is different
	 * from {@link Tutorial.#begin} as the latter defines whether **it can** instantiate or
	 * not while this defines whether **it is already** instantiated or not.
	 */
	static #instantiated = false;

	/**
	 * Identifies what component the Tutorial is currently on.
	 */
	static #index = 0;

	/**
	 * Defines the previous target component and popover. By default, this is `null`.
	 */
	static #previous = null;

	/**
	 * @throws Error `Tutorial` is a static singleton class. It cannot be instantiated. Instead, please use `Tutorial.start()`.
	 */
	constructor() {
		if (!Tutorial.#begin && this instanceof Tutorial)
			throw Error('Tutorial is a static class and cannot be instantiated');

		// Add the listeners
		document.addEventListener(`click`, (e) => {
			if (e.target
				.closest(`#vs5-tutorial-overlay, #vs5-tutorial-backdrop`))
				this.#next();
		});

		document.addEventListener(`keydown`, (e) => {
			if (!Tutorial.instantiated)
				return;

			let keyCode = e.keyCode || e.which;

			if (Tutorial.keybinds.prev.includes(keyCode)) this.#prev();
			else if (Tutorial.keybinds.next.includes(keyCode)) this.#next();
			else if (Tutorial.keybinds.end.includes(keyCode)) Tutorial.end();
		});

		this.#init();
	}

	/**
	 * Starts the tutorial using the given components.
	 *
	 * @param {JSON} components
	 * A JSON object which contains the list of elements that will be part of the **Tutorial**.
	 * The list is made up of several more objects in the following
	 * format:
	 * ```js
	 * "#cssSelector": {
	 * 	title: "Title",
	 * 	content: "Content",
	 * 	callbackInit: () => {console.log("Called before the component is highlighted");},
	 * 	callbackEnd: () => {console.log("Called after the component is highlighted");},
	 * }
	 * ```
	 *
	 * - The `#cssSelector` is a query selector which will identify what element will be targeted.
	 * - The `title` is the text that will appear for the component. Most preferably, the name of the element/component
	 * - The `content` is the text or HTML that will be displayed when this component comes up. It can contain HTML codes but `<script>` tags will be removed.
	 * - The `callbackInit` is an optional parameter which contains a callback function that will be called before the element/component is highlighted
	 * - The `callbackEnd` is an optional parameter which contains a callback function that will be called before the element/component is highlighted
	 *
	 * @param options
	 * An optional JSON object parameter. This object defines some options this instance of tutorial
	 * will use. By default, the options used are the following:
	 * ```js
	 * "options": {
	 * 	arrowBtns: false,
	 * 	includePrev: false
	 * }
	 * ```
	 */
	static start(components = {}, options = Tutorial.defaultOptions) {
		if (!components)
			throw new Error(`The components parameter is required.`);
		if (Object.keys(components).length <= 0)
			throw new Error(`The components parameter is required.`);

		Tutorial.#components = components;
		Tutorial.#begin = true;

		const tutorial = new this();
	}

	/**
	 * Ends the tutorial and removes the backdrop.
	 */
	static end() {
		document.querySelector(Tutorial.#previous)
			.removeAttribute(`data-vs5-tutorial-target`);

		Tutorial.#index = null;
		Tutorial.#previous = 0;
		Tutorial.#instantiated = false;

		document.body
			.classList
			.remove(`highlight`);

		document.body
			.querySelector(`#vs5-tutorial-backdrop`)
			.remove();
	}

	/// PRIVATE METHODS \\\
	#init() {
		// Prevents further initialization when the tutorial is already instantiated...
		if (Tutorial.#instantiated)
			return;

		// Initialize some important variables
		let body = document.body;
		let backdrop = `
		<div id="vs5-tutorial-backdrop">
			<div class="vs5-tutorial-text-container">
				<span class="vs5-tutorial-text">Press <code>Esc</code> to exit tutorial...</span>
				<span class="vs5-tutorial-text">Click anywhere outside the popup to proceed...</span>
			</div>
		</div>
		`;

		// Removes the backdrop if there are any.
		document.getElementById(`vs5-tutorial-backdrop`)
			?.remove();

		// Adds the highlight class then appends the backdrop.
		body.classList.add(`highlight`);
		body.insertAdjacentHTML('beforeend', backdrop);

		// Official
		Tutorial.#instantiated = true;
		this.#iterate(0);
	}

	#prev() {
		console.log("prev");
	}

	#next() {
		console.log("next");
	}

	#iterate(index) {
		// Fetch the component
		const key = Object.keys(Tutorial.#components)[index++];
		const component = Tutorial.#components[key];

		// Check if there's an init callback
		if (Object.keys(component).includes(`callbackInit`))
			component.callbackInit();

		const overlay = `<div id="vs5-tutorial-overlay"></div>`;

		if (Tutorial.#previous !== null &&
			Tutorial.#previous?.length > 0) {
			Tutorial.#previous
				.getElementById(`vs5-tutorial-overlay`)
				?.remove();
		}

		// Prepare the popover
		const popoverTarget = document.querySelector(key);
		popoverTarget.setAttribute(`data-vs5-tutorial-target`, ``);
		popoverTarget.insertAdjacentHTML(`beforeend`, overlay);

		const popover = new Popover(key, {
		});

		popoverTarget.scrollIntoView({
			behavior: `auto`,
			block: `center`,
			inline: `center`,
		});

		Tutorial.index = index;
		Tutorial.#previous = key;
	}

	/// GETTERS \\\
	/**
	 * Defines whether the `Tutorial` is already instantiated or not. This is different
	 * from {@link Tutorial.#begin} as the latter defines whether **it can** instantiate or
	 * not while this defines whether **it is already** instantiated or not.
	 *
	 * @return {boolean} Returns `true` if an instance already exist; `false` otherwise.
	 */
	static get instantiated() {
		return Tutorial.#instantiated;
	}

	/**
	 * Returns the default keybinds used for each actions in the form of JSON object.
	 * The default values are as follows:
	 * - ***Previous***: [37]
	 * - ***Next***: [13, 32, 39]
	 * - ***End***: [27, 35]
	 *
	 * Each key codes corresponds to the following:
	 * - **13** - Enter
	 * - **27** - Escape
	 * - **32** - Space
	 * - **35** - End
	 * - **37** - Left Arrow
	 * - **39** - Right Arrow
	 *
	 * @return {JSON} A JSON object which contains the action and its corresponding key codes.
	 */
	static get defaultKeybinds() {
		return JSON.parse(JSON.stringify(Tutorial.#defaultKeybinds));
	}

	/**
	 * Returns the default options used by this library.
	 * The default values are as follows:
	 * - ***arrowBtns***: `false`
	 * - ***includePrev***: `false`
	 *
	 * @return {JSON} A JSON object which contains the default options.
	 */
	static get defaultOptions() {
		return JSON.parse(JSON.stringify(Tutorial.#defaultOptions));
	}
}
// TODO: Implement the popover, options parameter (at #start method), next, and prev.
