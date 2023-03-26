// Utility
import UniqueArray from "../../../assets/js/unique-array/unique-array.mod";
import * as Rules from "./Rules";

// Module
import MessageBag from "./MessageBag.js";

export default class Validator {
	/**
	 * A container for all array fields passed to this validator. Values contained in here
	 * are formatted to be a key-value pair.
	 */
	#arrFieldsIndex = {};
	/**
	 * A container for all the fields that are done being validated.
	 */
	#checkedFields = [];
	/**
	 * A container for all the new field names
	 */
	#fieldNames = [];

	// Private variables
	/**
	 * A private global variable container for all the values passed to this.
	 */
	#valueList;
	/**
	 * A private global variable container for all the rules passed to this.
	 */
	#ruleList;
	/**
	 * A private global variable container for all the messages passed to this.
	 */
	#messageList;
	/**
	 * A private global variable container for the `MessageBag` instance.
	 */
	#errors;
	/**
	 * A private global variable container, containing all valid values.
	 */
	#validated = {};
	/**
	 * A private global variable container, identifying if this validator's validation has failed.
	 */
	#fails = false;
	/**
	 * A private global variable container that determines if the validation has been run already.
	 */
	#validationDone = false;

	/**
	 * 
	 * Create an instance of a Validator
	 * * * *
	 * **Example A.1:**
	 * ```javascript
	 * function(value) {
 	 * 	let valid = false;
 	 * 	let msg = "Provided value is not an array";
 	 * 
	 * 	if (value.constructor.name === "Array")
	 * 		valid = true;
	 * 
	 * 	return {
	 * 		valid: valid,
	 * 		message: msg
	 * 	};
	 * }
	 * ```
	 * * * *
	 * **Example A.2:**
	 * ```javascript
	 * (value) => {
	 * 	let valid = false;
 	 * 	let msg = "Provided value is not an array";
 	 * 
	 * 	if (value.constructor.name === "Array")
	 * 		valid = true;
	 * 
	 * 	return {
	 * 		valid: valid,
	 * 		message: msg
	 * 	};
	 * }
	 * ```
	 * * * *
	 * **Example B.1:**
	 * ```javascript
	 * function() {
	 * 	let valid = false;
 	 * 	let msg = "Provided value is not an array";
 	 * 
	 * 	if (typeof globalVar != "undefined")
	 * 		valid = true;
	 * 	
	 * 	return {
	 * 		valid: valid,
	 * 		message: msg
	 * 	};
	 * }
	 * ```
	 * 
	 * @param {Object}	values	A JSON object containing a key-value pair for the fields and its value.
	 * @param {Object}	rules	A JSON object containing a key-value pair for the fields' rules. A rule must be one of the classes within `Rule.js` or a custom function that takes in 1 parameter (value) and returns a JSON object with 2 values (valid: boolean, message: String). An example of a function is **Example A.1**, **Example A.2**, and **Example B.1**
	 * @param {Object}	message	A JSON object containing a key-value pair for the fields' messages
	 */
	constructor(values, rules, messages) {
		// Initialize necessary utilities
		UniqueArray();

		// Set external variables
		this.#valueList = values;
		this.#ruleList = rules;
		this.#messageList = messages;

		this.#errors = new MessageBag();
	}
	
	/**
	 * Runs the validation.
	 */
	#runValidation() {
		// Iterate through the passed values
		// for (let k of Object.keys(this.#valueList)) {
		// 	// Identify their field name and values
		// 	let field = k;
		// 	let value = this.#valueList[k].value;
			
		// 	// Check if the parameter is an array or not
		// 	let isArray = this.#isFieldArray(k);
		// 	let index = 0;

		// 	// Fetch the rules and messages for the array container if it is an array
		// 	if (isArray) {
		// 		// Validate the array container if it was not yet validated
		// 		if (!this.#checkedFields.includes(field)) {
		// 			let rules = Validator.#fetchRules(field, this.#ruleList, index, true);
		// 			let messages = Validator.#fetchMessages(field, this.#messageList, index, true);
					
		// 			// The actual validation; LMAO
		// 			this.#validateField(field, this.#valueList[field], rules, messages);

		// 			this.#checkedFields.push(field);
		// 		}

