import Text from "./Text.js";

/**
 * Creates a paragraph element. By default, the paragraph element is a `p` element. The
 * paragraph element is a type of text display and is a subclass of the {@link Text} class.
 *
 * @see {@link Text}
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export default class Paragraph extends Text {
	/**
	 * @inheritdoc
	 * @override {@link Text.TYPES}
	 */
	static TOOLS = {
	}

	constructor(props = {}) {
		props = {
			...props,
			el: document.createElement(`p`)
		};

		super(props);
	}
}
