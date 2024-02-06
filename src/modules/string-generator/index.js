// Utility
import UniqueArray from "../../js/util/unique-array/unique-array.mod.js";
import SwalFlash from "../../js/util/swal-flash/swal-flash.mod.js";

// Validator
import Validator from "../../js/util/validator/Validator.js";

var validation = {
	rules: {
		"use_range": ["sometimes", "boolean"],
		"range_min": ["sometimes", "numeric", "min:1", "max:$range_max"],
		"range_max": ["sometimes", "numeric", "min:$range_min", "max:255"],
		"length": ["sometimes", "numeric", "between:1,255"],
		"chars": ["required", "array", "min:1"],
		"chars.*": ["sometimes", "in:alpha,numeric,spec"]
	},
	message: {
		"use_range": {
			"boolean": `Malformed data, please refresh the page`,
		},
		"range_min": {
			"numeric": `Minimum range should be a number`,
			"min": `Minimum value should be at least :min`,
			"max": `Maximum value should be at max, :max`,
		},
		"range_max": {
			"numeric": `Maximum range should be a number`,
			"min": `Maximum value should be at least :min`,
			"max": `Maximum value should be at max, :max`,
		},
		"length": {
			"length.numeric": `Length should be a number`,
			"length.between": `Length should be a value between :min and :max`,
		},
		"chars": {
			"required": `Character Accepted is required`,
			"array": `Malformed data, please refresh the page`,
			"min": `Please select at least 1 option`,
		},
		"chars.*": {
			"boolean": `Malformed data, please refresh the page`,
		}
	}
};

$(function() {
	// Initialize necessary utilities
	UniqueArray();

	// ENABLE/DISABLE RANGE OPTION
	$(`#useRange`).on('change', (e) => {
		let obj = $(e.currentTarget);
		let range = $("#length_range");
		let fixed = $("#length_fixed");

		if (obj.prop('checked')) {
			range.find(`input`).prop('disabled', false);
			fixed.find(`input`).prop('disabled', true).removeClass("is-valid is-invalid");
		}
		else {
			range.find(`input`).prop('disabled', true).removeClass("is-valid is-invalid");
			fixed.find(`input`).prop('disabled', false);
		}
	}).trigger('change');

	// RANGE MIN SETTER
	$(`#range_min`).on('change', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#range_max`);
		let newMin = obj.val() ?? 0;

		newMin = (newMin.match(/^-?\d+$/g)?.length ?? 0) > 0 ? parseInt(newMin) : parseInt(target.attr('min'));

		target.attr('min', newMin);
	}).trigger('change');

	// RANGE MAX SETTER
	$(`#range_max`).on('change', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#range_min`);
		let newMax = obj.val() ?? 0;

		newMax = (newMax.match(/^-?\d+$/g)?.length ?? 0) > 0 ? parseInt(newMax) : parseInt(target.attr('max'));

		target.attr('max', newMax);
	}).trigger('change');

	// FORM SUBMIT
	$(`#string_form`).on('submit', (e) => {
		e.preventDefault();
		e.stopPropagation();

		validate($(e.currentTarget));
	});

	// FORM RESETTER
	$(`#resetForm`).on('click', (e) => {
		$(`#restorePassView`).trigger('click')
			.remove();
		let useRange = $(`#useRange`);

		if (useRange.prop(`checked`)) {
			useRange.prop(`checked`, false).trigger(`change`);
		}

		$(`[name]`).removeClass(`is-valid is-invalid`)
			.closest(`form`)
			.each((k, v) => v.reset());

		let gstr = $(`#generated_string`);
		animateText(gstr, '');

		SwalFlash.success("Form Reset");
	});

	// MINIMIZE/MAXIMIZE
	$(document).on('click', `.minimize, .maximize`, (e) => {
		let btn = $(e.target), obj;

		if (typeof btn.attr('data-target') != 'undefined')
			obj = $(btn.attr('data-target'));
		else
			obj = btn;

		let window = obj.closest(".window");
		let collapser = window.closest(".collapse");
		let others = $(`[data-parent="#${window.attr("id")}"]`);

		if (window.hasClass("maximized")) {
			others.addClass("maximize").removeClass("minimize").attr("title", "Maximize");
			btn.addClass("maximize").removeClass("minimize").attr("title", "Maximize");
			obj.addClass("maximize").removeClass("minimize").attr("title", "Maximize");
			window.addClass("minimized").removeClass("maximized");

			setTimeout(
				() => collapser.collapse("hide"),
				250
			);
		}
		else if (window.hasClass("minimized")) {
			collapser.collapse("show");
			others.addClass("minimize").removeClass("maximize").attr("title", "Minimize");
			btn.addClass("minimize").removeClass("maximize").attr("title", "Minimize");
			obj.addClass("minimize").removeClass("maximize").attr("title", "Minimize");

			window.addClass("maximized").removeClass("minimized");
		}
	});
});

