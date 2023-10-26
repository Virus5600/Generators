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
		 * The left mouse button.
		 */
		LEFT: 1,
		/**
		 * The middle mouse button.
		 */
		MIDDLE: 2,
		/**
		 * The right mouse button.
		 */
		RIGHT: 3,
		/**
		 * An auxilary mouse button. This usually exists within gaming mouse devices.
		 */
		BACK: 4,
		/**
		 * An auxilary mouse button. This usually exists within gaming mouse devices.
		 */
		FORWARD: 5
	};

	/**
	 * Creates an instance of `Dragcheck` using the options provided. Provided
	 * parameter should be an object containing the following properties:
	 * 
	 * @param {String}	group		A string which will define the target elements. This should be a valid css selector.
	 * @param {Array}	states		(optional) An array containing the new states available for the elements.
	 * @param {Integer}	keyCode		(optional) An integer which will define which mouse button will trigger. See {@link Dragcheck#KEYCODES} for the available key codes.
	 * @param {Object}	callbacks	(optional) An object containing the callback functions of `enabled` and `disabled`.
	 * 
	 * @see Dragcheck#KEYCODES
	 */
	constructor({
		group,
		states = [true, false],
		keyCode = 1,
		callbacks = {
			enabled: () => { console.log("Dragcheck is on"); },
			disabled: () => { console.log("Dragcheck is off"); }
		}
	} = {}) {
		this.#group = group;
		this.#states = states;
		this.#keyCode = keyCode;
		this.#callbacks = callbacks;

		document.addEventListener("mousedown", (e) => {
			let target = e.target;
			let list = Array.from(document.querySelectorAll(this.#group));

			if (list.find(el => el === target)) {
				this.#enabled = true;
			}
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