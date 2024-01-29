import Data from "./Data.js";

/**
 * A Popover container, used for creating a tooltip-esq popup powered by PopperJS.
 * The code is designed to return itself whenever possible to allow method chaining.
 *
 * Current implementation is experimental at best as it was rushed. Future plans are
 * to create a component class which will serves as the base class for all components,
 * allowing easier and more efficient development of other components such as (potentially)
 * a toast or alerts.
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export class PopoverData {
	// STATIC VARIABLES
	static TRIGGERS = {
		CLICK: `click`,
		FOCUS: `focus`,
		HOVER: `hover`,
	};

	static #TRIGGERS_VANILLA = {
		click: {
			on: `click`,
			off: `click`,
		},
		focus: {
			on: `focus`,
			off: `blur`,
		},
		hover: {
			on: `mouseover`,
			off: `mouseout`,
		}
	}

	// PRIVATE VARIABLES

	/**
	 * Contains the Popover instance of the element.
	 */
	#popover = null;

	/**
	 * Defines the unique ID of this popover.
	 */
	#id = null;

	/**
	 * A data reference for `Data` class used by `Element` class to track component instances.
	 */
	#data = null;

	/**
	 * Identifies what key is used for this Popover.
	 */
	#dataKey = null;

	/**
	 * Defines what actions will trigger the popover to
	 * be shown or hidden.
	 */
	#trigger = PopoverData.TRIGGERS.FOCUS;

	/**
	 * A list of event listeners attached to this popover.
	 */
	#listeners = {};

	// PUBLIC VARIABLES

	/**
	 * Identifies the visibility of the Popover.
	 */
	visible = false;

	/**
	 * Creates an instance of Popover Data, which holds all necessary information for this popover, along
	 * with some basic yet, useful functions.
	 *
	 * @param {Popper}				popover		A PopperJS popper instance.
	 * @param {Data}				data		An instance reference for the `Data` class used by the popover. Provide `null` if none.
	 * @param {string}				dataKey		A string instance, which defines what component is used for this popper. Provide `null` if `data` is `null`.
	 * @param {PopoverData.EVENTS}	triggers	A string value. Allowed values are provided by the static enum `PopoverData.EVENTS`. Defaults to `PopoverData.EVENTS.FOCUS`.
	 */
	constructor(popover, data, dataKey = null, trigger = PopoverData.TRIGGERS.FOCUS) {
		this.#popover = popover;
		this.#dataKey = dataKey;
		this.#trigger = trigger;
		this.#id = crypto.randomUUID();

		this.#attachTriggers();
	}

	// PRIVATE FUNCTIONS

	/**
	 * Removes all currently attached listeners to this popover.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	#clearTriggers() {
		// Iterate through the current listeners.
		Object.keys(this.#listeners).forEach((v) => {
			// Removes the given listener from the element.
			this.#popover.state.elements.reference.removeEventListener(v, this.#listeners[`${v}TogglePopover`].name);
		});

		return this;
	}

	/**
	 * Attaches the provided event to the parent element, provided a way to trigger the popover.
	 *
	 * @param {string}	trigger	A valid event from the provided `PopoverData.EVENTS`.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	#attachTrigger(trigger) {
		// Error handlers
		let err = null;

		if (trigger === null) {
			err = `The "trigger" cannot be null.`;
		}
		else if (!Object.values(PopoverData.EVENTS).includes(trigger)) {
			err = `Invalid trigger value. Triggers must be from "PopoverData.EVENTS"`;
		}

		if (err)
			throw new Error(err, PopoverData.EVENTS);

		this.#listeners[`${trigger}TogglePopover`] = (e) => {
			if (e.srcElement == this.#popover.state.elements.reference)
				this.toggle();
		};

		this.#popover.state.elements.reference.addEventListener(PopoverData.#TRIGGERS_VANILLA[trigger].on, this.#listeners[`${trigger}TogglePopover`]);
		this.#popover.state.elements.reference.addEventListener(PopoverData.#TRIGGERS_VANILLA[trigger].off, this.#listeners[`${trigger}TogglePopover`]);
	}

	/**
	 * Attaches the current event list to the parent element, providing a way to trigger the popover.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	#attachTriggers() {
		let t = this.#trigger;
		// If the event is in the list of allowed events, add a listener.
		if (Object.values(PopoverData.#TRIGGERS_VANILLA).includes(this.#trigger)) {
			this.#attachTrigger(this.#trigger);
		}

		return this;
	}

	// PUBLIC FUNCTIONS

	/**
	 * Sets a new list of events that will trigger the popover.
	 *
	 * @param {PopoverData.EVENTS}	triggers	An array of strings. Allowed values are provided by the static enum `PopoverData.EVENTS`. Defaults to `PopoverData.EVENTS.FOCUS`.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	setListener(trigger = PopoverData.EVENTS.FOCUS) {
		this.#clearTriggers();
		this.#trigger = trigger;
		this.#attachTriggers();
	}

	/**
	 * Sets the `visible` value.
	 *
	 * @param {boolean}	visible	The current visibility of this Popover. `true` if visible; `false` otherwise.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	setVisible(visible) {
		this.visible = visible;

		return this;
	}

	/**
	 * Fetch the `visible` value.
	 */
	getVisible() {
		return this.visible;
	}

	/**
	 * Fetch the unique ID of this popover. Mostly used for identifying the popover
	 * element when injected into the document.
	 */
	getID() {
		return this.#id;
	}

	/**
	 * Shows and makes the popover visible and interactible.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	show() {
		let tooltip = this.#popover.state.elements.popper;
		let target = this.#popover.state.elements.reference;

		let tooltipEl = document.createElement(`template`);
		tooltipEl.innerHTML = tooltip;
		tooltipEl = tooltipEl.content.children[0];

		// Modify the data and attributes of this element.
		tooltipEl.id = `popover-${this.#id}`;
		tooltipEl.setAttribute(`data-show`, ``);

		// Inject the popover into the document
		target.prepend(tooltipEl);
		this.#popover.update();

		// If successful, update the `visible` state
		this.visible = true;

		return this;
	}

	/**
	 * Hides the popover, removing it from the document tree.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	hide() {
		// Fix hide
		document.querySelector(`#popover-${this.#id}`)
			.remove();

		// If successful, update the `visible` state
		this.visible = false;

		return this;
	}

	/**
	 * Toggles the visibility of the popover.
	 *
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	toggle() {
		if (this.visible)
			this.hide();
		else
			this.show();
	}

	/**
	 * Disposes this component from the element, along with the data.
	 */
	dispose() {
		if (this.#data !== null)
			this.#data.remove(this.#popover.state.element, this.#dataKey);

		this.#popover.destroy();
		this.#popover = null;
		this.#id = null;
		this.#data = null;
		this.#dataKey = null;
	}

	getPopper() {
		return this.#popover;
	}

	// STATIC FUNCTIONS

	/**
	 * Fetches the PopoverData instance from the given identifier. The identifier can either
	 * be an instance of `Popper` or an `Element`.
	 *
	 * @param {Popper|Element} identifier An instance of Popper or Element which could identify the PopoverData instance.
	 *
	 * @return {PopoverData|null} The PopoverData instance if found; `null` otherwise.
	 */
	static getInstance(identifier) {
		let instance = null;

		if (identifier instanceof Popper)
			instance = PopoverData.getInstance(identifier.state.elements.reference);
		else if (identifier instanceof Element)
			instance = bootstrap.Popover.getInstance(identifier);

		return instance;
	}
}

// TODO: Update PopoverData class to be more coherent. Various methods needs to be refactored to match its actual name use as well.
// Refer to "Update 20230827 - Existential Crisis" for the beginning of this class' implementation.
