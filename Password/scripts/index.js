// Utility
import UniqueArray from "../../assets/js/unique-array/unique-array.mod.js";

// Validator
import Validator from "./Validation/Validator.js";

var validation = {
	rules: {
		"use_range": ["sometimes", "boolean"],
		"range_min": ["sometimes", "numeric", "min:0", "max:$range_max"],
		"range_max": ["sometimes", "numeric", "min:$range_min", "max:255"],
		"length": ["sometimes", "numeric", "between:0,255"],
		"chars": ["required", "array", "min:1"],
		"chars.*": ["sometimes", "boolean"]
	},
	message: {
		"use_range": {
			"boolean": `Malformed data, please refresh the page`,
		},
		"range_min": {
			"numeric": `Minimum range should be a number`,
			"min": `Minimum value should be :val`,
			"max": `Maximum value should be :val`,
		},
		"range_max": {
			"min": `Maximum value should be :val`,
			"max": `Maximum value should be :val`,
		},
		"length": {
			"length.numeric": `Length should be a number`,
			"length.between": `Length should be a value between :val_min and :val_max`,
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

	$(`#range_min`).on('change', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#range_max`);
		let newMin = obj.val();

		newMin = newMin.match(/^\d+$/g).length > 0 ? parseInt(newMin) : parseInt(target.attr('min'));

		target.attr('min', newMin);
	}).trigger('change');

	$(`#range_max`).on('change', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#range_min`);
		let newMax = obj.val();

		newMax = newMax.match(/^\d+$/g).length > 0 ? parseInt(newMax) : parseInt(target.attr('max'));

		target.attr('max', newMax);
	}).trigger('change');

	$(`#reset`).on('click', (e) => {
		$(`.password-card.active`).removeClass(`active`);
		$(`[name]`).removeClass(`is-valid is-invalid`);
		$(`form`)[0].reset();
	});
});

window.validate = function(form) {
	// Capture all inputs
	let fields = $(`[name]`).not(`:disabled, [disabled]`);
	let valids = $(`input:valid`).not(`:disabled, [disabled]`);
	let invalids = $(`input:invalid`).not(`:disabled, [disabled]`);

	// Set validation input
	validation.values = form.serializeFormJSON();
	console.table(validation.values);

	// Update some rule values
	let variableRule = ['range_min', 'range_max'];
	for (let r of variableRule) {
		validation.rules[r].find((v, k) => {
			if (v.match(/\$\w+/g)) {
				// console.log(v);
				// console.log(validation.rules[r][k] = v.replace(/\$\w+/, validation.values.));
				// console.log(v);
			}
		});
	}

	let validator = new Validator(
		validation.values,
		validation.rules,
		validation.message
	);

	// Update their class
	fields.removeClass("is-valid is-invalid");

	valids.addClass("is-valid");
	valids.removeClass("is-invalid");

	invalids.addClass("is-invalid");
	invalids.removeClass("is-valid");

	// Update validation message
	valids.closest(`.form-group`).find("feedback").removeClass(`text-danger`);
	invalids.closest(`.form-group`).find("feedback").addClass(`text-danger`);
}