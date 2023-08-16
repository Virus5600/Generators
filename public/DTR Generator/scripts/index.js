// Utility
import UniqueArray from "../../resources/js/util/unique-array/unique-array.mod.js";
import SwalFlash from "../../resources/js/util/swal-flash/swal-flash.mod.js";

// Validator
import Validator from "../../resources/js/util/validator/Validator.js";

const prefix = `data-dtr`;
const dataAttr = [
	'name',
	'period',
	'days',
	'saturday',
	'verifier',
	'verifier-position'
];

const DTR = {
	list: [],
	displayContent(e) {
		DTR.reset();

		let reader = new FileReader();
		let content;

		reader.onload = () => {
			content = reader.result;
			let toAppend = `<ul>`;

			$.each(content.split("\n"), (k, v) => {
				DTR.list.push(v);
				toAppend += `<li>${v.replaceAll(`\t`, `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)}</li>`;
			});

			toAppend += `</ul>`;

			$(`#listPreview`).html(toAppend);
			DTR.preview();
		};

		if (e.target.files.length > 0)
			reader.readAsText(e.target.files[0]);
	},
	preview() {
		let dates = "";

		for (let i = 1; i <= 31; i++) {
			let date = $(`#date-${i}`);

			dates += `
				<div class="dtr-row" data-date="${date.attr("id")}">
					<div class="dtr-cell text-end px-1">${i}</div>
					
					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? "08:00" : ""}" readonly>
					</div>
					
					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? "12:00" : ""}" readonly>
					</div>
					
					<div class="dtr-cell border border-secondary small fst-italic fw-bold text-danger" data-update>${date.prop(`checked`) ? "BRK" : ""}</div>
					
					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? "01:00" : ""}" readonly>
					</div>
					
					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? "05:00" : ""}" readonly>
					</div>
					
					<div class="dtr-cell"></div>
				</div>
			`;
		}

		DTR.reset();
		$(dates).insertAfter(`#dtrSample #dtrHeader`);
		$(`[data-dtr-toggle]`).attr(`data-dtr-displayed`, `true`);

		if ($(`#generate`).prop(`disabled`))
			$(`#generate`).prop(`disabled`, false);
	},
	reset() {
		for (let i = 1; i <= 31; i++) {
			$(`div.dtr-row[data-date]`).remove();
		}
	},
	validate() {
		UniqueArray();

		let form = $(`#form`);

		let validation = {
			rules: {
				"period": ["required", "string"],
				"days": ["nullable", "numeric", "between:1,20"],
				"saturday": ["nullable", "numeric", "between:0,5"],
				"verifier": ["required", "string"],
				"verifier-position": ["required", "string"],
			},
			message: {
				"period": {
					"required": `A period for the DTR is required`,
					"string": `Please provide a proper value`
				},
				"days": {
					"numeric": `Days should be a number`,
					"between": `Value should be between 1 to 20, depending on the provided period`
				},
				"saturday": {
					"numeric": `Saturdays depicts the amount of Saturdays they worked`,
					"between": `Value should be between 0 to 5, depending on how many Saturdays they've worked`
				},
				"verifier": {
					"required": `Verifier is the person-in-charge or an officer-in-charge`,
					"string": `Verifier must be a name of a person`
				},
				"verifier-position": {
					"required": `The position of the verifier is required`,
					"string": `Please provide a valid position`
				}
			}
		};

		// Capture all inputs
		let fields = $(`[name`).not(`:disabled, [disabled]`);
		let valids = $(`input:valid`).not(`:disabled, [disabled]`);
		let invalids = $(`input:invalid`).not(`:disabled, [disabled]`);

		// Set validation input
		validation.values = form.serializeFormJSON();

		// Actual Validation
		let validator = new Validator(
			validation.values,
			validation.rules,
			validation.message
		);

		let invalidFields = validator.invalidFields();
		let validFields = validator.validFields();

		// Update their class
		fields.removeClass(`is-valid is-invalid`);
		
		valids.addClass(`is-valid`)
			.removeClass(`is-invalid`);

		invalids.addClass(`is-invalid`)
			.removeClass(`is-valid`);

		// Update validation message
		valids.closest(`.form-group`)
			.find(`.feedback`)
			.removeClass(`text-danger`);
		invalids.closest(`.form-group`)
			.find(`.feedback`)
			.addClass(`text-danger`);

		// Apply the validators validation
		$.each(validFields, (k, v) => {
			$(`[data-validation]`).text(``);
		});

		$.each(invalidFields, (k, v) => {
			let validationMsgFields = $(`[data-validation]`);

			validationMsgFields.each(function() {
				let obj = $(this);

				if (obj.attr(`data-validation`).match(`(${v})`) != null) {
					obj.closest(`.form-group`)
						.find(`input, sekect, textarea`)
						.not(`:disabled, [disabled]`)
						.removeClass(`is-valid`)
						.addClass(`is-invalid`);
				}
			});

			validationMsgFields.text(function() {
				let obj = $(this);
				if (obj.attr(`data-validation`).match(`(${v})`)) {
					obj.text(validator.first(v))
						.addClass(`text-danger`);
				}
			});
		});

		// If the validation failed, prevent code from progressing further, then show a toast warning
		if (validator.fails()) {
			SwalFlash.error("Please re-check the data you've provided");
			return false;
		}
		else {
			SwalFlash.info("Generating preview...");
			DTR.generate();
			return true;
		}
	},
	generate() {
		let target = $(`#generatedDTR`);
		let toAppend = ``;

		$(`#listPreview li`).each((k, v) => {
			let name = $(v).text().trim();

			let DTR = $(`#dtrSample`).parent().clone()
				.find(`#dtrSample`)
				.removeAttr(`id`)
				.removeProp(`id`)
				.parent();

			dataAttr.forEach((attr) => {
				let verifier = attr == `verifier` || attr == `verifier-position`;
				let obj = DTR.find(`[${prefix}-${attr}] ${verifier ? `` : `input`}`.trim());
				
				obj.addClass(`text-black`)
					.removeAttr(`readonly`)
					.prop(`readonly`, false);

				if (attr == 'name') {
					if (verifier)
						obj.text(name);
					else
						obj.val(name).attr(`value`, name);
				}
				else {
					let attrVal = $(`[name=${attr}]`).val();
					
					if (verifier)
						obj.text(attrVal ?? ``);
					else
						obj.val(attrVal ?? ``).attr(`value`, attrVal ?? ``);
				}

			});

			DTR.find(`.border-secondary`)
				.removeClass(`border-secondary`)
				.addClass(`border-black`);

			DTR.find(`.dtr.m-2`)
				.removeClass(`m-2`);

			DTR.find(`[data-update] > input`)
				.removeAttr(`readonly`)
				.prop(`readonly`, false)
				.addClass(`text-black`);
			
			toAppend += DTR.html();
			// TODO: Implement Inputs for the generated preview.
		});
		
		target.html(toAppend)
			.addClass(`py-3`);

		if ($(`#print`).prop(`disabled`))
			$(`#print`).prop(`disabled`, false);
	},
	print() {
		// DATA PARSING
		const printTarget = $(`#printContainer > .row`);
		let toAppend = ``;

		$(`#generatedDTR`).children().each((k, v) => {
			let data = $(v);

			// Cleanup input fields
			data.find(`input`).each((i, o) => {
				let input = $(o);
				let parent = input.parent();
				let grandParent = parent.parent();

				parent.html(input.val());

				if (input.val().length <= 0)
					grandParent.find(`[data-update]`).html(``);
			});

			toAppend += `<div class="col-6">${data[0].outerHTML}</div>`;
		});

		printTarget.html(toAppend);

		// ACTUAL PRINTING
		const elms =  $(`body > *:not(script, style, link)`);
		elms.addClass(`print-enabled`);

		window.print();

		setTimeout(() => {
			elms.removeClass(`print-enabled`);
		}, 1000);
	}
};

