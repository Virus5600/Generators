/**
 * `Popover` is a class that allows creation of popovers. It allows multiple elements to be
 * targeted and also allows `HTML` as content for its components or parts.
 *
 * A popover is made up of several parts:
 * - Popover
 * 	- Header
 * 		- Title
 * 		- Close Button
 * 	- Body
 * 	- Footer
 *
 * Each of these parts can be customized to your liking. The default parts are as listed
 * from above. The default parts can be accessed through `Popover.parts()` and can be modified
 * through `Popover.modParts()`.
 *
 * @author Virus5600
 * @version 1.0.0
 */
export default class Popover {
	static #parts = {
		popover: `
			<div class="vs5-po-popover"></div>
		`,
		header: `
			<div class="vs5-po-header">
				<div class="vs5-po-title"></div>
				<div class="vs5-po-close"></div>
			</div>
		`,
		body: `
			<div class="vs5-po-body"></div>
		`,
		footer: `
			<div class="vs5-po-footer"></div>
		`
	};

	/// GETTERS \\\
	/**
	 * Returns the default parts of the popover.
	 *
	 * @return {JSON} The default parts of the popover.
	 */
	get parts() {
		return JSON.parse(JSON.stringify(Popover.#parts));
	}

	/// SETTERS \\\
	/**
	 * Modifies the default parts of the popover.
	 *
	 * @param {JSON} part The new part of the popover.
	 * @param {String} template The template that will replace the specified part of the popover.
	 *
	 * @return {Popover} The current instance of the popover.
	 */
	parts(part, template) {
		if (typeof part !== `string`) {
			throw new TypeError(`The 'part' parameter must be a string.`);
		}

		return this;
	}
}
