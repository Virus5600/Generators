import Element from "../Element.js";

export default class Paragraph extends Element {
	constructor(props = {}) {
		props = {
			...props,
			el: document.createElement(`p`)
		};

		super(props);
	}
}