const TUTORIAL = {
	components: {
		"#jobOrderArea": {
			title: `Insert List of Job Orders`,
			content: `asd`
		},
		"#periodArea": {
			title: ``,
			content: ``
		},
		"#daysArea": {
			title: ``,
			content: ``
		},
		"#saturdayArea": {
			title: ``,
			content: ``
		},
		"#evrifierArea": {
			title: ``,
			content: ``
		},
		"#verifierPosArea": {
			title: ``,
			content: ``
		},
		"#datesArea": {
			title: ``,
			content: ``
		},
		"#dtrSample": {
			title: ``,
			content: ``
		}
	},
	index: 0,
	previous: "null",
	previousPopover: null,
	init() {
		let body = $(`body`);
		let backdrop = `<div class="backdrop" id="tutorial-backdrop"></div>`;

		body.find(`.backdrop`).remove();

		body.addClass(`highlight`)
			.append(backdrop);

		TUTORIAL.iterate(0);
	},
	iterate(index) {
		const key = Object.keys(TUTORIAL.components)[index++];
		const obj = TUTORIAL.components[key];

		const overlay = `<div class="overlay" id="tutorial-overlay"></div>`
		
		if (TUTORIAL.previos != null &&
			TUTORIAL.previous.length > 0) {
			$(previous).find(`#tutorial-overlay`)
				.remove();
		}
		let popoverElem = $(key).addClass(`position-relative target`)
			.attr(`role`, `button`)
			.attr(`data-bs-toggle`, `popover`)
			.attr(`data-bs-trigger`, `focus`)
			.attr(`data-bs-title`, obj.title)
			.attr(`data-bs-content`, obj.content)
			.append(overlay)

		let popover = new bootstrap.Popover(popoverElem[0]);
		popover.show();

		TUTORIAL.index = index;
		TUTORIAL.previous = key;
		TUTORIAL.previousPopover = popover;
	},
	next() {
		const keyLen = Object.keys(TUTORIAL.components).length;

		if (TUTORIAL.index >= keyLen) {
			TUTORIAL.end();
			return;
		}
		else if (TUTORIAL.index < keyLen) {
			let previous = $(TUTORIAL.previous);
			previous.removeClass(`position-relative target`)
				.removeAttr(`role`)
				.removeAttr(`data-bs-toggle`)
				.removeAttr(`data-bs-trigger`)
				.removeAttr(`data-bs-title`)
				.removeAttr(`data-bs-content`)
				.find(`#tutorial-overlay`)
				.remove();

			TUTORIAL.previousPopover.hide();
			TUTORIAL.previousPopover.dispose();
		}

		TUTORIAL.iterate(TUTORIAL.index);
	},
	end() {
		TUTORIAL.index = null;
		TUTORIAL.previous = 0;
	}
}

