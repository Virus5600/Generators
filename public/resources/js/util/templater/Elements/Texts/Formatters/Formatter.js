import Text from "../Text.js";

/**
 * The base class for all Formatter elements for the Templater. It extends the {@link Text}
 * class, utilizing the OOP concept and thus, utilizing general methods that might have been
 * implemented over and over for every single HTML element sub-class.
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export default class Formatter extends Element {
	// TODO: Implement the fucking text formats...
	/**
	 * Contains various types of text formats. This list may be updated overtime, allowing
	 * other types of text formats tha may be developed in the future to be added .
	 */
	static TYPES = {
		/**
		 * Bold the texts, injecting them inside the `b` element.
		 */
		bold: `b`,
		/**
		 * Italicize the texts, injecting them inside the `i` element.
		 */
		italic: `i`,
		/**
		 * Underlines the texts, injecting them inside the `u` element.
		 */
		underline: `u`,
		/**
		 * Strikethrough the texts, injecting them inside the `s` element.
		 */
		strikethrough: `s`,
		/**
		 * Makes the selected text a subscript. An example of a subscript is the
		 * characters "1" in this text: abc₁
		 */
		subscript: `sub`,
		/**
		 * Makes the selected text a superscript. An example of a superscript is the
		 * characters "1" in this text: abc¹
		 */
		superscript: 'sup'
	};

	/**
	 * @inheritdoc
	 */
	static TOOLS = {
	};

	/**
	 * The constructor for the {@link Text} class. It accepts two parameters, the `type` and `props`.
	 *
	 * @param {Formatter.TYPES} type The type of text formatting to render. **Required**
	 * @param {Object} propsThe properties of the element. This is optional and will default to an empty object if none is provided.
	 */
	constructor(type, props = {}) {
		if (type === undefined || type === null) {
			throw new Error(`The type of the Formatter element is required.`);
		}

		props = {
			...props,
			el: document.createElement(type),
		};

		super(props);
	}
}