/**
 * Validates a single form and returns whether they passed the validation or not. Since this
 * is only used in a very specific instance, the rules and messages are all from a single
 * source.
 *
 * @param {HTMLFormElement|JQuery} form A single form element that will be validated. It could be an `HTMLFormElement` object or a `JQuery` HTML object.
 * @returns boolean Returns `true` if the form passes validation; `false` otherwise.
 */
const validate = function(form) {
	// Capture all inputs
	let fields = $(`[name]`).not(`:disabled, [disabled]`);
	let valids = $(`input:valid`).not(`:disabled, [disabled]`);
	let invalids = $(`input:invalid`).not(`:disabled, [disabled]`);

	// Set validation input
	validation.values = form.serializeFormJSON(true);

	// Update some rule values
	let variableRule = ['range_min', 'range_max'];
	let modVRules = JSON.parse(JSON.stringify(validation.rules));
	for (let r of variableRule) {
		modVRules[r].find((v, k) => {
			if (v.match(/\$\w+/g)) {
				let targetKey = v.match(/(\$)(\w+)/)[2];

				if (!Object.keys(validation.values).includes(targetKey))
					return;

				modVRules[r][k] = v.replace(/(\$)(\w+)/, validation.values[targetKey]);
			}
		});
	}

	let validator = new Validator(
		validation.values,
		modVRules,
		validation.message
	);

	let invalidFields = validator.invalidFields();
	let validFields = validator.validFields();

	// Update their class
	fields.removeClass("is-valid is-invalid");

	valids.addClass("is-valid");
	valids.removeClass("is-invalid");

	invalids.addClass("is-invalid");
	invalids.removeClass("is-valid");

	// Update validation message
	valids.closest(`.form-group`).find("feedback").removeClass(`text-danger`);
	invalids.closest(`.form-group`).find("feedback").addClass(`text-danger`);

	// Apply the validators validation
	$.each(validFields, (k, v) => {
		$(`[data-validation]`).text("");
	});

	$.each(invalidFields, (k, v) => {
		let validationMsgFields = $(`[data-validation]`);
		validationMsgFields.each(function() {
			let obj = $(this);

			if (obj.attr("data-validation").match(`(${v})`) != null) {
				obj.closest(`.form-group`)
					.find(`input, select, textarea`)
					.not(":disabled, [disabled]")
					.removeClass("is-valid")
					.addClass("is-invalid");
			};
		});

		validationMsgFields.text(function() {
			let obj = $(this);
			if (obj.attr('data-validation').match(v))
				obj.text(validator.first(v)).addClass("text-danger");
		});

	});

	// If the validation failed, prevent the code from progressing further, then show a toast warning
	if (validator.fails()) {
		SwalFlash.error("Please re-check the data");
		return;
	}
	else {
		let values = validator.validate();
		let chars = values.chars;

		let regex = "[";
		regex += chars.includes("alpha") ? `a-zA-Z` : ``;
		regex += chars.includes("numeric") ? `0-9` : ``;
		regex += chars.includes("spec") ? `\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\'\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-` : ``;
		regex += "]";

		regex += typeof values.use_range == 'undefined' ? `{${values.length}}` : `{${values.range_min},${values.range_max}}`;

		let gstr = $(`#generated_string`);
		let newStr = new RandExp(regex).gen();

		animateText(gstr, newStr);

		gstr.closest(`.string-card`)
			.addClass(`show`)
			.find(`.minimize, .maximize`)
			.addClass(`minimize`).removeClass(`maximize`)
			.closest(`.window`)
			.addClass(`maximized`).removeClass(`minimized`);

		let restoreAppendTarget = $(`#stringGenFooter`);
		let restore = restoreAppendTarget.find(`#restorePassView`);
		if (restore.length <= 0 ) {
			restore = $(`
				<span class="ml-auto mr-0 insert minimize" id="restorePassView" data-target=".window .minimize, .window .maximize" data-parent="#stringCard" title="Minimize"></span>
			`);

			restoreAppendTarget.append(restore);
			setTimeout(() => restore.removeClass(`insert`), 1000);

			let collapser = $(restore.attr('data-target')).closest(".collapse");
			if (collapser.length > 0)
				collapser.collapse("show");
		}
		else {
			let collapser = $(restore.attr('data-target')).closest(".collapse");
			collapser.collapse("show");

			if (collapser.length > 0)
				setTimeout(
					() => restore.addClass(`minimize`).removeClass(`maximize`), 250
				);
		}
	}

	return validator.fails();
}

