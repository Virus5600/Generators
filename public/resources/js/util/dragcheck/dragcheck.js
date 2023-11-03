/**
 * A class which allows the user to drag and check elements. This is useful for creating
 * a group of elements which can be checked by dragging the mouse cursor over them. This,
 * however, is only limited to the mouse buttons. This means that the user can only use
 * the mouse buttons to check the elements.
 * 
 * Recommended keycodes are only limited to the following:
 * - {@link Dragcheck.KEYCODES.LEFT}
 * - {@link Dragcheck.KEYCODES.MIDDLE}
 * - {@link Dragcheck.KEYCODES.RIGHT}
 * - {@link Dragcheck.KEYCODES.BACK}
 * - {@link Dragcheck.KEYCODES.FORWARD}
 * 
 * These buttons are listed in {@link Dragcheck.KEYCODES}.
 * 
 * @example
 * // Creates a new Dragcheck instance
 * let dragcheck = new Dragcheck({
 * 	group: ".dragcheck",
 * 	states: ["checked", "unchecked"],
 * 	keyCode: Dragcheck.KEYCODES.RIGHT,
 * 	callbacks: {
 * 		enabled: () => { console.log("Dragcheck is on"); },
 * 		disabled: () => { console.log("Dragcheck is off"); }
 * 	}
 * });
 */
export default class Dragcheck {
	// PRIVATE VARIABLES
	/**
	 * Defines whether this `Dragcheck` instance is on or not. Defaults as `false`.
	 */
	#enabled = false;

	/**
	 * Defines what states are available. Defaults to the `boolean` values
	 */
	#states = [true, false];

	/**
	 * Defines the default state of the element group. The value of this variable is
	 * one of the the index of the default state in the {@link Dragcheck#states} variable.
	 * This defaults to `0` which is `false` in the default `states`.
	 */
	#defaultState = 0;

	/**
	 * Defines the current state of the element group. The value of this variable is
	 * one of the values provided in the {@link Dragcheck#states} variable. If {@link Dragcheck#states}
	 * is a callback function, then the value of this variable is removed, which is
	 * `undefined`.
	 */
	#currentState;

	/**
	 * Defines the element which was clicked to trigger this `Dragcheck` instance.
	 * This becomes `undefined` after the mouse button is released.
	 */
	#clickedElement;

	/**
	 * Defines what group of elements should this target. Allowed values are css selectors only.
	 */
	#group;

	/**
	 * Defines which mouse button will trigger this `Dragcheck` instance.
	 */
	#keyCode;

	/**
	 * Defines the callbacks for both when the dragcheck is enabled and disabled.
	 */
	#callbacks;

	// PUBLIC VARIABLES
	/**
	 * Contains all the ***recommended*** key codes for the mouse buttons. You can still use
	 * more key codes but it is not recommended. This is because some key codes are not
	 * readily available to all users. For example, the `BACK` key code is not available
	 * since not all mouse devices have this button. The same goes to `FORWARD` as well.
	 */
	static KEYCODES = {
		/**
		 * The left mouse button. This is the default key code.
		 * ------------------------
		 * **Value**: `1`
		 */
		LEFT: 1,
		/**
		 * The middle mouse button.
		 * ------------------------
		 * **Value**: `2`
		 */
		MIDDLE: 2,
		/**
		 * The right mouse button.
		 * ------------------------
		 * **Value**: `3`
		 */
		RIGHT: 3,
		/**
		 * An auxilary mouse button. This usually exists within gaming mouse devices.
		 * ------------------------
		 * **Value**: `4`
		 */
		BACK: 4,
		/**
		 * An auxilary mouse button. This usually exists within gaming mouse devices.
		 * ------------------------
		 * **Value**: `5`
		 */
		FORWARD: 5
	};

