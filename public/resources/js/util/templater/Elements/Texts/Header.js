import Element from "../Element.js";

export class Header extends Element {
	/**
	 * Contains various types of header. This list may be updated overtime, allowing
	 * other types of headers that may be developed in the future.
	 */
	static TYPES = [
		`h1`, `h2`,
		`h3`, `h4`,
		`h5`, `h6`
	];

	static TOOLS = {
		center: {
			types: {
				type: `dropdown`,
				values: Text.TYPES,
				icon: `fa-font`
			}
		},
		end: {
			delete: {
				type: `action`,
				icon: `fa-trash`,
				action: Element.delete
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

		super(props);
	}

	getTools() {
		let tools = ``;

		Object.keys(Header.TOOLS).forEach((v) => {
			let btnType = Header.TOOLS[v].type;

			let btn = `
				<button class="btn btn-outline-secondary ${btnType == 'dropdown' ? `dropdown-toggle` : `` } border-0" type="button" title="${v}" ${btnType == 'dropdown' ? `data-bs-toggle="dropdown" aria-expanded="false"` : ``} contenteditable="false">
					<i class="fas ${Header.TOOLS[v].icon ?? `fa-gear`}"></i>
				</button>
			`;

			if (btnType == 'button') {
				tools += btn;
			}
			else if (btnType == 'dropdown') {
				tools += `
					<div class="dropdown" contenteditable="false">
						${btn}

						<ul class="dropdown-menu" contenteditable="false">`;

				Header.TOOLS[v].values.forEach((t) => {
					tools += `\n<li class="dropdown-item" contenteditable="false">${t}</li>`;
				});

				tools += `
						</ul>
					</div>
				`;
			}
		});

		return tools;
	}
}