/**
 * Animates the texts as if they're being cleared and typed in using a keyboard. This animation is
 * pure JavaScript and thus, really has no support for CSS preferences. However, due to considerations
 * they are applied and can also be skipped via a click inside the container.
 *
 * @param {HTMLElement|JQuery} container An element where the text animation will be applied to.
 * @param {string} newStr The new string that will be "typed" in place.
 * @param {number} baseInterval **(Optional)** The approximate interval between changes. It is counted in milliseconds. Default is 25.5 milliseconds.
 */
const animateText = (container, newStr, baseInterval = 25.5) => {
	let isVanilla = typeof container.textContent === "undefined" ? false : true;

	// Use the plain old text replace instead of animating if the users prefers reduced motions.
	if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
		if (isVanilla)	container.textContent = newStr;
		else			container.text(newStr);

		return;
	}

	// newStr fallbacks
	newStr = typeof newStr === 'string' ? newStr : '';

	// Base variables
	let oldStr = container.textContent ?? container.text();
	let oldInterval = baseInterval * 10 / oldStr.length;
	let newInterval = baseInterval * 10 / newStr.length;

	// Control variables
	let timers = [];

	let skipTextAnimation = () => {
		let timer;
		while(timer = timers.pop()) {
			clearTimeout(timer);
		}

		if (isVanilla)	container.textContent = newStr;
		else			container.text(newStr);
	}

	if (isVanilla)	container.addEventListener(`click`, skipTextAnimation);
	else			container.on(`click`, skipTextAnimation);

	for (let i = 0; i < oldStr.length; i++) {
		timers.push(
			setTimeout(() => {
				if (isVanilla)	container.textContent = container.textContent.slice(0, -1);
				else			container.text(container.text().slice(0, -1));
			}, oldInterval * i)
		);
	}

	timers.push(
		setTimeout(() => {
			for (let i = 0; i < newStr.length; i++) {
				timers.push(
					setTimeout(() => {
						if (isVanilla)	container.textContent = container.textContent + newStr[i];
						else			container.text(container.text() + newStr[i]);
					}, newInterval * i)
				);

				if (i >= newStr.length - 1) {
					if (isVanilla)	container.removeEventListener(`click`, skipTextAnimation);
					else			container.off(`click`, skipTextAnimation);
				}
			}
		}, oldInterval * oldStr.length)
	);
}
