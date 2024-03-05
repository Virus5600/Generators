import Text from "./Text.js";
import SwalFlash from "./../../../swal-flash/swal-flash.mod.js";

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
		center: {
			types: {
				type: `dropdown`,
				icon: `fa-font`,
				values: {
					// Added at the bottom of the file
				},
			}
		},
		end: {
			alignment: {
				type: `dropdown`,
				icon: `fa-align-justify`,
				values: {
					// Added at the bottom of the file
				},
			},
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
	 * Builds the template for the tools that this element will use. The tools are
	 * defined by the static property {@link Header.TOOLS}, which follows this dot
	 * notation:
	 * `position.tool.properties`
	 *
	 * - The `position` is the position of the tool, which can be `start`, `center`, or
	 * `end`.
	 * - The `tool` is the name of the tool.
	 * - The `properties` are the properties that tool will have.
	 *
	 * ---
	 *
	 * The properties contains the following:
	 *
	 * - `type` - The type of the tool. This can be `action` or `dropdown`. If the type is
	 * `action`, the tool will be rendered as a button and will require an `action` property
	 * that defines the action to be done when the button is clicked. If the type is `dropdown`,
	 * the tool will be rendered as a dropdown button and will require a `values` property that
	 * defines an array of objects with the same property as a `type: action` tool.
	 * - `icon` - The icon of the tool. This utilizes Fontawesome 6's class name. An example
	 * value would be `fa-font`. As of the current version, the only icon that could be rendered
	 * are solid icons.
	 * - `action` - This option defines what actions will be done when the tool's button or items
	 * are clicked. It is basically a callback.
	 * **(REQUIRED if `type` is `action`)**
	 * - `values` - This option defines what items will be rendered in the dropdown.
	 * **(REQUIRED if `type` is `dropdown`)**
	 *
	 * @returns {string} The template of the tools that will be rendered on the element's popover.
	 */
	getTools() {
		let tools = ``;

		// Iterate through the positions of the tool first.
		Object.keys(Header.TOOLS).forEach((pos) => {
			// Iterate through the tools of the position.
			Object.keys(Header.TOOLS[pos]).forEach((tool) => {
				let toolName = tool.split('/\s+/g').map((v) => {
					return v.charAt(0).toUpperCase() + v.slice(1);
				}).join(' ');
				let hTool = Header.TOOLS[pos][tool];
				let btnType = hTool.type;

				let btn = `
					<button class="btn btn-outline-secondary ${btnType == 'dropdown' ? `dropdown-toggle` : `` } border-0" type="button" title="${toolName}" ${btnType == 'dropdown' ? `data-bs-toggle="dropdown" aria-expanded="false"` : ``} contenteditable="false" data-if-id>
						<i class="fas ${hTool.icon ?? `fa-gear`}"></i>
					</button>
				`;

				if (btnType == 'action') {
					let id = `tool-${toolName}-${generateHash(8)}`.replace(/[=\+-/\\]/g, "");
					btn = btn.replace(`data-if-id`, `id="${id}"`);
					tools += btn;

					this.element().addEventListener(`click`, (e) => {
						if (e.target.closest(`#${id}`)) {
							e.preventDefault();
							e.stopPropagation();

							hTool.action.bind(this);
							hTool.action(e);
						}
					});
				}
				else if (btnType == 'dropdown') {
					btn = btn.replace(`btn-if-id`, ``);
					tools += `
						<div class="dropdown" contenteditable="false">
							${btn}

							<ul class="dropdown-menu" contenteditable="false">`;

					for (let t in hTool.values) {
						let name = t.split('/\s+/g')
							.map((v) => {
								return v.charAt(0).toUpperCase() + v.slice(1);
							})
							.join(' ');

						t = hTool.values[t];

						let id = `tool-${name}-${generateHash(8)}`.replace(/[=\+-/\\]/g, "");
						tools += `\n<li class="dropdown-item cursor-pointer" contenteditable="false" id="${id}" title="${name}">
							<i class="fas ${t.icon ?? 'fa-gear'} me-2"></i>
							${name}
						</li>`;

						let fn = (e) => {
							if (e.target.closest(`#${id}`)) {
								e.preventDefault();
								e.stopPropagation();

								e = Object.assign({
									vsElement: {
										triggerName: name,
										instance: this,
									}
								}, e);

								t.action(e);
							}
						};
						this.element().addEventListener(`click`, fn.bind(this));
					}

					tools += `
							</ul>
						</div>
					`;
				}
			});

			tools += `<div class="vr"></div>`;
		});

		return tools;
	}
}

// Update the Header.TOOLS.center.types.values to include the Text.TYPES
let icons = [
	`fa-heading`,
	`fa-paragraph`,
	`fa-i-cursor fa-rotate-90`,
];
Object.keys(Text.TYPES).forEach((v, k) => {
	Header.TOOLS.center.types.values[v] = {
		type: `action`,
		icon: icons[k],
		action: (e) => {
			SwalFlash.info(`This is a ${v}!`);
		}
	};
});

// Update the Header.TOOLS.end.alignment.values to include the Text.TYPES
icons = [
	`fa-align-left`,
	`fa-align-center`,
	`fa-align-right`,
	`fa-align-justify`,
	`fa-text-slash`
];
[`left`, `center`, `right`, `justify`, `default`].forEach((v, k) => {
	Header.TOOLS.end.alignment.values[v] = {
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

// Update the Header.TOOLS.end.header.values to include the Header.TYPES
icons = [
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
			// thiz.element().replaceWith(tmpEl);

			// Copies the attributes and innerHTML
			tmpEl.innerHTML = thiz.element().innerHTML;
			[...thiz.element().attributes].forEach((attr) => {
				tmpEl.setAttribute(attr.name, attr.value);
			});

			// thiz.element().remove();
			thiz.element(tmpEl);
		},
		additionalData: {
			type: v
		}
	};
});
