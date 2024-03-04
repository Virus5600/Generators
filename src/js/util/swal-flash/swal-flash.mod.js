/**
 * SwalFlash is a class that provides a way to display flash messages using Sweetalert2.
 * It is a static class and cannot be instantiated. It provides three methods to display
 * flash messages: `error`, `info`, and `success`. Each method accepts an object as a
 * parameter, which contains properties that could be seen in {@link SwalFlash.defaultParams}
 * variable.
 *
 * @author Satch Navida
 * @version 1.2
 *
 * @see {@link SwalFlash.defaultParams}
 * @see https://sweetalert2.github.io/
 */
class SwalFlash {
	/**
	 * The default parameters for the flash messages.
	 *
	 * @type {Object}
	 */
	static defaultParams = {
		/**
		 * The title of the flash message.
		 */
		title: null,
		/**
		 * The message of the flash.
		 */
		message: null,
		/**
		 * Defines whether to show the icon or not. `null` or `false` will not show the icon,
		 * while `true` will show the icon.
		 */
		has_icon: null,
		/**
		 * Defines whether the flash message is a toast or not. `null` or `false` will not
		 * show the flash as a toast, while `true` will show the flash as a toast.
		 */
		toast: true,
		/**
		 * The position of the flash message. The default is `top`.
		 *
		 * Position options:
		 * - `top-start`
		 * - `top`
		 * - `top-end`
		 * - `center-start`
		 * - `center`
		 * - `center-end`
		 * - `bottom-start`
		 * - `bottom`
		 * - `bottom-end`
		 */
		position: `top`,
		/**
		 * Identifies whether the flash message has a timer or not. `null` or `false` will
		 * leave the flash message open, while `true` will close the flash message after a
		 * certain duration. If `true`, the duration will be set to 10000ms (10 seconds) by
		 * default.
		 */
		has_timer: true,
		/**
		 * The duration of the flash message. The default is 10000ms (10 seconds).
		 * This is only applicable if `has_timer` is set to `true`.
		 */
		duration: 10000,
		/**
		 * Identifies whether the flash message will close when clicked outside or not.
		 * `null` or `false` will not close the flash message when clicked outside, while
		 * `true` will close the flash message when clicked outside.
		 */
		outside_click: true,
	}

	/**
	 * The constructor of the class. It throws an error when the class is instantiated.
	 *
	 * @throws {Error} When the class is instantiated.
	 * @private
	 */
	constructor() {
		if (this instanceof SwalFlash)
			throw Error('SwalFlash is a static class and cannot be instantiated');
	}

	/**
	 * Displays a flash error message.
	 *
	 * @param {SwalFlash.defaultParams} params The parameters for the flash message. Refer to {@link SwalFlash.defaultParams} for more information.
	 */
	static error(params = this.defaultParams) {
		SwalFlash.#sendEvent(`flash_error`, params);
	}

	/**
	 * Displays a flash information message.
	 *
	 * @param {SwalFlash.defaultParams} params The parameters for the flash message. Refer to {@link SwalFlash.defaultParams} for more information.
	 */
	static info(params = this.defaultParams) {
		SwalFlash.#sendEvent(`flash_info`, params);
	}

	/**
	 * Displays a flash success message.
	 *
	 * @param {SwalFlash.defaultParams} params The parameters for the flash message. Refer to {@link SwalFlash.defaultParams} for more information.
	 */
	static success(params = this.defaultParams) {
		SwalFlash.#sendEvent(`flash_success`, params);
	}

	/**
	 * Sends a custom event that triggers the flash message.
	 *
	 * @param {String} type The type of the flash message. It could be `flash_error`, `flash_info`, or `flash_success`.
	 * @param {SwalFlash.defaultParams} params The parameters for the flash message.
	 *
	 * @throws {Error} When Swal is not instantiated or not in the global scope.
	 * @private
	 */
	static #sendEvent(type, params) {
		if (Swal) {
			window.dispatchEvent(new CustomEvent(type, {
				detail: params
			}));
		}
		else {
			throw Error('Sweetalert2 not instantiated. Please include the said library (https://sweetalert2.github.io/). Currently testing for `Swal` keyword.');
		}
	}
}

window.addEventListener('flash_error', (e) => {
	let options = e.detail;
	Swal.fire(__setSwalFlashOptions(options, 'error'));
});

window.addEventListener('flash_info', (e) => {
	let options = e.detail;
	Swal.fire(__setSwalFlashOptions(options, 'info'));
});

window.addEventListener('flash_success', (e) => {
	let options = e.detail;
	Swal.fire(__setSwalFlashOptions(options, 'error'));
});

/**
 * Mixes the default parameters with the parameters provided by the user.
 * This also filters out the `null` and `undefined` values from the user's parameters, and
 * replaces them with the default parameters. This is to ensure that the flash message
 * will have the correct parameters.
 *
 * @param {SwalFlash.defaultParams} options The parameters provided by the user.
 * @param {String} type The type of the flash message. It could be `error`, `info`, or `success`.
 */
const __setSwalFlashOptions = (options, type) => {
	// Filter out the null and undefined values from the user's parameters.
	Object.keys(options).forEach(key => {
		if (options[key] === null || options[key] === undefined) {
			options[key] = SwalFlash.defaultParams[key];
		}
	});

	// Merge the default parameters with the user's parameters.
	options = {
		...SwalFlash.defaultParams,
		...options
	};

	/* Removes non-Swal parameters and apply custom changes to the parameter options to
	display the proper Swal params. */
	// ICON
	if (options.has_icon) {
		options.icon = type;
	}
	else {
		delete options.icon;
	}

	// TIMER
	if (options.has_timer) {
		options.timer = options.duration;
		delete options.duration;
	}

	// MESSAGE
	if (options.message !== null) {
		options.html = options.message;
	}

	// TOAST
	if (options.toast) {
		options.showConfirmButton = false;
	}
	else {
		options.showConfirmButton = true;
	}

	// OUTSIDE CLICK
	if (!options.toast) {
		if (options.outside_click) {
			options.allowOutsideClick = true;
			options.backdrop = true;
		}
	}

	// Removes the non-Swal parameters.
	let keys = Object.keys(options);
	if (keys.includes('has_icon')) delete options.has_icon;
	if (keys.includes('duration') && !options.has_timer) delete options.duration;
	if (keys.includes('has_timer')) delete options.has_timer;
	if (keys.includes('message')) delete options.message;
	if (keys.includes('outside_click')) delete options.outside_click;

	// Apply the custom show and hide animations.
	options = options = {
		...options,
		customClass: {
			title: `text-white text-center fs-3 my-0`,
			content: `text-white`,
			popup: `px-3`
		},
		showClass: {
			popup: `animate__animated animate__bounceIn animate__faster`
		},
		hideClass: {
			popup: `animate__animated animate__fadeOutUp animate__faster`
		},
	}

	// Apply the custom background and text colors.
	switch (type) {
		case 'error':
			options = {
				...options,
				background: `#dc3545`
			};
			break;

		case 'info':
			options = {
				...options,
				background: `#17a2b8`
			};
			break;

		case 'success':
			options = {
				...options,
				background: `#28a745`
			};
			break;
	}

	return options;
}

Object.freeze(SwalFlash.defaultParams);
Object.freeze(SwalFlash);

export default SwalFlash;
