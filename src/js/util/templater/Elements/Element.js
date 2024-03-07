import Data from '../Data.js';

// ---------------------------------------------------------------------------------------------- //
// This counter will serve as the time (in hours) the developer tried to understand and fix this
// mess of an implementation. The implementor is drunk or stupid when he implemented this.
//
// Let this be a warning...
//
// Counter: 5
//
// ---------------------------------------------------------------------------------------------- //

/**
 * The base class for all HTML elements for the Templater. It contains all common attributes and
 * methods needed to make an element.
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export default class Element {
	// STATIC CONSTANTS
	/**
	 * A list of all available attributes and references from an element's prototype.
	 */
	static PROPS = {
		ACCESS_KEY: `accessKey`,
		A_LINK: `aLink`,
		ARIA_ATOMIC: `ariaAtomic`,
		ARIA_AUTO_COMPLETE: `ariaAutoComplete`,
		ARIA_BRAILLE_LABEL: `ariaBrailleLabel`,
		ARIA_BRAILLE_ROLE_DESCRIPTION: `ariaBrailleRoleDescription`,
		ARIA_BUSY: `ariaBusy`,
		ARIA_CHECKED: `ariaChecked`,
		ARIA_COL_COUNT: `ariaColCount`,
		ARIA_COL_INDEX: `ariaColIndex`,
		ARIA_COL_SPAN: `ariaColSpan`,
		ARIA_CURRENT: `ariaCurrent`,
		ARIA_DESCRIPTION: `ariaDescription`,
		ARIA_DISABLED: `ariaDisabled`,
		ARIA_EXPANDED: `ariaExpanded`,
		ARIA_HAS_POPUP: `ariaHasPopup`,
		ARIA_HIDDEN: `ariaHidden`,
		ARIA_INVALID: `ariaInvalid`,
		ARIA_KEY_SHORTCUTS: `ariaKeyShortcuts`,
		ARIA_LABEL: `ariaLabel`,
		ARIA_LEVEL: `ariaLevel`,
		ARIA_LIVE: `ariaLive`,
		ARIA_MODAL: `ariaModal`,
		ARIA_MULTI_LINE: `ariaMultiLine`,
		ARIA_MULTI_SELECTABLE: `ariaMultiSelectable`,
		ARIA_ORIENTATION: `ariaOrientation`,
		ARIA_PLACEHOLDER: `ariaPlaceholder`,
		ARIA_POS_IN_SET: `ariaPosInSet`,
		ARIA_PRESSED: `ariaPressed`,
		ARIA_READ_ONLY: `ariaReadOnly`,
		ARIA_RELEVANT: `ariaRelevant`,
		ARIA_REQUIRED: `ariaRequired`,
		ARIA_ROLE_DESCRIPTION: `ariaRoleDescription`,
		ARIA_ROW_COUNT: `ariaRowCount`,
		ARIA_ROW_INDEX: `ariaRowIndex`,
		ARIA_ROW_SPAN: `ariaRowSpan`,
		ARIA_SELECTED: `ariaSelected`,
		ARIA_SET_SIZE: `ariaSetSize`,
		ARIA_SORT: `ariaSort`,
		ARIA_VALUE_MAX: `ariaValueMax`,
		ARIA_VALUE_MIN: `ariaValueMin`,
		ARIA_VALUE_NOW: `ariaValueNow`,
		ARIA_VALUE_TEXT: `ariaValueText`,
		ASSIGNED_SLOT: `assignedSlot`,
		ATTRIBUTE_STYLE_MAP: `attributeStyleMap`,
		ATTRIBUTES: `attributes`,
		AUTOCAPITALIZE: `autocapitalize`,
		AUTOFOCUS: `autofocus`,
		BASE_URI: `baseURI`,
		CHILD_ELEMENT_COUNT: `childElementCount`,
		CHILD_NODES: `childNodes`,
		CHILDREN: `children`,
		CLASS_LIST: `classList`,
		CLASS_NAME: `className`,
		CLIENT_HEIGHT: `clientHeight`,
		CLIENT_LEFT: `clientLeft`,
		CLIENT_TOP: `clientTop`,
		CLIENT_WIDTH: `clientWidth`,
		CONTENT_EDITABLE: `contentEditable`,
		CONTROL: `control`,
		DATASET: `dataset`,
		DIR: `dir`,
		DRAGGABLE: `draggable`,
		ELEMENT_TIMING: `elementTiming`,
		ENTER_KEY_HINT: `enterKeyHint`,
		FIRST_CHILD: `firstChild`,
		FIRST_ELEMENT_CHILD: `firstElementChild`,
		FORM: `form`,
		HIDDEN: `hidden`,
		HTML_FOR: `htmlFor`,
		ID: `id`,
		INERT: `inert`,
		INNER_HTML: `innerHTML`,
		INNER_TEXT: `innerText`,
		INPUT_MODE: `inputMode`,
		IS_CONNECTED: `isConnected`,
		IS_CONTENT_EDITABLE: `isContentEditable`,
		LANG: `lang`,
		LAST_CHILD: `lastChild`,
		LAST_ELEMENT_CHILD: `lastElementChild`,
		LOCAL_NAME: `localName`,
		NAMESPACE_URI: `namespaceURI`,
		NEXT_ELEMENT_SIBLING: `nextElementSibling`,
		NEXT_SIBLING: `nextSibling`,
		NODE_NAME: `nodeName`,
		NODE_TYPE: `nodeType`,
		NODE_VALUE: `nodeValue`,
		NONCE: `nonce`,
		OFFSET_HEIGHT: `offsetHeight`,
		OFFSET_LEFT: `offsetLeft`,
		OFFSET_PARENT: `offsetParent`,
		OFFSET_TOP: `offsetTop`,
		OFFSET_WIDTH: `offsetWidth`,
		ONABORT: `onabort`,
		ONANIMATIONEND: `onanimationend`,
		ONANIMATIONITERATION: `onanimationiteration`,
		ONANIMATIONSTART: `onanimationstart`,
		ONAUXCLICK: `onauxclick`,
		ONBEFORECOPY: `onbeforecopy`,
		ONBEFORECUT: `onbeforecut`,
		ONBEFOREINPUT: `onbeforeinput`,
		ONBEFOREMATCH: `onbeforematch`,
		ONBEFOREPASTE: `onbeforepaste`,
		ONBEFOREXRSELECT: `onbeforexrselect`,
		ONBLUR: `onblur`,
		ONCANCEL: `oncancel`,
		ONCANPLAY: `oncanplay`,
		ONCANPLAYTHROUGH: `oncanplaythrough`,
		ONCHANGE: `onchange`,
		ONCLICK: `onclick`,
		ONCLOSE: `onclose`,
		ONCONTENTVISIBILITYAUTOSTATECHANGE: `oncontentvisibilityautostatechange`,
		ONCONTEXTLOST: `oncontextlost`,
		ONCONTEXTMENU: `oncontextmenu`,
		ONCONTEXTRESTORED: `oncontextrestored`,
		ONCOPY: `oncopy`,
		ONCUECHANGE: `oncuechange`,
		ONCUT: `oncut`,
		ONDBLCLICK: `ondblclick`,
		ONDRAG: `ondrag`,
		ONDRAGEND: `ondragend`,
		ONDRAGENTER: `ondragenter`,
		ONDRAGLEAVE: `ondragleave`,
		ONDRAGOVER: `ondragover`,
		ONDRAGSTART: `ondragstart`,
		ONDROP: `ondrop`,
		ONDURATIONCHANGE: `ondurationchange`,
		ONEMPTIED: `onemptied`,
		ONENDED: `onended`,
		ONERROR: `onerror`,
		ONFOCUS: `onfocus`,
		ONFORMDATA: `onformdata`,
		ONFULLSCREENCHANGE: `onfullscreenchange`,
		ONFULLSCREENERROR: `onfullscreenerror`,
		ONGOTPOINTERCAPTURE: `ongotpointercapture`,
		ONINPUT: `oninput`,
		ONINVALID: `oninvalid`,
		ONKEYDOWN: `onkeydown`,
		ONKEYPRESS: `onkeypress`,
		ONKEYUP: `onkeyup`,
		ONLOAD: `onload`,
		ONLOADEDDATA: `onloadeddata`,
		ONLOADEDMETADATA: `onloadedmetadata`,
		ONLOADSTART: `onloadstart`,
		ONLOSTPOINTERCAPTURE: `onlostpointercapture`,
		ONMOUSEDOWN: `onmousedown`,
		ONMOUSEENTER: `onmouseenter`,
		ONMOUSELEAVE: `onmouseleave`,
		ONMOUSEMOVE: `onmousemove`,
		ONMOUSEOUT: `onmouseout`,
		ONMOUSEOVER: `onmouseover`,
		ONMOUSEUP: `onmouseup`,
		ONMOUSEWHEEL: `onmousewheel`,
		ONPASTE: `onpaste`,
		ONPAUSE: `onpause`,
		ONPLAY: `onplay`,
		ONPLAYING: `onplaying`,
		ONPOINTERCANCEL: `onpointercancel`,
		ONPOINTERDOWN: `onpointerdown`,
		ONPOINTERENTER: `onpointerenter`,
		ONPOINTERLEAVE: `onpointerleave`,
		ONPOINTERMOVE: `onpointermove`,
		ONPOINTEROUT: `onpointerout`,
		ONPOINTEROVER: `onpointerover`,
		ONPOINTERRAWUPDATE: `onpointerrawupdate`,
		ONPOINTERUP: `onpointerup`,
		ONPROGRESS: `onprogress`,
		ONRATECHANGE: `onratechange`,
		ONRESET: `onreset`,
		ONRESIZE: `onresize`,
		ONSCROLL: `onscroll`,
		ONSEARCH: `onsearch`,
		ONSECURITYPOLICYVIOLATION: `onsecuritypolicyviolation`,
		ONSEEKED: `onseeked`,
		ONSEEKING: `onseeking`,
		ONSELECT: `onselect`,
		ONSELECTIONCHANGE: `onselectionchange`,
		ONSELECTSTART: `onselectstart`,
		ONSLOTCHANGE: `onslotchange`,
		ONSTALLED: `onstalled`,
		ONSUBMIT: `onsubmit`,
		ONSUSPEND: `onsuspend`,
		ONTIMEUPDATE: `ontimeupdate`,
		ONTOGGLE: `ontoggle`,
		ONTRANSITIONCANCEL: `ontransitioncancel`,
		ONTRANSITIONEND: `ontransitionend`,
		ONTRANSITIONRUN: `ontransitionrun`,
		ONTRANSITIONSTART: `ontransitionstart`,
		ONVOLUMECHANGE: `onvolumechange`,
		ONWAITING: `onwaiting`,
		ONWEBKITANIMATIONEND: `onwebkitanimationend`,
		ONWEBKITANIMATIONITERATION: `onwebkitanimationiteration`,
		ONWEBKITANIMATIONSTART: `onwebkitanimationstart`,
		ONWEBKITFULLSCREENCHANGE: `onwebkitfullscreenchange`,
		ONWEBKITFULLSCREENERROR: `onwebkitfullscreenerror`,
		ONWEBKITTRANSITIONEND: `onwebkittransitionend`,
		ONWHEEL: `onwheel`,
		OUTER_HTML: `outerHTML`,
		OUTER_TEXT: `outerText`,
		OWNER_DOCUMENT: `ownerDocument`,
		PARENT_ELEMENT: `parentElement`,
		PARENT_NODE: `parentNode`,
		PART: `part`,
		PREFIX: `prefix`,
		PREVIOUS_ELEMENT_SIBLING: `previousElementSibling`,
		PREVIOUS_SIBLING: `previousSibling`,
		ROLE: `role`,
		SCROLL_HEIGHT: `scrollHeight`,
		SCROLL_LEFT: `scrollLeft`,
		SCROLL_TOP: `scrollTop`,
		SCROLL_WIDTH: `scrollWidth`,
		SHADOW_ROOT: `shadowRoot`,
		SLOT: `slot`,
		SPELLCHECK: `spellcheck`,
		STYLE: `style`,
		TAB_INDEX: `tabIndex`,
		TAG_NAME: `tagName`,
		TEXT_CONTENT: `textContent`,
		TITLE: `title`,
		TRANSLATE: `translate`,
		VIRTUAL_KEYBOARD_POLICY: `virtualKeyboardPolicy`,
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
	 *
	 * @throws {Error} The `TOOLS` property must be defined in the subclass.
	 */
	static TOOLS = {
		end: {
			remove: {
				type: `action`,
				icon: `fa-trash fa-fw m-auto`,
				action: this.delete,
			}
		}
	};

	// PRIVATE VARIABLES
	/**
	 * The actual HTML element fetched from the newly created Element.
	 *
	 * @type {HTMLElement}
	 */
	#element = null;
	/**
	 * Contains all data for the popover.
	 */
	#popover = null;

	/**
	 * The constructor for the {@link Element} class. It accepts a single parameter, which is the
	 * `props` object. The `props` object contains all the properties of the element that will be
	 * created.
	 *
	 * Unknown properties that aren't listed in {@link Element.PROPS} will be filtered and not
	 * added to the element.
	 *
	 * @param {Element.PROPS} props An object containing all the properties of the element, along with their supposedly values.
	 *
	 * @see {@link Element.PROPS}
	 */
	constructor(props) {
		// Assign the element to this instance
		this.#element = props.el;

		// Adds the object properties.
		for (let p in props) {
			// Filters whether the property is a valid property of the element.
			let inProps = Object.keys(Element.PROPS).includes(p);
			if (p == `el` || !inProps)
				continue;

			this.#element[p] = props[p];
		}
	}

	// PRIVATE FUNCTIONS
	/**
	 * Updates the current element into a different one.
	 *
	 * @param {HTMLElement}	elm		The element to replace the current one.
	 */
	#changeElm(elm) {
		if (!elm instanceof HTMLElement)
			throw new TypeError(`${elm} is not an instance of HTMLElement.`);

		this.#element.replaceWith(elm);
		this.#element = elm;

		this.setToolbar();
		return this;
	}

	// PUBLIC FUNCTIONS
	/**
	 * Returns the element reference, allowing direct element modifications.
	 *
	 * @return {HTMLElement}	An instance of HTML element.
	 */
	element(elm = null) {
		if (elm === null)
			return this.#element;

		this.#changeElm(elm);
	}

	/**
	 * Gets or sets the element's text. Behaves similar to jQuery's `.text()` function.
	 *
	 * @param	{string}	text	String value which will be displayed by the element.
	 *
	 * @return	{Element | string}	Depending on the context of use; returns an `Element`
	 * instance when used as a "setter" otherwise, returns the current text value as a `string`.
	 */
	text(text = null) {
		if (text === null)
			return this.#element.textContent;

		this.#element.innerText = text;

		return this;
	}

	/**
	 * Gets or sets the element's properties. Behaves quite similar to jQuery's `.prop()` function.
	 *
	 * @param	{Element.PROPS}	property	A value from the `Element.PROPS` enum.
	 * @param	{mixed}			value		An optional parameter which defines the new value for the given `property`.
	 *
	 * @return	{Element | Object | string | null}	Depending on the context of use; returns an `Element`
	 * instance when used as a "setter" otherwise, returns the current value as a `string`. If no property is specified,
	 * the method returns an `Object`. However, an invalid property will just return a `null`.
	 */
	prop(property = null, value = null) {
		if (property !== null) {
			if (Object.keys(Element.PROPS).includes(property) || Object.values(Element.PROPS).includes(property)) {
				if (value === null)
					return this.#element[property];

				this.#element[property] = value;
				return this;
			}
			let obj = {};
			for (let k of Object.keys(this.#element.__proto__))
				obj[k] = this.#element[k];

			return this.el;
		}
		return null;
	}

	/**
	 * Assign the Popover instance provided to this element.
	 *
	 * @param {bootstrap.Popover} popover	A created popover instance.
	 *
	 * @return {Element}	An instance of this class, which allows for function chaining.
	 */
	createPopover(popover) {
		if (popover == undefined || popover == null)
			throw new Error("Popover instance not provided.");
		else if (!popover instanceof bootstrap.Popover)
			throw new TypeError("Popover instance is not an instance of bootstrap.Popover.");

		// Commented out due to PopoverData being utterly unused and useless after the in-house popover was dropped.
		// this.#popover = new PopoverData(popover, Data, "templater", PopoverData.TRIGGERS.CLICK);

		Data.set(this.#element, "templater", this.#popover);
		return this;
	}

	/**
	 * Fetch the Popover instance assigned to this element.
	 *
	 * @return {Popper}	An instance of PopperJS.
	 */
	getPopover() {
		return this.#popover;
	}

	/**
	 * Toggles the popover to show.
	 */
	showPopover() {
		if (this.#popover.visible)
			return;

		this.#popover.show();
	}

	/**
	 * Toggles the popover to hide.
	 */
	hidePopover() {
		if (!this.#popover.visible)
			return;

		this.#popover.hide();
	}

	/**
	 * Toggles the popover to show or hide.
	 */
	togglePopover() {
		this.#popover.toggle();
	}

	/**
	 * Sets the toolbar for the element. This will create a popover for the element and
	 * assign the toolbar to it.
	 */
	setToolbar() {
		let popover = new bootstrap.Popover(this.element(), {
			container: this.element(),
			content: `T O O L B A R`,
			fallbackPlacements: [`top`, `bottom`],
			html: true,
			placement: `top`,
			template: Element.generateToolbar(this.getTools()),
			trigger: `focus`,
			sanitize: false,
		});

		this.createPopover(popover);
	}

	/**
	 * Generates the full HTML code of the toolbar for the element. This is a static method
	 * and can be called without an instance of the class.
	 *
	 * @param {string} tools The HTML code of the tools to be rendered on the toolbar.
	 *
	 * @returns {string} The full HTML code of the toolbar.
	 */
	static generateToolbar(tools) {
		if (typeof tools !== `string`)
			tools = ``;

		let toReturn = `
		<div class="popover opacity-87.5 border-1 border-secondary dtrtg-toolbar" role="popover" contenteditable="false">
			<div class="popover-arrow border-1 border-secondary" data-popper-arrow></div>

			<div class="hstack px-2 dtrtg-toolbar-content">
				${tools}

				${''/* Drag Handle which allows the element to be moved around */}
				<span class="handle btn" title="Re-order">
					<i class="fas fa-grip-vertical fa-fw m-auto"></i>
				</span>
			</div>
		</div>`;

		return toReturn;
	}

	/**
	 * Merges the properties of the destination object with the source object.
	 *
	 * Its primary aim is to easily merge tools from the parent class to the subclass,
	 * allowing the subclass to inherit the tools from the parent class and thus, shortening
	 * the implementation of tools.
	 *
	 * If there are no sources provided, the method will return the destination object.
	 *
	 * ---
	 *
	 * **NOTE:** The method will merge the source and put it on the left most side of the
	 * toolbar. This means that the source will be the first to be rendered on the toolbar
	 * while the destination will always be on the right most hand side of the toolbar.
	 *
	 * **NOTE:** Same properties in the same position will overwrite the destination's properties.
	 * Likewise, same properties in the same position from source[0] will overwrite the properties
	 * of source[1] and so on.
	 *
	 * @param {Object} destination The object that will receive the properties of the sources.
	 * @param  {...Object} sources The objects that will be merged into the destination.
	 *
	 * @returns {Object} The merged object.
	 *
	 * @throws {Error} When the destination object is not provided.
	 * @throws {TypeError} When the destination object is not an object.
	 */
	mergeTools(destination, ...sources) {
		return Element.mergeTools(destination, ...sources);
	}

	/**
	 * Merges the properties of the destination object with the source object. This is a
	 * static method and can be called without an instance of the class.
	 *
	 * Its primary aim is to easily merge tools from the parent class to the subclass,
	 * allowing the subclass to inherit the tools from the parent class and thus, shortening
	 * the implementation of tools.
	 *
	 * If there are no sources provided, the method will return the destination object.
	 *
	 * ---
	 *
	 * **NOTE:** The method will merge the source and put it on the left most side of the
	 * toolbar. This means that the source will be the first to be rendered on the toolbar
	 * while the destination will always be on the right most hand side of the toolbar.
	 *
	 * **NOTE:** Same properties in the same position will overwrite the destination's properties.
	 * Likewise, same properties in the same position from source[0] will overwrite the properties
	 * of source[1] and so on.
	 *
	 * @param {Object} destination The object that will receive the properties of the sources.
	 * @param  {...Object} sources The objects that will be merged into the destination.
	 *
	 * @returns {Object} The merged object.
	 *
	 * @throws {Error} When the destination object is not provided.
	 * @throws {TypeError} When the destination object is not an object.
	 */
	static mergeTools(destination, ...sources) {
		// Checks if there's a destination.
		if (destination == undefined || destination == null)
			throw new Error(`Destination object not provided.`);
		// Checks if the destination is an object.
		else if (typeof destination !== `object`)
			throw new TypeError(`Destination object must be an object.`);

		// Checks if there are sources.
		if (sources.length == 0)
			return destination;

		// Initialize the positions as constants.
		const POS =  ['start', 'center', 'end'];
		// Initialize the container.
		let tools = {
			// Include all the positions of the tools.
			start: {},
			center: {},
			end: {}
		};

		// Then insert the destination's properties.
		for (let pos of POS) {
			Object.assign(tools[pos], destination[pos] ?? {});
		}

		// Iterate through the sources
		for (let source of sources) {
			// Iterate through the positions of the tools.
			for (let pos of POS) {
				Object.assign(tools[pos], source[pos] ?? {});
			}
		}

		for (let pos of POS) {
			if (Object.keys(tools[pos]).length === 0)
				delete tools[pos];
		}

		return tools;
	}

	delete() {
		Element.delete(this);
	}

	/**
	 * Deletes this element and removes it from the editor. This is a static method and can
	 * be called without an instance of the class.
	 *
	 * @param {Element|HTMLElement} el The element to delete.
	 *
	 * @throws {TypeError} If the parameter is not an instance of Element.
	 */
	static delete(el) {
		if (!(el instanceof Element) && !(el instanceof HTMLElement) && !(el instanceof Event))
			throw new TypeError(`${el} is not an instance of Element, HTMLElement, or Event.`);

		if (el instanceof Element)
			Element.delete(el.element());

		if (el instanceof Event)
			Element.delete(this.element());

		if (el instanceof HTMLElement)
			el.remove();
	}

	// OVERRIDE FUNCTIONS
	/**
	 * Builds the template for the tools that this element will use. The tools are
	 * defined by the static property {@link Element.TOOLS}, which follows this dot
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
		Object.keys(this.tools).forEach((pos) => {
			// Iterate through the tools of the position.
			Object.keys(this.tools[pos]).forEach((tool) => {
				let toolName = tool.split('/\s+/g').map((v) => {
					return v.charAt(0).toUpperCase() + v.slice(1);
				}).join(' ');
				let hTool = this.tools[pos][tool];
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

							// hTool.action.bind(this);
							hTool.action = Element.arrowBind(this, hTool.action);
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

		// Removes the last vertical line.
		tools = tools.replace(/<div class="vr"><\/div>$/, ``);

		return tools;
	}

	/**
	 * Fetches the tools defined for the specified element.
	 *
	 * @returns {Object} The tools defined for the element.
	 */
	get tools() {
		return Element.TOOLS;
	}

	static getInstance(el) {
		return Data.get(el, "templater");
	}

	/**
	 * Binds a context to an arrow function. This is useful when binding a function to a
	 * context that is not provided as `this` in the function.
	 *
	 * @param {Object} ctx The context to bind the arrow function to. Usually the instance of the class or the keyword `this`.
	 * @param {*} fn The function to bind to the context to.
	 *
	 * @returns {Function} The function bound to the context.
	 */
	static arrowBind(ctx, fn) {
		let arrowFnStr = fn.toString();
		let regex = /^(?:(?:\/\*[^(?:\*\/)]*\*\/\s*)|(?:\/\/[^\r\n]*))*\s*(?:(?:(?:async\s(?:(?:\/\*[^(?:\*\/)]*\*\/\s*)|(?:\/\/[^\r\n]*))*\s*)?function|class)(?:\s|(?:(?:\/\*[^(?:\*\/)]*\*\/\s*)|(?:\/\/[^\r\n]*))*)|(?:[_$\w][\w0-9_$]*\s*(?:\/\*[^(?:\*\/)]*\*\/\s*)*\s*\()|(?:\[\s*(?:\/\*[^(?:\*\/)]*\*\/\s*)*\s*(?:(?:['][^']+['])|(?:["][^"]+["]))\s*(?:\/\*[^(?:\*\/)]*\*\/\s*)*\s*\]\())/;

		if (typeof fn === 'function' && !regex.test(arrowFnStr))
			return (function() {
				return eval(arrowFnStr);
			}).call(ctx);
		return fn.bind(ctx);
	}
}
