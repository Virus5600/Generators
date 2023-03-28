// Utility
import UniqueArray from "../../assets/js/unique-array/unique-array.mod";
import SwalFlash from "../../assets/js/swal-flash/swal-flash.mod";

// Validator
import Validator from "./Validation/Validator";

var validation = {
	rules: {
		"use_range": ["sometimes", "boolean"],
		"range_min": ["sometimes", "numeric", "min:0", "max:$range_max"],
		"range_max": ["sometimes", "numeric", "min:$range_min", "max:255"],
		"length": ["sometimes", "numeric", "between:0,255"],
		"chars": ["required", "array", "min:1"],
		"chars.*": ["sometimes", "in:alpha,numeric,spec"]
	},
	message: {
		"use_range": {
			"boolean": `Malformed data, please refresh the page`,
		},
		"range_min": {
			"numeric": `Minimum range should be a number`,
			"min": `Minimum value should be :min`,
			"max": `Maximum value should be :max`,
		},
		"range_max": {
			"min": `Maximum value should be :min`,
			"max": `Maximum value should be :max`,
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

$(document).ready(function() {
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
		let newMin = obj.val();

		newMin = newMin.match(/^-?\d+$/g).length > 0 ? parseInt(newMin) : parseInt(target.attr('min'));

		target.attr('min', newMin);
	}).trigger('change');

	// RANGE MAX SETTER
	$(`#range_max`).on('change', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#range_min`);
		let newMax = obj.val();

		newMax = newMax.match(/^-?\d+$/g).length > 0 ? parseInt(newMax) : parseInt(target.attr('max'));

		target.attr('max', newMax);
	}).trigger('change');

	// FORM RESETTER
	$(`#reset`).on('click', (e) => {
		$(`string-card.show`).removeClass(`show`);
		$(`[name]`).removeClass(`is-valid is-invalid`);
		$(`form`)[0].reset();
		
		$(`#generated_string`).text("")
			.closest(`string-card`)
			.removeClass(`show`);
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

window.validate = function(form) {
	// Capture all inputs
	let fields = $(`[name]`).not(`:disabled, [disabled]`);
	let valids = $(`input:valid`).not(`:disabled, [disabled]`);
	let invalids = $(`input:invalid`).not(`:disabled, [disabled]`);

	// Set validation input
	validation.values = form.serializeFormJSON();

	// Update some rule values
	let variableRule = ['range_min', 'range_max'];
	for (let r of variableRule) {
		validation.rules[r].find((v, k) => {
			if (v.match(/\$\w+/g)) {
				let targetKey = v.match(/(\$)(\w+)/)[2];

				if (!Object.keys(validation.values).includes(targetKey))
					return;

				validation.rules[r][k] = v.replace(/(\$)(\w+)/, validation.values[targetKey]);
			}
		});
	}

	let validator = new Validator(
		validation.values,
		validation.rules,
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

		$(`#generated_string`)
			.text(new RandExp(regex).gen())
			.closest(`.string-card`)
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
}