$(document).ready(() => {
	UniqueArray();

	$(`#form input, #form textarea, #form select`).on(`keydown`, (e) => {
		let key = e.which || e.keycode;
		
		if (key == 13)
			DTR.validate();
	});

	$(`#listUploadBtn`).on('click', (e) => {
		$(`#jobOrderList`).click();
	});

	$(`#jobOrderList`).on('change', DTR.displayContent);

	$(document).on(`click`, `[data-dtr-toggle][data-dtr-displayed=true]`, (e) => {
		let obj = $(e.currentTarget);

		DTR.reset();
		$(`#jobOrderList`).change();
	});

	// Drag clicking checkboxes
	const DRAGCHECK = {
		enabled: false,
		state: false,
		group: null,
		enable(obj) {
			try {
				DRAGCHECK.enabled = true;
				DRAGCHECK.state = !obj.is(`:checked`);
				DRAGCHECK.group = `[name=\"${obj.attr(`name`)}\"]`;
			} catch (e) {
				console.error(e);
				return false;
			}
			return true;
		},
		disable(callback) {
			try {
				DRAGCHECK.enabled = false;
				DRAGCHECK.state = false;
				DRAGCHECK.group = null;

				if (typeof callback != 'undefined')
					callback();
			} catch (e) {
				console.error(e);
				return false;
			}
			return true;
		}
	};

	$(document).on(`mousedown`, `[data-dragcheck]`, (e) => {
		let obj = $(e.currentTarget);
		let target = obj.find(obj.attr(`data-dragcheck`));

		DRAGCHECK.enable(target ?? obj);
	}).on(`mouseover mouseleave`, `[data-dragcheck]`, (e) => {
		if (DRAGCHECK.enabled) {
			let obj = $(e.currentTarget);
			let state = DRAGCHECK.state ? `:not(:checked)` : `:checked`;
			
			let target = obj.attr(`data-dragcheck`);
			target = target ? obj.find(target) : obj;

			if (target.is(state) && target.is(DRAGCHECK.group)) {
				target.trigger(`click`);
				DTR.reset();
			}
		}
	});

	$(document).on(`mouseup`, (e) => {
		DRAGCHECK.disable();
	});

	$(`#reset`).on(`click`, (e) => {
		confirmLeave(window.location, undefined, `This will reset all fields.`);
	});

	// Adding a little animation on hover (for the footer buttons) //
	// GENERATE BTN
	$(`#generate:not([disabled])`).on(`mouseenter focus`, (e) => {
		$($(e.currentTarget).find(`*:first`))
			.addClass(`fa-spin`)
			.css(`--fa-animation-duration`, `1.125s`)
			.css(`--fa-animation-iteration-count`, 1)
			.css(`--fa-animation-timing`, `ease-out`);
	}).on(`mouseleave blur`, (e) => {
		$($(e.currentTarget).find(`*:first`))
			.removeClass(`fa-spin`)
			.css(`--fa-animation-duration`, ``)
			.css(`--fa-animation-iteration-count`, ``)
			.css(`--fa-animation-timing`, ``);
	});

	// PRINT BTN
	$(`#print:not([disabled])`).on(`mouseenter focus`, (e) => {
		let obj = $($(e.currentTarget).find(`*:first`));
		
		obj.addClass(`fa-bounce`)
			.css(`--fa-animation-duration`, `1.5s`)
			.css(`--fa-animation-iteration-count`, 1)
			.css(`--fa-bounce-jump-scale-x`, `1.5`)
			.css(`--fa-bounce-jump-scale-y`, `1.5`)
			.css(`--fa-bounce-land-scale-x`, `1`)
			.css(`--fa-bounce-land-scale-y`, `1`);
	}).on(`mouseleave blur`, (e) => {
		$($(e.currentTarget).find(`*:first`))
			.removeClass(`fa-bounce`)
			.css(`--fa-animation-duration`, ``)
			.css(`--fa-animation-iteration-count`, ``)
			.css(`--fa-animation-iteration-count`, ``)
			.css(`--fa-bounce-jump-scale-x`, ``)
			.css(`--fa-bounce-jump-scale-y`, ``)
			.css(`--fa-bounce-land-scale-x`, ``)
			.css(`--fa-bounce-land-scale-y`, ``);
	});
	
	// RESET BTN
	$(`#reset:not([disabled])`).on(`mouseenter focus`, (e) => {
		$($(e.currentTarget).find(`*:first`))
			.addClass(`fa-spin fa-spin-reverse`)
			.css(`--fa-animation-duration`, `.5s`)
			.css(`--fa-animation-iteration-count`, 1)
			.css(`--fa-animation-timing`, `ease-in-out`);
	}).on(`mouseleave blur`, (e) => {
		$($(e.currentTarget).find(`*:first`))
			.removeClass(`fa-spin fa-spin-reverse`)
			.css(`--fa-animation-duration`, ``)
			.css(`--fa-animation-iteration-count`, ``)
			.css(`--fa-animation-timing`, ``);
	});

	// BUTTON DISABLES
	$(`#generate`)
		.on(`click`, DTR.validate)
		.prop(`disabled`, true);

	$(`#print`)
		.on(`click`, DTR.print)
		.prop(`disabled`, true);

	// TUTORIAL
	$(`#tutorial`).on(`click`, TUTORIAL.init);
	$(document).on(`click`, `#tutorial-overlay, #tutorial-backdrop`, TUTORIAL.next);
});