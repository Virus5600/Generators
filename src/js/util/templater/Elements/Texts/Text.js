import Element from "../Element.js";

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
	 * other types of text display that may be developed in the future.
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
	 * Specify what tools to show on the element's popover. The tools is composed of three
	 * sections which are the `start`, `center`, and `end`, and are positioned on the left,
	 * center, and right respectively.
	 *
	 * The tools are defined as `<position>.<name>` where `<position>` is the three sections
	 * mentioned earlier. The `<name>` is the name of the tool that will be rendered and will also
	 * serve as its default tooltip name.
	 *
	 * A tool has several parameters, three of which are required.
	 * - **`name`** - This option defines the name of the tool. It is optional and will default to the tool's key name if none is provided.
	 * - **`type`** - The `type` option identifies whether the button is a drop-down or an action button.
	 * 	- `dropdown` defines that the button is a drop-down button.
	 * 	- `button` defines that the button is an action button.
	 * - **`values`** - This option defines what a drop-down `type` option contains. It is required and will throw an error if none is found if the `type` is `dropdown`. This option only accepts arrays.
	 * - **`icon`** - This option is required and defines what icon to render for the said button. This utilizes Fontawesome 6's class name. An example value would be `fa-font`.
	 * - **`action`** - This option defines what actions will be done when the tool's button or items are clicked. It is basically a callback.
	 * 	- If the `type` is `dropdown`, the `action` option accepts an array of functions. The function's index will determine what drop-down item it will get attached to.
	 * 	- If the `type` is `button`, the `action` option accepts a single callback. If an array of function is passed, it will only accept the first function in the array.
	 * 	- All callback functions that will be provided in this option will receive the element instance as its first parameter.
	 */
	static TOOLS = {
		center: {
			types: {
				name: `Types`,
				type: `dropdown`,
				values: Text.TYPES,
				icon: `fa-font`
			}
		},
		end: {
			delete: {
				name: `Delete`,
				type: `button`,
				icon: `fa-trash`,
				action: Element.delete
			}
		}
	}

	/**
	 * The constructor for the {@link Text} class. It accepts two parameters, the `type` and `props`.
	 *
	 * @param {Text.TYPES} type - The type of text display to render. This is optional and will default to `paragraph` if none is provided.
	 * @param {Object} props - The properties of the element. This is optional and will default to an empty object if none is provided.
	 *
	 * @see {@link Text.TYPES}
	 */
	constructor(type = Text.TYPES.paragraph, props = {}) {
		if (!Object.values(Text.TYPES).includes(type))
			type = Text.TYPES.paragraph;

		props = {
			...props,
			el: document.createElement(type)
		};

		super(props);

		this.setToolbar();
	}

	/**
	 * Gets the tools to render on the element's popover. The tools is composed of three
	 * sections which are the `start`, `center`, and `end`, and are positioned on the left,
	 * center, and right respectively.
	 *
	 * The contents of this method is defined by the local static {@link Text.TOOLS} property.
	 *
	 * @see {@link Text.TOOLS}
	 */
	getTools() {
		if (this.__tools)
			return this.__tools;

		let tools = {
			start: [],
			center: [],
			end: []
		};

		// Iterate through the positions of the tool first.
		for (let position in Text.TOOLS) {
			// Filters the position to only allow the three positions.
			if (!Object.keys(tools).includes(position))
				continue;

			// Then iterate through the given tools in the position.
			for (let tool in position) {
				// Fetch the tool's properties.
				let name = Text.TOOLS[position][tool].name ?? tool,
					type = Text.TOOLS[position][tool].type,
					icon = Text.TOOLS[position][tool].icon ?? `fa-gear`,
					values = Text.TOOLS[position][tool].values,
					action = Text.TOOLS[position][tool].action;

				// Capitalize the name.
				name = name.charAt(0).toUpperCase() + name.slice(1);

				// Create the button.
				let id = crypto.randomUUID();
				let btn = `
					<button class="btn btn-outline-secondary" class="${type == 'dropdown' ? `dropdown-toggle` : `` } border-0" type="button" title="${name}" ${btnType == 'dropdown' ? `data-bs-toggle="dropdown" aria-expanded="false"` : `id="${id}"`} contenteditable="false">
						<i class="fas ${icon}"></i>
					</button>
				`;

				// If the button is a dropdown, create the dropdown.
				if (type == `dropdown`) {
					// Start of the dropdown menu.
					let dropdown = `
					<div class="dropdown" contenteditable="false">
						${btn}
						<ul class="dropdown-menu" contenteditable="false">`;

					// Iterate through the values of the dropdown.
					values.forEach((v, k) => {
						id = crypto.randomUUID();
						dropdown + `\n<li class="dropdown-item" contenteditable="false" id="${id}">${v}</li>`;
						document.addEventListener(`click`, (e) => {
							if (e.closest(`#${id}`)) {
								e.preventDefault();
								e.stopPropagation();

								action[k](this);
							}
						});
					});

					// Dropdown closing
					dropdown += `
						</ul>
					</div>
					`;
				}
				// If the button is an action button, create the action button.
				else if (type == `button`) {
					tools[position].push(btn);

					// Check if the `action` property is an array or not.
					// If it is an array, only get the first function.
					if (action instanceof Array)
						action = action[0];

					// Create the action.
					document.addEventListener(`click`, (e) => {
						if (e.closest(`#${id}`)) {
							e.preventDefault();
							e.stopPropagation();

							action(this);
						}
					});
				}
			}
		}

		// Attach the generated tools to the base class to prevent re-initialization, then
		// return the tools.
		this.__tools = tools;
		return this.__tools;
	}
}
