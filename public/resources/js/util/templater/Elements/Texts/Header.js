import Text from "./Text.js";

/**
 * Creates a header element. By default, the header element is an `h1` element. The header
 * element is a type of text display and is a subclass of the {@link Text} class.
 *
 * @see {@link Text}
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export default class Header extends Text {
	/**
	 * Contains various types of header. This list may be updated overtime, allowing
	 * other types of headers that may be developed in the future.
	 *
	 * @override {@link Text.TYPES}
	 */
	static TYPES = [
		`h1`, `h2`,
		`h3`, `h4`,
		`h5`, `h6`
	];

	/**
	 * @inheritdoc
	 * @override {@link Text.TOOLS}
	 */
	static TOOLS = {
		end: {
			header: {
				type: `dropdown`,
				icon: `fa-heading`,
				values: {
					// Added at the bottom of the file
				},
			}
		}
	};

	constructor(type = Header.TYPES[0], props = {}) {
		if (!Header.TYPES.includes(type))
			type = Header.TYPES[0];

		props = {
			...props,
			el: document.createElement(type)
		};

		super(Text.TYPES.header ,props);
	}

	/**
	 * Fetches the tools defined for the {@link Header} class element.
	 */
	get tools() {
		// Copies the tools from the parent class
		Header.TOOLS = this.mergeTools(Header.TOOLS, super.tools);
		return Header.TOOLS;
	}
}

// Update the Header.TOOLS.end.header.values to include the Header.TYPES
let icons = [
	`fa-heading`,
	`fa-heading`,
	`fa-heading`,
	`fa-heading`,
	`fa-heading`,
	`fa-heading`,
];
Header.TYPES.forEach((v, k) => {
	Header.TOOLS.end.header.values[v] = {
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
			tmpEl = document.createElement(tmpEl);

			// Copies the attributes and innerHTML
			tmpEl.innerHTML = thiz.element().innerHTML;
			[...thiz.element().attributes].forEach((attr) => {
				tmpEl.setAttribute(attr.name, attr.value);
			});

			thiz.element(tmpEl);
		},
	};
});
