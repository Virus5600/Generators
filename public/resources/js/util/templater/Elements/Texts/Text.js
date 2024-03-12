import Element from "../Element.js";
import Formatter from "./Formatters/Formatter.js";

/**
 * The base class for all Text display elements for the Templater. It extends the {@link Element}
 * class, utilizing the OOP concept and thus, utilizing general methods that might have been
 * implemented over and over for every single HTML element sub-class.
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export default class Text extends Element {
	/**
	 * Contains various types of text display. This list may be updated overtime, allowing
	 * other types of text display that may be developed in the future to be added.
	 */
	static TYPES = {
		/**
		 * The header element is a type of text display that is used to display a header. By
		 * default, the header element is an `h1` element.
		 */
		header: `h1`,
		/**
		 * The paragraph element is a type of text display that is used to display a paragraph.
		 * The paragraph element is a `p` element, and has no other types.
		 */
		paragraph: `p`,
		/**
		 * The span element is a type of text display that is used to display a span. The span
		 * element is a `span` element, and has no other types.
		 */
		span: `span`,
		/**
		 * The code element is a type of text display that is used to display a code. The code
		 * element is a `code` element, and has no other types.
		 */
		code: `code`,
	};

	/**
	 * @inheritdoc
	 */
	static TOOLS = {
		center: {
			formatting: {
				type: `dropdown`,
				icon: `fa-highlighter`,
				values: {
					// Added at the bottom of the file
				},
			},
			alignment: {
				type: `dropdown`,
				icon: `fa-align-justify`,
				values: {
					// Added at the bottom of the file
				},
			},
			types: {
				type: `dropdown`,
				icon: `fa-font`,
				values: {
					// Added at the bottom of the file
				},
			}
		}
	};

	/**
	 * The constructor for the {@link Text} class. It accepts two parameters, the `type` and `props`.
	 *
	 * @param {Text.TYPES|Formatter.TYPES} type The type of text display to render. This is optional and will default to `paragraph` if none is provided.
	 * @param {Object} props The properties of the element. This is optional and will default to an empty object if none is provided.
	 *
	 * @see {@link Text.TYPES}
	 */
	constructor(type = Text.TYPES.paragraph, props = {}) {
		if (!Object.values(Text.TYPES).includes(type) && !Object.values(Formatter.TYPES).includes(type))
			type = Text.TYPES.paragraph;

		props = {
			...props,
			el: document.createElement(type)
		};

		super(props);

		this.setToolbar();
	}

	/**
	 * Fetches the tools defined for the specified element.
	 *
	 * @returns {Object} The tools defined for the element.
	 * @throws {Error} The `tools` property must be defined in the subclass.
	 */
	get tools() {
		// Copies the tools from the parent class
		Text.TOOLS = Element.mergeTools(Text.TOOLS, super.tools);
		return Text.TOOLS;
	}
}

let icons;

// Update the Text.TOOLS.center.formatting.values to include common text formatting.
icons = [
	`fa-bold`,
	`fa-italic`,
	`fa-underline`,
	`fa-strikethrough`
];
[`bold`, `italic`, `underline`, `strikethrough`].forEach((v, k) => {
	Text.TOOLS.center.formatting.values[v] = {
		type: `action`,
		icon: icons[k],
		action: (e) => {
			let selected = window.getSelection();
			let range = selected.getRangeAt(0);
			let format = document.createElement('b');
			format.innerText = selected.toString();
			range.deleteContents();
			range.insertNode(format);
		}
	};
});

// Update the Text.TOOLS.center.types.values to include the Text.TYPES
icons = [
	`fa-heading`,
	`fa-paragraph`,
	`fa-i-cursor fa-rotate-90`,
];
Object.keys(Text.TYPES).forEach((v, k) => {
	Text.TOOLS.center.types.values[v] = {
		type: `action`,
		icon: icons[k],
		action: (e) => {
			// Gets the instance of the element
			let vsEl = e.vsElement;
			let thiz = vsEl.instance;

			// Popover handler
			bootstrap.Popover
				.getInstance(thiz.element())
				?.dispose();

			// Creates and replaces the element
			let tmpEl = vsEl.triggerName.toLowerCase();
			tmpEl = Text.TYPES[tmpEl];
			tmpEl = document.createElement(tmpEl);

			// Copies the attributes
			tmpEl.innerHTML = thiz.element().innerHTML;
			[...thiz.element().attributes].forEach((attr) => {
				tmpEl.setAttribute(attr.name, attr.value);
			});

			thiz.element(tmpEl);
		}
	};
});

// Update the Text.TOOLS.center.alignment.values to include the Text.TYPES
icons = [
	`fa-align-left`,
	`fa-align-center`,
	`fa-align-right`,
	`fa-align-justify`,
	`fa-text-slash`
];
[`left`, `center`, `right`, `justify`, `default`].forEach((v, k) => {
	Text.TOOLS.center.alignment.values[v] = {
		type: `action`,
		icon: icons[k],
		action: (e) => {
			let vsEl = e.vsElement;
			let pos = vsEl.triggerName.toLowerCase();

			if (pos == `left`)
				pos = `start`;
			else if (pos == `right`)
				pos = `end`;

			let el = $(vsEl.instance.element())
			el.removeClass(`text-start text-center text-end text-justify`);

			if (pos != `default`)
				el.addClass(`text-${pos}`);
		}
	};
});
