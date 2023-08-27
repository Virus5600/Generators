/**
 * A Popover container, used for creating a tooltip-esque popup powered by PopperJS.
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
	// STATIC VAIRABLES
	static EVENTS = {
		ALL: [`click`, `focus`, `hover`],
		CLICK: `click`,
		FOCUS: `focus`,
		HOVER: `hover`,
	};

	static #EVENT_TRIGGERS = {
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
	 * A data reference fror `Data` class used by `Element` class to track component instances.
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
	#events = [];

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
	 * @param {PopoverData.EVENTS}	triggers	An array of strings. Allowed values are provided by the static enum `PopoverData.EVENTS`. Defaults to `PopoverData.EVENTS.FOCUS`.
	 */
	constructor(popover, dataKey = null, key = null, triggers = [PopoverData.EVENTS.FOCUS]) {
		this.#popover = popover;
		this.#dataKey = dataKey;
		this.#events = triggers;
		this.#id = new Date().getTime();

		this.#attachListeners();
	}

	// PRIVATE FUNCTIONS

	/**
	 * Removes all currently attached listeners to this popover.
	 * 
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	#clearListeners() {
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
	#attachListener(trigger) {
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

		this.#popover.state.elements.reference.addEventListener(PopoverData.#EVENT_TRIGGERS[trigger].on, this.#listeners[`${trigger}TogglePopover`]);
		this.#popover.state.elements.reference.addEventListener(PopoverData.#EVENT_TRIGGERS[trigger].off, this.#listeners[`${trigger}TogglePopover`]);
	}

	/**
	 * Attaches the current event list to the parent element, providing a way to trigger the popover.
	 * 
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	#attachListeners() {
		this.#events.forEach((v) => {
			// If the event is in the list of allowed events, add a listener.
			if (Object.values(PopoverData.EVENTS).includes(v)) {
				this.#attachListener(v);
			}
			// Otherwise, remove it from the list.
			else {
				this.#listeners.pop(v);
			}
		});

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
	setListener(triggers = [PopoverData.EVENTS.FOCUS]) {
		this.#clearListeners();
		this.#events = triggers;
		this.#attachListeners();
	}

	/**
	 * Adds an event to the current list that will trigger the popover.
	 * 
	 * @param {PopoverData.EVENTS}	triggers	A series of strings or enum value from `PopoverData.EVENTS`.
	 * 
	 * @return {PopoverData} The same and current instance of PopoverData.
	 */
	addListener(...triggers) {
		if (typeof triggers[0] === "object")
			triggers = triggers[0];

		triggers.forEach((v) => {
			if (Object.values(PopoverData.EVENTS).includes(v)) {
				if (!this.#events.includes(v)) {
					this.#attachListener(v);
					this.#events.push(v);
				}
			}
		});
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
}