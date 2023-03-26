class Rule {
	// PRIVATE VARIABLES
	_message;
	_valid = false;
	
	/**
	 * Container for the name of the field that will be tested
	 */
	_field;
	/**
	 * Container for the value that will be tested
	 */
	_value;
	/**
	 * Container for the validator values that will be used against the value provided
	 */
	_validatorValues;

	/**
	 * The parent constructor, which creates the common Rule instance for all the rules.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, validatorValues = null, message = "The :attr field is incorrect.") {
		message = message.replaceAll(/(:attr)/gi, field);
		message = message.replaceAll(/(:val)/gi, value);
		
		this._message = message;
		this._field = field;
		this._value = value;
		this._validatorValues = validatorValues;
	}

	validate() {
		throw new Error("Unimplemented abstract method: validate()");
	}
}

export class Required extends Rule {
	/**
	 * Tests whether the `value` provided is present and a valid value.
	 * 
	 * @param {String}	field	The name of the field being tested
	 * @param {Any}		value	The value to validate
	 * @paramt {String} message	The message to use when the rule fails
	 */
	constructor(field, value, message = "The :attr field is required") {
		super(field, value, undefined, message);
	}

	validate() {
		if (this._value != 'undefined' && this._value != null && this._value.length > 0)
			this._valid = true;

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Sometimes extends Rule {
	/**
	 * Works similar as the `Required` rule but only works if the value is present (not `undefined`).
	 * 
	 * @param {String}	field	The name of the field being tested
	 * @param {Any} 	value	The value to validate
	 * @paramt {String} message	The message to use when the rule fails
	 */
	constructor(field, value, message = "The :attr field is required to have a value, or leave it as blank") {
		console.table({
			field: field,
			value: value,
			message: messsage
		});
		super(field, value, undefined, message);
	}

	validate() {
		let runOtherValidation = false;

		if (typeof this._value == 'undefined') {
			this._valid = true;
		}
		else {
			runOtherValidation = true;
		}

		return {
			valid: this._valid,
			message: this._message,
			runOtherValidation: runOtherValidation
		};
	}
}

export class Boolean extends Rule {
	/**
	 * Tests whether the value is a boolean or can be converted to a boolean.
	 * 
	 * @param {String}	field	The name of the field being tested
	 * @param {Any} 	value	The value to validate
	 * @paramt {String} message	The message to use when the rule fails
	 */
	constructor(field, value, message = "The :attr must be true or false") {
		super(field, value, undefined, message);
	}

	validate() {
		if (typeof this._value == 'boolean') { 
			this._valid = true;
		}
		else if (typeof this._value == 'number') {
			if (this._value == 1 || this._value == 0)
				this._valid = true;
		}
		else if (typeof this._value == 'string') {
			if (["on", "off", "true", "false"].includes(this._value.toLowerCase()))
				this._valid = true;
		}

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Numeric extends Rule {
	/**
	 * Tests whether the value is a number or can be converted to a number.
	 * 
	 * @param {String}	field	The name of the field being tested
	 * @param {Any} 	value	The value to validate
	 * @paramt {String} message	The message to use when the rule fails
	 */
	constructor(field, value, message = "The :attr should be a number") {
		super(field, value, undefined, message);
	}

	validate() {
		if (typeof this._value == 'number') {
			this._valid = true;
		}
		else if (typeof this._value == 'string') {
			let isDecimal = this._value.split(".").length > 1;
			let converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);

			if (!isNaN(converted))
				this._valid = true;
		}

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Min extends Rule {
	/**
	 * Tests whether the value is no less than the provided validator value.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, validatorValues, message = "The :attr must be at least :val") {
		let e;

		if (typeof validatorValues != 'object' || validatorValues.constructor.name != 'Array')
			e =  Error(`Improper validator value format:\n\tNeeds array, ${typeof validatorValues} is passed`);
		else if (validatorValues.length < 1)
			e =  Error(`Not enough validator value passed:\n\tNeeds 1, only ${validatorValues.length} is passed.`);

		if (value ==  null || typeof value == 'undefined')
			value = value;
		else if (value.constructor.name == "Array")
			value = value.length;

		if (typeof e != 'undefined') {
			e.name = "RuleException";
			throw e;
		}

		message = message.replaceAll(/(:min)/gi, validatorValues[0]);

		super(field, value, validatorValues[0], message);
	}

	validate() {
		if (new Numeric(this._field, this._value).validate().valid) {
			let isDecimal = this._value.toString().split(".").length > 1;
			let converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
			
			if (converted >= this._validatorValues)
				this._valid = true;
		}

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Max extends Rule {
	/**
	 * Tests whether the value is no more than the provided validator value.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, validatorValues, message = "The :attr may not be greater than :val") {
		let e;

		if (typeof validatorValues != 'object' || validatorValues.constructor.name != 'Array')
			e = Error(`Improper validator value format:\n\tNeeds array, ${typeof validatorValues} is passed`);
		else if (validatorValues.length < 1)
			e = Error(`Not enough validator value passed:\n\tNeeds 1, only ${validatorValues.length} is passed.`);

		if (value ==  null || typeof value == 'undefined')
			value = value;
		else if (value.constructor.name == "Array")
			value = value.length;

		if (typeof e != 'undefined') {
			e.name = "RuleException";
			throw e;
		}

		message = message.replaceAll(/(:max)/gi, validatorValues[0]);

		super(field, value, validatorValues[0], message);
	}

	validate() {
		if (new Numeric(this._field, this._value).validate().valid) {
			let isDecimal = this._value.toString().split(".").length > 1;
			let converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
			
			if (converted <= this._validatorValues)
				this._valid = true;
		}

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Between extends Rule {
	/**
	 * Tests whether the value is no more and less than the provided validator value.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first two values (min, max) due to how the rule works
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, validatorValues, message = "The :attr may not be greater than :val") {
		if (typeof validatorValues != 'object' || validatorValues.constructor.name != 'Array')
			throw new Error(`Improper validator value format:\n\tNeeds array, ${typeof validatorValues} is passed`);
		else if (validatorValues.length < 2)
			throw new Error(`Not enough validator value passed:\n\tNeeds 2, only ${validatorValues.length} is passed.`);

		if (validatorValues[0] > validatorValues[1])
			throw new Error(`Minimum value is larger than the maximum value:\n\tMinimum value should be less than ${validatorValues[1]}, ${validatorValues[0]} is provided.`);

		if (value.constructor.name == "Array")
			value = value.length;

		message = message.replaceAll(/(:min)/gi, validatorValues[0]);
		message = message.replaceAll(/(:max)/gi, validatorValues[1]);

		super(field, value, [validatorValues[0], validatorValues[1]], message);
	}

	validate() {
		if (new Numeric(this._field, this._value).validate().valid) {
			let isDecimal = this._value.split(".").length > 1;
			let converted = isDecimal ? parseFloat(this._value) : parseInt(this._value);
			
			if (converted >= this._validatorValues[0] && converted <= this._validatorValues[1])
				this._valid = true;
		}

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Array extends Rule {
	/**
	 * Tests whether the value is no more and less than the provided validator value.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, message = "The :attr must be an array") {
		super(field, value, undefined, message);
	}

	validate() {
		if (typeof this._value == 'object' && this._value.constructor.name == 'Array') {
			this._valid = true;
		}

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class In extends Rule {
	/**
	 * Tests whether the value is no more and less than the provided validator value.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @param {Array}	validatorValues	An array of values that the validator has. Only retrieves the first value due to how the rule works
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, validatorValues, message = "The selected :attr is invalid") {
		if (typeof validatorValues != 'object' || validatorValues.constructor.name != 'Array')
			throw new Error(`Improper validator value format:\n\tNeeds array, ${typeof validatorValues} is passed`);
		else if (validatorValues.length < 1)
			throw new Error(`Not enough validator value passed:\n\tNeeds at least 1, only ${validatorValues.length} is passed.`);

		super(field, value, validatorValues, message);
	}

	validate() {
		if (typeof this._value != 'undefined')
			if (this._validatorValues.includes(this._value.toString()))
				this._valid = true;

		return {
			valid: this._valid,
			message: this._message
		};
	}
}

export class Nullable extends Rule {
	/**
	 * Tests whether the value is null when no other value is provided.
	 * 
	 * @param {String}	field			The name of the field being tested
	 * @param {Any} 	value			The value to validate
	 * @paramt {String} message			The message to use when the rule fails
	 */
	constructor(field, value, message = "The :attr field can be null") {
		super(field, value, message);
	}

	validate() {
		if (this._value === null)
			this._valid = true;

		return {
			valid: this._valid,
			message: this._message
		};
	}
}