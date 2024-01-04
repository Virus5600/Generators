import Popover from "bootstrap/js/dist/popover.js";
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
		arrow: {
			left: `Prev`,
			right: `Next`,
		},
		includePrev: false,
		callbacks: {
			start: null,
			end: null
		}
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
	 * Defines the options used by the `Tutorial` instance.
	 */
	static #options = null;

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
	 * Defines the event listeners used by the `Tutorial` instance. Default value is `null`.
	 */
	#eventListener = null;

	/**
	 * @throws Error `Tutorial` is a static singleton class. It cannot be instantiated. Instead, please use `Tutorial.start()`.
	 */
	constructor() {
		if (!Tutorial.#begin && this instanceof Tutorial)
			throw Error('Tutorial is a static class and cannot be instantiated');

		// Add the listeners
		this.#eventListener = {
			click: (e) => {
				if (e.target.closest(`#vs5-tutorial-overlay, #vs5-tutorial-backdrop`)) {
					this.#next();
				}

				if (e.target.closest(`button#vs5EndTutorial`)) {
					Tutorial.end();
				}

				if (Tutorial.options.arrowBtns) {
					if (e.target.closest(`.vs5-tutorial-left-arrow`)) {
						this.#prev();
					}
					else if (e.target.closest(`.vs5-tutorial-right-arrow`)) {
						this.#next();
					}
					else if (e.target.closest(`.vs5-tutorial-exit-btn`)) {
						Tutorial.end();
					}
				}
			},
			keyDown: (e) => {
				if (!Tutorial.instantiated)
					return;

				let keyCode = e.keyCode || e.which;
				e.preventDefault();
				e.stopPropagation();

				if (Tutorial.keybinds.prev.includes(keyCode)) this.#prev();
				else if (Tutorial.keybinds.next.includes(keyCode)) this.#next();
				else if (Tutorial.keybinds.end.includes(keyCode)) Tutorial.end();
			}
		}

		this.#eventListener.click = this.#eventListener.click.bind(this);
		this.#eventListener.keyDown = this.#eventListener.keyDown.bind(this);

		document.addEventListener(`click`, this.#eventListener.click, false);
		document.addEventListener(`keydown`, this.#eventListener.keyDown, false);

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

		if (Tutorial.instantiated)
			return;

		Tutorial.#components = components;
		Tutorial.#begin = true;
		Tutorial.#options = {
			...Tutorial.defaultOptions,
			...options,
		}

		const tutorial = new this();
	}

	/**
	 * Ends the tutorial and removes the backdrop.
	 */
	static end() {
		if (!Tutorial.instantiated)
			return;

		const prev = document.querySelector(Tutorial.#previous);

		Popover.getInstance(Tutorial.#previous)?.dispose();

		prev.removeAttribute(`data-vs5-tutorial-target`);
		prev.querySelector(`#vs5-tutorial-overlay`)?.remove();

		Tutorial.#index = 0;
		Tutorial.#previous = null;
		Tutorial.#begin = false;
		Tutorial.#instantiated = false;

		document.body
			.classList
			.remove(`highlight`);

		document.body
			.querySelector(`#vs5-tutorial-backdrop`)
			.remove();
	}

	/// PRIVATE METHODS \\\
	/**
	 * Initializes the tutorial and adds the backdrop. This also filters out another call
	 * when the tutorial is already instantiated. If users wish to initialize the tutorial
	 * again, they must call {@link Tutorial.end} first.
	 */
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

	/**
	 * Moves the tutorial to the previous component
	 */
	#prev() {
		// If the index-1 is equal to 0, then do nothing at all. Lmao.
		if ((Tutorial.#index - 1) <= 0)
			return;

		// Check if there's an end callback
		const component = Tutorial.#components[Tutorial.#previous];
		if (Object.keys(component).includes(`callbackEnd`))
			component.callbackEnd();

		// Proceed to remove the popover
		let prevPopover = Popover.getInstance(Tutorial.#previous);
		prevPopover._element.removeAttribute(`role`);
		prevPopover._element.removeAttribute(`data-bs-selector`);
		prevPopover._element.removeAttribute(`data-bs-html`);
		prevPopover._element.removeAttribute(`data-bs-placement`);
		prevPopover._element.removeAttribute(`data-bs-toggle`);
		prevPopover._element.removeAttribute(`data-bs-trigger`);
		prevPopover._element.removeAttribute(`data-bs-title`);
		prevPopover._element.removeAttribute(`data-bs-content`);
		prevPopover._element.removeAttribute(`data-vs5-tutorial-target`);
		prevPopover.dispose();

		// Otherwise, proceed to decrement the index and move to the previous component
		Tutorial.#index -= 2;

		Tutorial.#previous = Tutorial.#index > 0 ? Object.keys(Tutorial.#components)[Tutorial.#index - 1] : null;
		this.#iterate(Tutorial.#index);
	}

	/**
	 * Moves the tutorial to the next component
	 */
	#next() {
		// If the index is greater or equal than 0, then set the `previous` variable
		if ((Tutorial.#index - 1) >= 0) {
			// Sets the variables needed for later
			const component = Tutorial.#components[Tutorial.#previous];

			// Check if there's an end callback
			if (Object.keys(component).includes(`callbackEnd`))
				component.callbackEnd();

			// Removes the popover
			let prevPopover = Popover.getInstance(Tutorial.#previous);
			prevPopover._element.removeAttribute(`role`);
			prevPopover._element.removeAttribute(`data-bs-selector`);
			prevPopover._element.removeAttribute(`data-bs-html`);
			prevPopover._element.removeAttribute(`data-bs-placement`);
			prevPopover._element.removeAttribute(`data-bs-toggle`);
			prevPopover._element.removeAttribute(`data-bs-trigger`);
			prevPopover._element.removeAttribute(`data-bs-title`);
			prevPopover._element.removeAttribute(`data-bs-content`);
			prevPopover._element.removeAttribute(`data-vs5-tutorial-target`);
			prevPopover.dispose();
		}

		// Further setting of variables...
		const keyLen = Object.keys(Tutorial.#components).length;

		// Ends the tutorial if the index is greater or equal to the length of the components
		if (Tutorial.#index >= keyLen) {
			document.removeEventListener(`click`, this.#eventListener.click);
			document.removeEventListener(`keydown`, this.#eventListener.keyDown);

			Tutorial.end();
			return;
		}

		// If the condition above is not met, then continue the tutorial
		this.#iterate(Tutorial.#index);
	}

	/**
	 * Process the current component based from the given `index`.
	 *
	 * @param {number} index The current index of the tutorial
	 */
	#iterate(index) {
		// Fetch the component
		const key = Object.keys(Tutorial.#components)[index++];
		const component = Tutorial.#components[key];

		// Check if there's an init callback
		if (Object.keys(component).includes(`callbackInit`))
			component.callbackInit();

		const overlay = `<div id="vs5-tutorial-overlay"></div>`;

		if (Tutorial.#previous !== null) {
			document.querySelector(Tutorial.#previous)
				.querySelector(`#vs5-tutorial-overlay`)
				?.remove();
		}

		// Prepare the popover
		const popoverTarget = document.querySelector(key);
		popoverTarget.setAttribute(`data-vs5-tutorial-target`, ``);
		popoverTarget.insertAdjacentHTML(`beforeend`, overlay);

		// Initialize the popover
		let content = component.content ?? key;
		if (Tutorial.#options.arrowBtns) {
			if (Tutorial.#options.includePrev) {
				content += `
				<div class="vs5-tutorial-bottom vs5-tutorial-prev-included">
					<span class="vs5-tutorial-button vs5-tutorial-left-arrow ${Tutorial.#index - 1 < 0 ? 'disabled' : ''}">${Tutorial.#options.arrow.left.replaceAll("\"", "'")}</span>
					<span class="vs5-tutorial-button vs5-tutorial-right-arrow">${Tutorial.#options.arrow.right.replaceAll("\"", "'")}</span>
				</div>
				`;
			}
			else {
				content += `
					<div class="vs5-tutorial-bottom">
						<span class="vs5-tutorial-button vs5-tutorial-exit-btn">Exit</span>
						<span class="vs5-tutorial-button vs5-tutorial-right-arrow">${Tutorial.options.arrow.right.replaceAll("\"", "'")}</span>
					</div>
				`;
			}
		}

		popoverTarget.setAttribute(`role`, `button`);
		popoverTarget.setAttribute(`data-bs-selector`, key);
		popoverTarget.setAttribute(`data-bs-html`, `true`);
		popoverTarget.setAttribute(`data-bs-placement`, `top`);
		popoverTarget.setAttribute(`data-bs-toggle`, `popover`);
		popoverTarget.setAttribute(`data-bs-trigger`, `focus`);
		popoverTarget.setAttribute(`data-bs-title`, component.title ?? key);
		popoverTarget.setAttribute(`data-bs-content`, content);

		const popover = new Popover(key, {
			html: true,
			sanitize: false,
			trigger: `manual`,
			customClass: `vs5-tutorial-popover`
		});
		popover.show();

		popover.tip
			.querySelector('h3')
			.insertAdjacentHTML('beforeend', `
			<span class="vs5-close-container">
				<button type="button" class="btn-close" aria-label="Close" id="vs5EndTutorial"></button>
			</span>
			`);

		popoverTarget.scrollIntoView({
			behavior: `auto`,
			block: `center`,
			inline: `center`,
		});

		Tutorial.#index = index;
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
		return {
			...Tutorial.#defaultKeybinds
		};
	}

	/**
	 * Returns the default options used by this library.
	 * The default values are as follows:
	 * - ***arrowBtns***:	`false`	- Identifies whether to show the arrow buttons or not. When `includePrev` is `false`, the buttons will be shown below the content with an exit button.
	 * - ***includePrev***:	`false`	- Identifies whether to include the previous button or not. This will only work when `arrowBtns` is `true`.
	 * - ***arrow***:				- Contains the HTML for the arrow buttons. The default values are as follows:
	 * 	- **left**: *SVG Object*	- Contains the text for the left arrow button.
	 * 	- **right**: *SVG Object*	- Contains the text for the right arrow button.
	 *
	 * @return {JSON} A JSON object which contains the default options.
	 */
	static get defaultOptions() {
		return {
			...Tutorial.#defaultOptions,
			arrow: {...Tutorial.#defaultOptions.arrow},
			callbacks: {...Tutorial.#defaultOptions.callbacks}
		};
	}

	/**
	 * Returns the current options used by the `Tutorial` instance.
	 */
	static get options() {
		if (Tutorial.#options === null || Object.keys(Tutorial.#options).length <= 0) {
			Tutorial.#options = Tutorial.defaultOptions;
		}

		return {
			...Tutorial.#options,
			arrow: {...Tutorial.#options.arrow},
			callbacks: {...Tutorial.#options.callbacks}
		};
	}

	/**
	 * Returns the list of components currently used by Tutorial.
	 */
	static get components() {
		return JSON.parse(JSON.stringify(Tutorial.#components));
	}

	/// SETTERS \\\
	/**
	 * Update the entire {@link Tutorial.options} with the given `options` parameter.
	 * All options that aren't provided to the `options` parameter will be set to its
	 * default value.
	 *
	 * @param {JSON} options A JSON object which contains the options to be updated.
	 *
	 * @see {@link Tutorial.defaultOptions}
	 */
	static updateOptions(options = Tutorial.defaultOptions) {
		this.#options = {
			...Tutorial.defaultOptions,
			...options,
		};
	}

	/**
	 * Updates a specific option with the given `key` and `value` parameters.
	 * The `key` follows a dot-notation format. For example, if you want to update
	 * the `left` option in the `arrow` option, you can do so by passing `arrow.left`
	 * as the `key` parameter.
	 *
	 * @param {string} key The option's dot-notation key.
	 * @param {any} value The value to be set for the given `key`.
	 *
	 * @see {@link Tutorial.defaultOptions}
	 */
	static setOption(key, value) {
		let keys = key.split(/\./g);
		key = keys.pop();
		let option = Tutorial.#options;

		if (option === null || Object.keys(option).length <= 0) {
			option = Tutorial.defaultOptions;
		}

		let node = keys.reduce(
			(node, key) => node[key],
			option
		);
		node[key] = value;
	}
}
window.Tutorial = Tutorial;
