import Data from '../Data.js';
import { PopoverData } from '../PopoverData.js';

// ---------------------------------------------------------------------------------------------- //
// This counter will serve as the time (in hours) the developer tried to understand and fix this
// mess of an implementation. The implementor is drunk or stupid when he implemented this.
//
// Let this be a warning...
//
// Counter: 2
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

	// PROTECTED(?) VARIABLES
	__tools = null;

	// PRIVATE VARIABLES
	/**
	 * The actual HTML element fetched from the newly created Element.
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

		return this;
	}

	/**
	 * Toggles the popover to show.
	 */
	#showPopover() {
		if (this.#popover.visible)
			return;

		this.#popover.show();
	}

	/**
	 * Toggles the popover to hide.
	 */
	#hidePopover() {
		if (!this.#popover.visible)
			return;

		this.#popover.hide();
	}

	#togglePopover() {
		this.#popover.toggle();
	}

	// PUBLIC FUNCTIONS
	/**
	 * Returns the element reference, allowing direct element modifications.
	 *
	 * @return {HTMLElement}	An instance of HTML element.
	 */
	element() {
		return this.#element;
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

		this.#popover = new PopoverData(popover, Data, "templater", PopoverData.TRIGGERS.CLICK);

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

	// OVERRIDE FUNCTIONS
	/**
	 * Gets the tools to render on the element's popover. The tools is composed of three
	 * sections which are the `start`, `center`, and `end`, and are positioned on the left,
	 * center, and right respectively.
	 *
	 * The contents of this method is defined by the local static {@link TOOLS} property.
	 */
	getTools() {
		if (this.__tools)
			return this.__tools;

		throw new Error(`Unimplemented abstract method: getTools()`);
	}

	static getInstance(el) {
		return 	Data.get(el, "templater");
	}

	/**
	 * Deletes this element and removes it from the editor. This is a static method and can
	 * be called without an instance of the class.
	 *
	 * @param {Element} el The element to delete.
	 *
	 * @throws {TypeError} If the parameter is not an instance of Element.
	 */
	static delete(el) {
		if (!el instanceof Element) {
			throw new TypeError(`${el} is not an instance of Element.`);
		}

		el.element().remove();
	}
}
