export default class Validator {
	#arrFieldsIndex = {};
	#checkedFields = [];

	constructor(values, rules, message) {
		// Set external variables
		this.valueList = values;
		this.ruleList = rules;
		this.messageList = message;

		this.#runValidation();
	}

	#runValidation() {
		// Iterate through the passed values
		for (let obj of this.valueList) {
			// Identify their name and values
			let name = obj.name;
			let value = obj.value;
			
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

			// Fetch the rules and messages
			if (isArray) {
				let holder = name.substr(0, (name.length-2));

				// Validate the array container if it was not yet validated
				if (!this.#checkedFields.includes(holder)) {
					let rules = Validator.#fetchRules(holder, this.ruleList, index, true);
					let messages = Validator.#fetchMessages(holder, this.messageList, index, true);
				}

				name = `${holder}.${index}`;

				// Otherwise, proceed to normal process
				let rules = Validator.#fetchRules(name, this.ruleList, index);
				let messages = Validator.#fetchMessages(name, this.messageList, index);

				console.table(rules);
			}
			else {
			}
		}
	}

	static #fetchRules(name, obj, index = 0, isArrayContainer = false) {
		let rules = obj[name];
		rules = (typeof rules == 'undefined') ? {} : rules;

		console.log(`===== START [${name}] =====`);
		console.log(rules);

		if (!isArrayContainer) {
			console.log(`From [${name}]`);
			name = name.substr(0, name.lastIndexOf("."));
			console.log(`To [${name}]`);

			let additionalRules = obj[`${name}.${index}`];
			rules = (typeof additionalRules == 'undefined') ? rules : Object.assign(rules, additionalRules);
			console.log(rules);

			additionalRules = obj[`${name}.*`];
			rules = (typeof additionalRules == 'undefined') ? rules : Object.assign(rules, additionalRules);
			console.log(rules);
		}

		console.log(`===== END [${name}] =====`);
		return rules;
	}

	static #fetchMessages(name, obj, index = 0, isArrayContainer = false) {
		let messages = obj[name];
		messages = (typeof messages == 'undefined') ? {} : messages;

		if (!isArrayContainer) {
			console.log(`From [${name}]`);
			name = name.substr(0, name.lastIndexOf("."));
			console.log(`To [${name}]`);
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