	/**
	 * Creates an instance of `Dragcheck` using the options provided. Provided
	 * parameter should be an object containing the following properties:
	 * 
	 * @param {String}			group		A string which will define the target elements. This should be a valid css selector.
	 * @param {Array|Callback}	states		(optional) An array containing the new states available for the elements. A callback can also be used to return a state dynamically. If the callback is used, a parameter will be passed, which is the clicked element.
	 * @param {Number}			defaultState (optional) An integer value which will define the current state of the element group. Defaults to `0` which is `false` in the default `states`.
	 * @param {Number}			keyCode		(optional) An integer which will define which mouse button will trigger. See {@link Dragcheck#KEYCODES} for the available key codes.
	 * @param {Object}			callbacks	(optional) An object containing the callback functions of `enabled`, `hover` and `disabled`. The `hover` callback function takes in a single parameter which is the element that is being hovered.
	 * 
	 * @see Dragcheck#KEYCODES
	 */
	constructor({
		group,
		states = [true, false],
		defaultState = 0,
		keyCode = 1,
		callbacks = {
			enabled: () => {},
			hover: () => {},
			disabled: () => {}
		}
	} = {}) {
		if (!group) throw new Error("Dragcheck: No target group specified.");

		if (!Object.keys(callbacks).includes("enabled")) callbacks.enabled = () => {};
		if (!Object.keys(callbacks).includes("disabled")) callbacks.disabled = () => {};
		
		this.#group = group;
		this.#states = states;
		this.#defaultState = defaultState;
		this.#keyCode = keyCode;
		this.#callbacks = callbacks;

		document.addEventListener("mousedown", (e) => {
			let keyCode = e.which || e.keyCode;
			if (keyCode !== this.#keyCode) return;
			
			this.#clickedElement = e.target;
			this.enable();
		});

		document.addEventListener("mousemove", (e) => {
			let keyCode = e.which || e.keyCode;
			if (this.#enabled && this.#keyCode === keyCode) {
				let target = e.target;
				let list = Array.from(document.querySelectorAll(this.#group));

				if (list.find(el => el === target)) {
					this.#callbacks.hover(target);
				}
			}
		});

		document.addEventListener("mouseup", (e) => {
			this.#clickedElement = undefined;
			this.disable();
		});
	}

	////////////////////
	// PUBLIC METHODS //
	////////////////////
	
	/////////////
	// GETTERS //
	/////////////

	/**
	 * Fetches and return the variable's value. The variable
	 * defines whether this `Dragcheck` instance is on or not.
	 * Defaults as false.
	 * 
	 * @return A boolean value; `true` if it is enabled or
	 * `false` otherwise.
	 */
	get enabled() {
		return this.#enabled;
	}

	/**
	 * Fetches and return the variable's value. The variable
	 * defines what states are available. Defaults to the
	 * boolean values.
	 * 
	 * @return An array containing all the available states for the
	 * element group.
	 */
	get states() {
		return this.#states;
	}

	/**
	 * Fetches and return the variable's value. The variable
	 * defines the current state of the element group. The value
	 * of this variable is one of the values provided in the {@link Dragcheck#states}
	 * variable. If {@link Dragcheck#states} is a callback function, then the value
	 * of this variable is removed, which is `undefined`.
	 */
	get currentState() {
		if (this.#states instanceof Function)
			return this.#states(this.#clickedElement);
		return this.#currentState;
	}

	/**
	 * Fetches and return the variable's value. The variable
	 * defines the callbacks for both when the dragcheck is
	 * enabled and disabled.
	 * 
	 * @return An object containing the callback functions of `enabled`
	 * and `disabled`.
	 */
	get callbacks() {
		return this.#callbacks;
	}

	/////////////
	// SETTERS //
	/////////////

	/**
	 * Sets this `Dragcheck` instance to the `enabled` state. This will also
	 * call the `enabled` callback function.
	 * 
	 * @param {Number} state (optional) An integer value which will define the current state of the element group.
	 */
	enable(state) {
		this.#enabled = true;

		if (!isNaN(parseInt(state))) state = (parseFloat(state) % 1) >= .5 ? Math.ceil(state) : Math.floor(state);
		else state = 0;

		if (this.#states instanceof Function) this.#currentState = this.#states(this.#clickedElement);
		else this.#currentState = this.#states[state];

		this.#callbacks.enabled();
	}

	/**
	 * Sets this `Dragcheck` instance to the `disabled` state. This will also
	 * call the `disabled` callback function.
	 */
	disable() {
		this.#enabled = false;

		if (this.#states instanceof Function) this.#currentState = undefined;
		else this.#currentState = this.#states[this.#defaultState];

		this.#callbacks.disabled();
	}

	/**
	 * Sets a new value for the variable.
	 * 
	 * @param {Array}	states	An array containing the new states available for the elements.
	 * 
	 * @return The current Dragcheck instance. This allows method chaining.
	 */
	set states(states) {
		this.#states = states;

		return this;
	}
}