		// 		// Iterate through the values of the array
		// 		for (let arrV of this.#valueList[field]) {
		// 			// If array, sets some more values
		// 			if (this.#arrFieldsIndex.hasOwnProperty(field))
		// 				index = this.#arrFieldsIndex[field] += 1;
		// 			else
		// 				index = this.#arrFieldsIndex[field] = 0;

		// 			// Update field name to use the `{container}.{index}`
		// 			let arrField = `${field}.${index}`;
					
		// 			let rules = Validator.#fetchRules(arrField, this.#ruleList, index);
		// 			let messages = Validator.#fetchMessages(arrField, this.#messageList, index);

		// 			// The actual validation; LMAO
		// 			this.#validateField(arrField, arrV, rules, messages, isArray);

		// 			this.#checkedFields.push(arrField);
					
		// 		}
		// 	}
		// 	// Otherwise, proceed to normal process
		// 	else {
		// 		let rules = Validator.#fetchRules(field, this.#ruleList, index);
		// 		let messages = Validator.#fetchMessages(field, this.#messageList, index);

		// 		// The actual validation; LMAO
		// 		this.#validateField(field, this.#valueList[field], rules, messages);

		// 		this.#checkedFields.push(field);
		// 	}
		// }
		
		debugger;
		for (let k of Object.keys(this.#ruleList)) {
			// Identify their field name and values
			let field = k;
			let index = 0;
			let runOtherValidation = true;

			// Check if the rule's key is an array or not
			let isArray = this.#isFieldArray(field);
			// Fetch rules and messages
			let rules = Validator.#fetchRules(field, this.#ruleList, index);
			let messages = Validator.#fetchMessages(field, this.#messageList, index);

			// Finally, fetch the value if there's a value present
			let value;
			if (typeof this.#valueList[k] != 'undefined')
				value = this.#valueList[k].value;

			// Verify if a "sometimes" rule exists. If it does, then just run the validation for that rule only.
			if (rules.includes('sometimes')) {
				console.log(`\n[${field}/${k}] sometimes`);
				runOtherValidation = this.#validateField(field, this.#valueList[field], ["sometimes"], messages);
				console.log(`[runOtherValidation] ${runOtherValidation}`);
				rules.splice(rules.indexOf("sometimes"), 1);
				debugger;
			}

			// The actual validation; LMAO
			if (runOtherValidation) {
				this.#validateField(field, this.#valueList[field], rules, messages);
			}

			this.#checkedFields.push(field);
		}

		if (this.#errors.fields().length > 0)
			this.fails = true;

		this.#validationDone = true;
	}

	/**
	 * Fetches the rules from the JSON object passed at `obj` using the provided field name at `field`
	 * 
	 * @param {String}	field				The name of the field that corresponds to the rule key
	 * @param {Object}	obj					The JSON object that contains the rules passed to the Validator instance
	 * @param {Number}	index				If the passed field is an array, the `index` will identify what index the field is to accurately fetch the rule for that specific field; Defaults to 0 if no value is passed
	 * @param {Boolean}	isArrayContainer	Identify if the field being passed is an array container. An array container is a field which has a square bracket (`[]`); Defaults to `false` if no value is passed.
	 * 
	 * @return {Object}		A JSON object containing all the rules for the provided `field`
	 */
	static #fetchRules(field, obj, index = 0, isArrayContainer = false) {
		let rules = obj[field];
		rules = (typeof rules == 'undefined') ? [] : rules;

		if (!isArrayContainer) {
			field = field.substr(0, field.lastIndexOf("."));

			let additionalRules = obj[`${field}.${index}`];
			rules = (typeof additionalRules == 'undefined') ? rules : rules.concat(additionalRules);

			additionalRules = obj[`${field}.*`];
			rules = (typeof additionalRules == 'undefined') ? rules : rules.concat(additionalRules);
		}

		return rules.uniq();
	}

	/**
	 * Fetches the messages from the JSON object passed at `obj` using the provided field name at `field`
	 * 
	 * @param {String}	field				The base name of the field that corresponds to the rule key
	 * @param {Object}	obj					The JSON object that contains the messages passed to the Validator instance
	 * @param {Number}	index				If the passed field is an array, the `index` will identify what index the field is to accurately fetch the rule for that specific field; Defaults to 0 if no value is passed
	 * @param {Boolean}	isArrayContainer	Identify if the field being passed is an array container. An array container is a field which has a square bracket (`[]`); Defaults to `false` if no value is passed.
	 * 
	 * @return {Object}		A JSON object containing all the message for the provided `field`
	 */
	static #fetchMessages(field, obj, index = 0, isArrayContainer = false) {
		let messages = obj[field];
		messages = (typeof messages == 'undefined') ? {} : messages;

		if (!isArrayContainer) {
			field = field.substr(0, field.lastIndexOf("."));
			let additionalMessages = obj[`${field}.${index}`];
			messages = (typeof additionalRules == 'undefined') ? messages : Object.assign(messages, additionalMessages);

			additionalMessages = obj[`${field}.*`];
			messages = (typeof additionalRules == 'undefined') ? messages : Object.assign(messages, additionalMessages);
		}

		return messages;
	}

