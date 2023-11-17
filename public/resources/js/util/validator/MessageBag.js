export default class MessageBag {
	#message;

	/**
	 * Constructs an instance of `MessageBag`.
	 *
	 * <b>Example A.1:</b>
	 * ```javascript
	 * messages = {
	 * 	name: {
	 * 		required: `The name field is required.`
	 * 	}
	 * }
	 * ```
	 *
	 * @param {Object}	messages	An instance of JSON object, which holds a field-key-value instance. An example of this is the Example A.1
	 *
	 */
	constructor(messages = Object.create(null)) {
		this.#message = messages;
	}

	/**
	 * Adds a new message to the message bag. If an exact key already exists, it will replace the older value with the new
	 * value provided.
	 *
	 * @param {String}	key		The key identifier for the message
	 * @param {String}	message	The message that will be placed in the message bag
	 *
	 * @return {MessageBag}		The current instance of `MessageBag`
	 */
	add(key, message) {
		key = key.split(".");
		let field = key[0];
		key = key[1];

		if (typeof this.#message[field] == 'undefined')
			this.#message[field] = {};

		this.#message[field][key] = message;

		return this;
	}

	/**
	 * Merge a new array of messages into the message bag.
	 *
	 * @param {Object|MessageBag}	messages	A JSON object or an instance of `MessageBag`
	 *
	 * @return {MessageBag}	The current instance of `MessageBag`
	 */
	merge(messages) {
		let type = messages.constructor.name;

		if (type === 'Object') {
			this.#message = Object.assign(this.#message, messages);
		}
		else if (type === 'MessageBag') {
			this.#message = Object.assign(this.#message, messages.get());
		}

		return this;
	}

	/**
	 * Determine if messages exist for the given field.
	 *
	 * @param  {String}  field	The name of the field that will be tested
	 * @return {Boolean}		A boolean value; either a `true` if the field exists, or `false` if it does not
	 */
	has(field) {
		return this.fields().includes(key);
	}

	/**
	 * Get the fields present in the message bag.
	 *
	 * @return {Array}		An array of the fields included in the current instance of `MessageBag`
	 */
	fields() {
		return Object.keys(this.#message);
	}

	/**
	 * Get the first message from the message bag for a given field.
	 *
	 * @param  {String}	field	The name of the field that the message will be fetched upon
	 * @return {String}		The first message contained within the said field. Returns an `undefined` when the field does not exists
	 */
	first(field) {
		if (typeof field == 'undefined') {
			field = Object.keys(this.#message);
			let key = Object.keys(this.#message[field]);
			return this.#message[field][key[0]];
		}

		let key = Object.keys(this.#message[field]);
		return this.#message[field][key[0]];
	}

	/**
	 * Get all of the messages from the message bag for a given field. If no value or a `null` is provided to the field, it returns all the messages contained within the current instance of `MessageBag`
	 *
	 * @param  {String}	field	The name of the field that the message will be fetched upon
	 * @return {Object}		A JSON object that contains the key-value pair for all the message of the field.
	 */
	get(field = null) {
		return field == null ? this.#message : this.#message[field];
	}
}
