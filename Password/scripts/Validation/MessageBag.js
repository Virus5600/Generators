export default class MessageBag {
	#message;

	constructor() {
		this.#message = {};
	}

	/**
	 * Adds a new message to the message bag. If an exact key already exists, it will replace the older value with the new
	 * value provided.
	 * 
	 * @param key The key identifier for the message
	 * @param message The message that will be placed in the message bag
	 * 
	 * @return this
	 */
	add(key, message) {
		this.#message[key] = message;

		return this
	}

	/**
	 * Merge a new array of messages into the message bag.
	 *
	 * @param messages
	 * 
	 * @return this
	 */
	merge(messages) {
		this.#message = Object.assign(this.#message, messages);

		return this;
	}

	/**
	 * Determine if messages exist for all of the given keys.
	 *
	 * @param  array|string|null  $key
	 * @return bool
	 */
	has(key) {
	}
}