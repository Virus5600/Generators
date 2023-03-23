// Utility
import UniqueArray from "../../../assets/js/unique-array/unique-array.mod.js";

// Module
import MessageBag from "./MessageBag.js";

export default class Validator {
	#arrFieldsIndex = {};
	#checkedFields = [];

	constructor(values, rules, message) {
		// Initialize necessary utilities
		UniqueArray();

		// Set external variables
		this.valueList = values;
		this.ruleList = rules;
		this.messageList = message;

		this.errors = new ErrorBag();

		this.#runValidation();
	}

	#runValidation() {
		// Iterate through the passed values
		for (let k of Object.keys(this.valueList)) {
			// Identify their name and values
			let name = k;
			let value = this.valueList[k].value;
			
			// Check if the parameter is an array or not
			let arrayIdentifiers = name.match(/(\[\])/gi);
			let isArray = arrayIdentifiers != null ? (arrayIdentifiers.length > 0) : false;
			
			// If array, sets some more values
			let index = 0;
			if (isArray) {
				if (this.#arrFieldsIndex.hasOwnProperty(name))
					index = this.#arrFieldsIndex[name] += 1;
				else
					index = this.#arrFieldsIndex[name] = 0;
			}

			// Fetch the rules and messages for the array container if it is an array
			if (isArray) {
				let holder = name.substr(0, (name.length-2));

				// Validate the array container if it was not yet validated
				if (!this.#checkedFields.includes(holder)) {
					let rules = Validator.#fetchRules(holder, this.ruleList, index, true);
					let messages = Validator.#fetchMessages(holder, this.messageList, index, true);
					
					this.#checkedFields.push(holder);

				}

				// Update name to use the `{container}.{index}`
				name = `${holder}.${index}`;
			}

			// Otherwise, proceed to normal process
			let rules = Validator.#fetchRules(name, this.ruleList, index);
			let messages = Validator.#fetchMessages(name, this.messageList, index);

			this.#checkedFields.push(name);
		}
	}

	static #fetchRules(name, obj, index = 0, isArrayContainer = false) {
		let rules = obj[name];
		rules = (typeof rules == 'undefined') ? [] : rules;

		if (!isArrayContainer) {
			name = name.substr(0, name.lastIndexOf("."));

			let additionalRules = obj[`${name}.${index}`];
			rules = (typeof additionalRules == 'undefined') ? rules : rules.concat(additionalRules);

			additionalRules = obj[`${name}.*`];
			rules = (typeof additionalRules == 'undefined') ? rules : rules.concat(additionalRules);
		}

		return rules.uniq();
	}

	static #fetchMessages(name, obj, index = 0, isArrayContainer = false) {
		let messages = obj[name];
		messages = (typeof messages == 'undefined') ? {} : messages;

		if (!isArrayContainer) {
			name = name.substr(0, name.lastIndexOf("."));
			let additionalMessages = obj[`${name}.${index}`];
			messages = (typeof additionalRules == 'undefined') ? messages : Object.assign(messages, additionalMessages);

			additionalMessages = obj[`${name}.*`];
			messages = (typeof additionalRules == 'undefined') ? messages : Object.assign(messages, additionalMessages);
		}

		return messages;
	}

	// PUBLIC METHODS
	fails() {
		return this.fails;
	}
}