import Element from "../Element.js";

/**
 * The base class for all Container elements for the Templater. It extends the {@link Element}
 * class, utilizing the OOP concept and thus, utilizing general methods that might have been
 * implemented over and over for every single HTML element sub-class.
 *
 * @author Satch Navida
 * @version 1.0.0
 */
export class Container extends Element {
	/**
	 * Contains various types of a container. This list may be updated overtime, allowing
	 * other types of containers that may be developed in the future.
	 */
	static TYPES = [
		`container`,
		`row`,
		`column`
	];

	/**
	 * Identifies whether the row or column is in reverse order. Does
	 * not do anything when the type is set to container.
	 */
	#reverse = false;

	constructor(type = Container.TYPES[0], props = {}) {
		super();
	}
}