	// PRIVATE METHODS
	/**
	 * Validates a single field using the rules provided.
	 * 
	 * @param {String}	field		The name of the field that will be validated
	 * @param {Object}	rules		A JSON object containing all the rules for this field. Use the `#fetchRules()` method to do this
	 * @param {Object}	messages	A JSON object containing all the messages for this field. Use the `#fetchMessages()` method to do this
	 * 
	 * @return {Boolean}		A boolean value which identifies if the other validations should be checked or not.
	 */
	#validateField(field, value, rules, messages, isArray = false) {
		// An iterable index used to identify how many custom function rules are provided.
		let closureIndex = 0;

		// Contains all the result of the validation
		let validationResult = [];
		let runOtherValidation = true;

		// Iterate through the rules
		for (let rule of rules) {
			let ogRule = rule;
			let message = messages[rule];
			let validatorValues;
			let ruleType;

			if (typeof rule == "string") {
				// If the rule contains a value (denoted by a colon (:)), removes the latter half of the rule
				if (rule.split(":").length > 1) {
					validatorValues = rule.split(":")[1].split(/\s*,\s*/);
					rule = rule.split(":")[0];
					message = messages[rule];
				}

				// Split the rule using the underscore (_) and resets the rule variable
				let splicedRule = rule.split("_");
				rule = "";

				// Iterate through the spliced rule from earlier and add them up to be a "PascalCase"
				for (let r of splicedRule)
					rule += r.charAt(0).toUpperCase() + r.slice(1);
			}

			// Uses try-catch to prevent the script from stopping when an unknown rule is encountered.
			try {
				// If the rule is a string name, then proceed with using it with the `Rules`.
				if (typeof rule == "string") {
					rule = (typeof validatorValues == 'undefined') ? new Rules[rule](field, value, message) : new Rules[rule](field, value, validatorValues, message);
					rule = rule.validate();
					ruleType = "string";

					if (ogRule == 'sometimes') {
						runOtherValidation = rule.runOtherValidation;
					}
				}
				// If the rule is a function; an anonymous or a named function, proceed with just using the function.
				else if (typeof rule == "function") {
					let customRule;
					// Check if the function has 2 parameters or not
					if (rule.length == 2) {
						// Runs the function. Must return an object
						customRule = rule(field, value);
					}
					// If the custom function is not exactly 2 parameters, skip and warn the developer
					else if (rule.length > 2 || (rule.length < 2 && rule.length != 0)) {
						console.error("Provided rule cannot be executed as it does not follow the required format.");
					}
					// Otherwise, if the custom does not have a parameter, then just call it.
					else {
						customRule = rule();
					}

					// After running the custom rule, run a check...
					// If the returned value from the custom rule isn't an object...
					if (typeof customRule !== 'object') {
						console.warn("Custom rule must return a JSON object, containing the following keys:", ["valid", "message"]);
						continue;
					}
					// If the returned value is an Object, check if it has the desired output. Otherwise, warn the user
					else {
						let keys = Object.keys(customRule).sort().toString();
						let targetK = ["valid", "message"].sort().toString();

						let values = Object.values(customRule).sort();
						let targetV = ["String", "Boolean"];

						if (keys != targetK || (typeof values[0] != targetV[0] || typeof values[1] != targetV[1])) {
							console.warn(
								"Provided JSON does not match the desired output!\n\nProvided:\n",
								customRule,
								"\n\nDesired:\n",
								{"valid": typeof true, "message": typeof "String"}
							);

							continue;
						}
					}

					rule = customRule;
					ruleType = "function";
				}
				// If none of the above works, warn them that such rule cannot be used.
				else {
					console.warn(`Cannot use a "${typeof rule}" to validate input.`);
					continue;
				}

				// If the rule returned a failed validation, add the message to the message bag
				if (!rule.valid) {
					this.#errors.add(
						ruleType == 'function' ? `${field}.closure_${closureIndex}` : `${field}.${ogRule.split(":")[0]}`,
						rule.message
					);

					if (isArray) {
						console.log(field);
						this.#errors.add(
							ruleType == 'function' ? `${field}.closure_${closureIndex}` : `${field}.${ogRule.split(":")[0]}`,
							rule.message
						);
					}

					closureIndex++;
				}
				validationResult.push(rule.valid);
			} catch (e) {
				// Sends out a warning if rule does not exists.
				console.warn(`No such rule exists:\n`, rule, `\nField: ${field}\n\n`, e);
			};
			
		}

		this.#fieldNames.push(field);
		if (!validationResult.includes(false))
			this.#validated[field] = value;

		return runOtherValidation;
	}

	/**
	 * Identifies if the field is an array or not.
	 * 
	 * @param {String}	field	THe name of the field that will be tested
	 * 
	 * @return {Boolean}		Returns a boolean value, which is either a `true`, if the field is an array; or `false` if it isn't
	 */
	#isFieldArray(field) {
		if (field.constructor.name === 'String') {
			if (field.match(/(\*)|(\d+)/))
				return true;
		}
		else if (this.#valueList[field].constructor.name === 'Array') {
			return true;
		}

		return false;
	}

	// PUBLIC METHODS
	/**
	 * Identifies whether the validation failed or not. A single rule that fail will result in a total fail of the validation.
	 * 
	 * @return {Boolean}		Returns `true` if the validation fails; `false` otherwise.
	 */
	fails() {
		if (!this.#validationDone)
			this.#runValidation();

		return this.#fails;
	}

	/**
	 * Fetches all the error message.
	 * 
	 * @return {MessageBag}		An instance of message bag containing all error messages.
	 */
	errors() {
		if (!this.#validationDone)
			this.#runValidation();

		return this.#errors;
	}

	/**
	 * Validates the fields provided and returns a JSON objec, containing all the values from the fields that passed.
	 * 
	 * @return {Object}		A JSON object, containing a key-value pair format of fields and their values that passed the validation.
	 */
	validate() {
		if (!this.#validationDone)
			this.#runValidation();

		return this.#validated;
	}

	/**
	 * Determine if messages exist for the given field.
	 *
	 * @param  {String}  field	The name of the field that will be tested
	 * @return {Boolean}		A boolean value; either a `true` if the field exists, or `false` if it does not
	 */
	has(field) {
		return this.invalidFields().includes(key);
	}

	/**
	 * Get the first message from the message bag for a given field.
	 *
	 * @param  {String}	field	The name of the field that the message will be fetched upon
	 * @return {String}		The first message contained within the said field. Returns an `undefined` when the field does not exists
	 */
	first(field) {
		return this.errors().first(field);
	}

	/**
	 * Get all of the messages from the message bag for a given field. If no value or a `null` is provided to the field, it returns all the messages contained within the current instance of `MessageBag`
	 *
	 * @param  {String}	field	The name of the field that the message will be fetched upon
	 * @return {Object}		A JSON object that contains the key-value pair for all the message of the field.
	 */
	get(field = null) {
		return this.errors().get(field);
	}

	/**
	 * Retrtieves an array of field names that are invalid
	 * 
	 * @return {Array}		An array of field names that failed the validation
	 */
	invalidFields() {
		return this.errors().fields();
	}

	/**
	 * Retrtieves an array of field names that are valid
	 * 
	 * @return {Array}		An array of field names that passed the validation
	 */
	validFields() {
		return Object.keys(this.validate());
	}

	/**
	 * Retrtieves all the field names that are used in this validator
	 * 
	 * @return {Array}		An array of all the field names used in this Validator
	 */
	fields() {
		return this.#fieldNames;
	}
}