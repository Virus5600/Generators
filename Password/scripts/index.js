const validation = {
	rules: {
		"use_range": ["sometimes", "boolean"],
		"range_min": ["sometimes", "numeric", "min:0", "max:$range_max"],
		"range_max": ["sometimes", "numeric", "min:$range_min", "max:255"],
		"length": ["sometimes", "numeric", "between:0,255"],
		"chars": ["required", "array", "min:1"],
		"chars.*": ["sometimes", "boolean"]
	},
	message: {
		"use_range.boolean": `Malformed data, please refresh the page`,
		"range_min.numeric": `Minimum range should be a number`,
		"range_min.min": `Minimum value should be :val`,
		"range_min.max": `Maximum value should be :val`,
		"range_max.min": `Maximum value should be :val`,
		"range_max.max": `Maximum value should be :val`,
		"length.numeric": `Length should be a number`,
		"length.between": `Length should be a value between :val_min and :val_max`,
		"chars.required": `Character Accepted is required`,
		"chars.array": `Malformed data, please refresh the page`,
		"chars.*.boolean": `Malformed data, please refresh the page`,
	}
}

$(document).ready(function() {
	// ENABLE/DISABLE RANGE OPTION
	$(`#useRange`).on('change', (e) => {
		let obj = $(e.currentTarget);

		if (obj.prop('checked')) {

		}
		else {
		}
	});

	$("#generate").on('click', (e) => {
	});
});

function validate() {
	// Capture all inputs
	let fields = $(`[name]`).not(`:disabled, [disabled]`);
	let valids = $(`input:valid`).not(`:disabled, [disabled]`);
	let invalids = $(`input:invalid`).not(`:disabled, [disabled]`);

	console.log(fields);

	// Update their class
	valids.addClass("is-valid");
	valids.removeClass("is-invalid");

	invalids.addClass("is-invalid");
	invalids.removeClass("is-valid");

	// Update validation message
	valids.closest(`.form-group`).find("feedback").removeClass(`text-danger`);
	invalids.closest(`.form-group`).find("feedback").addClass(`text-danger`);
}