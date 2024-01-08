// Utility
import UniqueArray from "../../js/util/unique-array/unique-array.mod.js";
import SwalFlash from "../../js/util/swal-flash/swal-flash.mod.js";
import Dragcheck from "../../js/util/dragcheck/dragcheck.mod.js";
import Tutorial from "../../js/util/tutorial.js/Tutorial.js";
import jsPDF from "jspdf";

// HTML2PDF Libs
import html2canvas from "html2canvas";
import dompurify from "dompurify";

// Validator
import Validator from "../../js/util/validator/Validator.js";

// DTR Related
import {DTR_SAMPLE} from "./Sample Generated DTR.js";

const prefix = `data-dtr`;
const dataAttr = [
	'name',
	'period',
	'days',
	'saturday',
	'primary-verifier',
	'primary-verifier-position',
	'secondary-verifier',
	'secondary-verifier-position',
];

const DTR = {
	// DTR Options
	options: {
		leadingTimeZero: true,
		duplicateDTR: false,
	},
	list: [],
	session: null,
	displayContent(e) {
		DTR.reset();

		let reader = new FileReader();
		let content;

		reader.onload = () => {
			content = reader.result;
			let toAppend = `<ul>`;

			$.each(content.split("\n"), (k, v) => {
				if (!v.match(/^\s*$/g)) {
					DTR.list.push(v);
					toAppend += `<li>${v.replaceAll(`\t`, `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)}</li>`;
				}
			});

			toAppend += `</ul>`;

			$(`#listPreview`).html(toAppend);
			DTR.preview();
		};

		if (e.target.files.length > 0) {
			reader.readAsText(e.target.files[0]);
		}
		else {
			DTR.list = [];
			$(`#listPreview`).html(``);
		}
	},
	preview() {
		let dates = "";
		let leadingZero = this.options.leadingTimeZero ? "0" : "";

		for (let i = 1; i <= 31; i++) {
			let date = $(`#date-${i}`);

			dates += `
			<div class="dtr-row" data-date="${date.attr("id")}">
				<div class="dtr-cell text-end px-1">${i}</div>
			`;
			if (date.attr('name').match(/holiday\[\]/)) {
				let holidayName = $(`[name="holidayName[]"][data-date="${i}"]`).val();
				holidayName = holidayName.length > 0 ? holidayName : "HOLIDAY";

				dates += `
					<div class="dtr-cell dtr-cell-5 border border-secondary small holiday">${holidayName.toUpperCase()}</div>
				`;
			}
			else {
				dates += `
					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? `${leadingZero}8:00` : ""}" readonly>
					</div>

					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? "12:00" : ""}" readonly>
					</div>

					<div class="dtr-cell border border-secondary small fst-italic fw-bold text-danger" data-update>${date.prop(`checked`) ? "BRK" : ""}</div>

					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? `${leadingZero}1:00` : ""}" readonly>
					</div>

					<div class="dtr-cell border border-secondary small" data-update>
						<input type="text" class="border-0 bg-transparent w-100 text-center" value="${date.prop(`checked`) ? `${leadingZero}5:00` : ""}" readonly>
					</div>

					`;
			}
			dates += `
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
			rules: () => {
				return {
					"period": ["required", "string"],
					"days": ["nullable", "numeric", "between:1,20"],
					"saturday": ["nullable", "numeric", "between:0,5"],
					"primary-verifier": ["required", "string"],
					"primary-verifier-position": ["required", "string"],
					"secondary-verifier-exists": ["nullable", "boolean"],
					"secondary-verifier": ["required_if:secondary-verifier-exists,true", "string"],
					"secondary-verifier-position": ["required_if:secondary-verifier-exists,true", "string"]
				}
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
				"primary-verifier": {
					"required": `Verifier is the person-in-charge or an officer-in-charge`,
					"string": `Verifier must be a name of a person`
				},
				"primary-verifier-position": {
					"required": `The position of the verifier is required`,
					"string": `Please provide a valid position`
				},
				"secondary-verifier-exists": {
					"boolean": "Please refrain from modifying the page"
				},
				"secondary-verifier": {
					"required_if": "Second verifier is required",
					"string": `Verifier must be a name of a person`
				},
				"secondary-verifier-position": {
					"required_if": `The position of the second verifier is required`,
					"string": `Please provide a valid position`
				}
			}
		};

		// Capture all inputs
		let fields = $(`[name]`).not(`:disabled, [disabled]`);
		let valids = $(`input:valid`).not(`:disabled, [disabled]`);
		let invalids = $(`input:invalid`).not(`:disabled, [disabled]`);

		// Set validation input
		validation.values = form.serializeFormJSON();

		// Actual Validation
		let validator = new Validator(
			validation.values,
			validation.rules(),
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
		$(`[data-validation]`).each((k, v) => {
			let obj = $(v);

			// Valid Fields
			if (validFields.includes(obj.attr('data-validation'))) {
				let name = validFields[
					validFields.indexOf(
						obj.attr('data-validation')
					)
				];

				$(`[name=${name}]`).text(``)
					.removeClass(`text-danger`);
			}
			// Invalid Fields
			else if (invalidFields.includes(obj.attr('data-validation'))) {
				let name = invalidFields[
					invalidFields.indexOf(
						obj.attr('data-validation')
					)
				];

				let input = $(`[name=${name}]`).not(`:disabled, [disabled]`);
				let disabledInput = $(`[name=${name}]:disabled, [name=${name}][disabled]`);

				input?.removeClass(`is-valid`)
					.addClass(`is-invalid`);

				if (input.length > 0)
					obj.text(validator.first(name))
						.addClass(`text-danger`);

				if (disabledInput.length) {
					disabledInput?.removeClass(`is-valid is-invalid`);
					obj.text(``)
						.removeClass(`text-danger`);
				}
			}
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
	generate(tutorial = false, end = false) {
		let target = $(`#generatedDTR`);
		let toAppend = ``;

		if (tutorial) {
			DTR.generateTutorial(target, end);
			return;
		}

		$(`#listPreview li`).each((k, v) => {
			let name = $(v).text().trim();

			let DTR = $(`#dtrSample`).parent().clone()
				.find(`#dtrSample`)
				.removeAttr(`id`)
				.removeProp(`id`)
				.parent();

			dataAttr.forEach((attr) => {
				let verifier = attr == `primary-verifier` || attr == `primary-verifier-position`
					|| attr == `secondary-verifier` || attr == `secondary-verifier-position`;

				// If the attribute exists, continue the process. Otherwise, just skip to proceed.
				if (DTR.find(`[${prefix}-${attr}]`).length > 0) {
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
		});

		target.html(toAppend)
			.addClass(`py-3`);

		if ($(`#print`).prop(`disabled`))
			$(`#print`).prop(`disabled`, false);

		// RESIZE ALL THE FIELDS INSIDE `#printContainer` THAT HAS THE CLASS `.dtr-cell` inside `.has-secondary`
		$(`.has-secondary .dtr-cell`).each((k, v) => {
			textFit(v);
		});

		let sizes = {
			verifier: {
				primary: $(`#generatedDTR .has-secondary .dtr-cell[data-dtr-primary-verifier] > span`).css('font-size'),
				secondary: $(`#generatedDTR .has-secondary .dtr-cell[data-dtr-secondary-verifier] > span`).css('font-size')
			},
			position: {
				primary: $(`#generatedDTR .has-secondary .dtr-cell[data-dtr-primary-verifier-position] > span`).css('font-size'),
				secondary: $(`#generatedDTR .has-secondary .dtr-cell[data-dtr-secondary-verifier-position] > span`).css('font-size')
			}
		}
		let max = {
			name: sizes.verifier.primary < sizes.verifier.secondary ? sizes.verifier.primary : sizes.verifier.secondary,
			pos: sizes.position.primary < sizes.position.secondary ? sizes.position.primary : sizes.position.secondary
		};

		$(`#generatedDTR .has-secondary .dtr-cell[data-dtr-primary-verifier] > span, #generatedDTR .has-secondary .dtr-cell[data-dtr-secondary-verifier] > span`).css('font-size', max.name);
		$(`#generatedDTR .has-secondary .dtr-cell[data-dtr-primary-verifier-position] > span, #generatedDTR .has-secondary .dtr-cell[data-dtr-secondary-verifier-position] > span`).css('font-size', max.pos);
	},
	print() {
		// DATA PARSING
		const printTarget = $(`#printContainer`);
		let toAppend = `<div class="row">`;

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

			if (DTR.options.duplicateDTR) {
				for (let i = 0; i < 2; i ++) {
					toAppend += `<div class="col-6">${data[0].outerHTML}</div>`;
				}
				toAppend += `</div><div class="row">`;
			}
			else {
				// Inserts a row every 2 elements
				if (k%2 == 0) toAppend += `</div><div class="row">`;
				toAppend += `<div class="col-6">${data[0].outerHTML}</div>`;
			}
		});

		printTarget.html(toAppend + `</div>`);


		// ACTUAL PRINTING
		const elms = $(`body > *:not(script, style, link)`);
		elms.addClass(`print-enabled`);

		// RESIZE ALL THE FIELDS INSIDE `#printContainer` THAT HAS THE CLASS `.dtr-cell` inside `.has-secondary`
		$(`#printContainer .has-secondary .dtr-cell`).each((k, v) => {
			textFit(v)
		});

		// Prepares the PDF to be saved
		let doc = new jsPDF({
			orientation: `portrait`,
			unit: `px`,
			userUnit: 16,
			format: `a4`,
			hotfixes: [
				`px_scaling`
			],
		});
		// Saves the PDF
		doc.html(document.querySelector(`#printContainer`), {
			callback: async (d) => {
				d.saveGraphicsState();
				await d.save(`(${document.querySelector(`[name=period]`).value}) DTR.pdf`, { returnPromise: true });
				elms.removeClass(`print-enabled`);
			}
		});
	},
	generateTutorial(target, end = false) {
		if (end) {
			target.html(DTR.session);
			return;
		}
		else {
			target.html(DTR_SAMPLE);
		}
	},
	saveSession() {
		DTR.session = $(`#generatedDTR`).html();
	},
	restoreSession() {
		if (DTR.session != null) {
			$(`#generatedDTR`).html(DTR.session);

			DTR.session = null;
		}
	},
	resetSession() {
		$(`#generatedDTR`).html(``);
		DTR.session = null;
	}
};

const TUTORIAL = {
	options: {
		arrowBtns: true,
		arrow: {
			left: `◀`,
			right: `▶`,
		},
		includePrev: true
	},
	components: {
		"#jobOrderArea": {
			title: `Insert List of Job Orders`,
			content: `Refer to the note above on what to upload; Upload a <code>.txt</code> file containing the full names of each employee. Each names must be placed in a single line. If there's an empty line at the end or anywhere in the file, it will generate an empty entry so double check your file to prevent this kind of instance.`
		},
		"#periodArea": {
			title: `Insert the Date Period`,
			content: `Identifies the period for this DTR <br>(i.e.: <code>August 1-15, 2023</code>).`
		},
		"#daysArea": {
			title: `<b>[OPTIONAL]</b> Provide how many Days`,
			content: `The <code>days</code> field determines how many days the employee attended work within the given period.`
		},
		"#saturdayArea": {
			title: `<b>[OPTIONAL]</b> Provide the Saturdays`,
			content: `Similar to <code>days</code>, the <code>saturdays</code> identifies how many Saturday the employee worked within the given period.`
		},
		"#verifierArea": {
			title: `Provide Verifier`,
			content: `This is usually the head of the department, but on some occasions that they are not available, an OIC or PIC will be provided.`
		},
		"#verifierPosArea": {
			title: `Provide the Work Title of the Verifier`,
			content: `The work title or position of the verifier will be provided here.`
		},
		"#secondVerifierArea": {
			title: `Is there a Second Verifier?`,
			content: `If a second verifier is needed, click the label to enable the text field. Once enabled, similar to the first one, provide the second verifier.`
		},
		"#datesArea": {
			title: `Select the Dates`,
			content: `Select all the dates that falls within the provided <code>period</code>. These dates will reflect upon the DTR template and show that these are the days that the employees worked.<br><br>Do note that <code>left click</code>s assigns them as regular dates and <code>right click</code>s assigns them as a holiday.`
		},
		"#optionalConfigsArea": {
			title: `Optional Configurations`,
			content: `These are optional configurations that can be applied to the DTR. An example would be the "Duplicate DTR" option which duplicates the DTR, allowing for two identical DTRs in a single page instead of the usual two different DTRs in a single page.`
		},
		"#holidayNames": {
			title: `Holiday Names`,
			content: `If a date is marked as a holiday, a text field will pop here. This text field will allow you to provide an optional name of the said holiday.`
		},
		"#dtrSample": {
			title: `Preview the General Template`,
			content: `Every time the selected <code>dates</code> changes, this DTR template will update and reflect what a generated one will look like.`,
			callbackInit: () => {
				setTimeout(
					() => {
						let target = $(`#dtrSample`)
						target.css(`scroll-margin-top`, `1rem`);

						target[0].scrollIntoView({
							behavior: `auto`,
							block: `start`,
							inline: `center`
						});

						setTimeout(
							() => {
								window.scrollTo(window.scrollX, target[0].offsetTop - 175);
							},
							500
						);
					},
					500
				);
			},
		},
		"#dtrGenFooter": {
			title: `Generator Controls`,
			content: `The control buttons are provided here<br>
				<ul>
					<li><b>Generate</b> - Generates the actual DTR preview with all the provided details included. This will give you an actual look into what a printed DTR will look like. It only activates once the list of JO are provided.</li>
					<li><b>Print</b> - Activates after successfully generating a preview. This will allow you to print your DTR. Please print the DTR in a portrait orientation.</li>
					<li><b>Reset</b> - Resets the entire form, removing all inputs and generated DTR preview.</li>
				</ul>
			`
		},
		"#generatedDTR": {
			title: `Print Preview`,
			content: `Once the <code>Generate</code> button is pressed and successful on it, the preview for the said DTR will be shown here.<br> The preview allows individual DTR editing to allow changes to the time and days they are present, allowing flexibility to time changes and absences.`,
			callbackInit: () => {
				DTR.saveSession();
				DTR.generate(true);
				setTimeout(
					() => {
						let target = $(`#generatedDTR`);
						target.css(`scroll-margin-top`, `1rem`);

						target[0].scrollIntoView({
							behavior: `auto`,
							block: `start`,
							inline: `center`
						});

						setTimeout(
							() => {
								window.scrollTo(window.scrollX, target[0].offsetTop - 175);
							},
							500
						);
					},
					500
				);
			},
			callbackEnd: () => {
				DTR.generate(true, true);
				DTR.restoreSession();
			}
		}
	}
}

$(() => {
	UniqueArray();

	// Handles the `Enter` key when focused inside the form
	$(`#form input, #form textarea, #form select`).on(`keydown`, (e) => {
		if ($(`#form #jobOrderList`)[0].files.length == 0) {
			e.preventDefault();
			return false;
		}

		let key = e.which || e.keycode;

		if (key == 13)
			DTR.validate();
	});

	// Proxy for the file upload input
	$(`#listUploadBtn`).on('click', (e) => {
		$(`#jobOrderList`).click();
	});

	// Displays the content when the the JO List is uploaded
	$(`#jobOrderList`).on('change', DTR.displayContent);

	// Handles the click event for the dates
	$(document).on(`click`, `[data-dtr-toggle][data-dtr-displayed=true]`, (e) => {
		let keyCode = e.which || e.keyCode;

		DTR.reset();
		$(`#jobOrderList`).trigger('change');
	});

	// Enables and disables the Second Verifier area
	$(`#secondVerifierCheckbox`).on('click', (e) => {
		let obj = $(e.currentTarget);
		let enabled = !obj.prop('checked');

		// Inputs
		$(`#secondVerifierInput`).prop('disabled', enabled)
			.prop('required', enabled);
		$(`#secondVerifierPosInput`).prop('disabled', enabled)
			.prop('required', enabled);

		if (enabled) {
			// Labels
			$(`#secondVerifierIPLabel`).removeClass('required');
			$(`#secondVerifierPosLabel`).removeClass('required');
		}
		else {
			// Labels
			$(`#secondVerifierIPLabel`).addClass('required');
			$(`#secondVerifierPosLabel`).addClass('required');
		}

		let content = {
			"underline": {
				true: `
					<div class="dtr-cell dtr-cell-3 underline"></div>
					<div class="dtr-cell dtr-cell-1"></div>
					<div class="dtr-cell dtr-cell-3 underline"></div>`,
				false: `
					<div class="dtr-cell"></div>
					<div class="dtr-cell dtr-cell-5 underline"></div>
					<div class="dtr-cell"></div>
				`
			},
			"verifier": {
				true: `
					<div class="dtr-cell dtr-cell-3 small fw-bold" data-dtr-primary-verifier>[VERIFIER NAME]</div>
					<div class="dtr-cell dtr-cell-1"></div>
					<div class="dtr-cell dtr-cell-3 small fw-bold" data-dtr-secondary-verifier>[SECOND VERIFIER NAME]</div>
				`,
				false: `
					<div class="dtr-cell"></div>
					<div class="dtr-cell dtr-cell-5 small fw-bold" data-dtr-primary-verifier>[VERIFIER NAME]</div>
					<div class="dtr-cell"></div>
				`
			},
			"verifier-position": {
				true: `
					<div class="dtr-cell dtr-cell-3 small fst-italic" data-dtr-primary-verifier-position>[VERIFIER POSITION]</div>
					<div class="dtr-cell dtr-cell-1"></div>
					<div class="dtr-cell dtr-cell-3 small fst-italic" data-dtr-secondary-verifier-position>[SECOND VERIFIER POSITION]</div>
				`,
				false: `
					<div class="dtr-cell"></div>
					<div class="dtr-cell dtr-cell-5 small fst-italic" data-dtr-primary-verifier-position>[VERIFIER POSITION]</div>
					<div class="dtr-cell"></div>
				`
			},
		};

		// Form
		$(`#dtrSample .dtr-row[data-dtr-second-verifier-affected]`).each((k, v) => {
			let el = $(v);
			let affected = el.attr('data-dtr-second-verifier-affected');

			el.html(content[affected][!enabled]);

			if (enabled)
				el.removeClass(`has-secondary`);
			else
				el.addClass(`has-secondary`);
		});
	});

	// Handles the checkbox for leading zeroes
	$(`#removeLeadingZeroes`).on('click', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#leadingZero`);
		let fd = [...new FormData(obj.closest(`form`)[0])];
		let rv = fd.findLast((k) => {
			if (k[0].match(/removeLeadingZeroes/gi))
				return k;
		});

		let validator = new Validator({
			removeLeadingZeroes: rv[1]
		}, {
			removeLeadingZeroes: [`required`, `boolean`]
		}, {
			removeLeadingZeroes: {
				required: `Please refrain from modifying the page`,
				boolean: `Please refrain from modifying the page`
			}
		});

		let val = validator.validate();

		if (validator.fails()) {
			SwalFlash.error(validator.first());
			return 0;
		}

		val = val.removeLeadingZeroes === 'true';
		if (val)
			target.hide();
		else
			target.show();

		DTR.options.leadingTimeZero = !val;

		DTR.reset();
		$(`#jobOrderList`).trigger('change');
	});

	// Handles the checkbox for duplicated DTRs
	$(`#dupeDTR`).on('click', (e) => {
		let obj = $(e.currentTarget);
		let target = $(`#dtrAmt`);
		let fd = [...new FormData(obj.closest(`form`)[0])];
		let rv = fd.findLast((k) => {
			if (k[0].match(/dupeDTR/gi))
				return k;
		});

		let validator = new Validator({
			dupeDTR: rv[1]
		}, {
			dupeDTR: [`required`, `boolean`]
		}, {
			dupeDTR: {
				required: `Please refrain from modifying the page`,
				boolean: `Please refrain from modifying the page`
			}
		});

		let val = validator.validate();

		if (validator.fails()) {
			SwalFlash.error(validator.first());
			return 0;
		}

		if (validator.fails()) {
			SwalFlash.error(validator.first());
			return 0;
		}

		val = val.dupeDTR === 'true';
		if (val)
			target.text(`Two (2)`);
		else
			target.text(`One (1)`);

		DTR.options.duplicateDTR = val;
	});

	// Drag clicking checkboxes
	const LEFT_DRAGCHECK = new Dragcheck({
		group: `[data-dragcheck]`,
		states: (obj) => {
			let dragcheck = obj.closest(`[data-dragcheck]`);
			let target = dragcheck.querySelector(dragcheck.dataset.dragcheck);

			return !target.checked;
		},
		keyCode: Dragcheck.KEYCODES.LEFT,
		callbacks: {
			hover: (target) => {
				if (LEFT_DRAGCHECK.enabled) {
					let state = LEFT_DRAGCHECK.currentState ? `:not(:checked)` : `:checked`;

					let dragcheck = target.dataset.dragcheck;
					target = target.querySelectorAll(dragcheck);

					target.forEach((v) => {
						if (v.matches(state)) {
							v.closest(`[data-dragcheck]`)
								?.querySelector(`label`)
								.classList.remove(`btn-outline-warning`);

							v.dispatchEvent(new MouseEvent("click", {
								view: window,
								bubbles: true,
								cancelable: true
							}));
						}
					});
				}
			}
		}
	});

	const RIGHT_DRAGCHECK = new Dragcheck({
		group: `[data-dragcheck]`,
		states: (obj) => {
			let dragcheck = obj.closest(`[data-dragcheck]`);
			let target = dragcheck.querySelector(dragcheck.dataset.dragcheck);

			return !target.checked;
		},
		keyCode: Dragcheck.KEYCODES.RIGHT,
		callbacks: {
			hover: (target) => {
				if (RIGHT_DRAGCHECK.enabled) {
					let state = RIGHT_DRAGCHECK.currentState ? `:not(:checked)` : `:checked`;

					let dragcheck = target.dataset.dragcheck;
					target = target.querySelectorAll(dragcheck);

					target.forEach((v) => {
						if (v.matches(state)) {

							if (state == `:not(:checked)`) {
								v.name = `holiday[]`;
								v.classList.add(`holiday`);

								v.closest(`[data-dragcheck]`)
								?.querySelector(`label`)
								.classList.add(`btn-outline-warning`);
							}
							else {
								v.name = `dates[]`;
								v.classList.remove(`holiday`);
								v.closest(`[data-dragcheck]`)
									?.querySelector(`label`)
									.classList.remove(`btn-outline-warning`);
							}

							v.dispatchEvent(new MouseEvent("click", {
								view: window,
								bubbles: true,
								cancelable: true
							}));
						}
					});
				}
			}
		}
	});

	// DATE CLICK HANDLER
	$(`[data-dragcheck]`).on(`contextmenu`, (e) => {
		if (RIGHT_DRAGCHECK.enabled) return 0;

		e.preventDefault();
		let target = $(e.currentTarget).find(`input`);
		let label = $(e.currentTarget).find(`label`);

		if (target.prop(`checked`)) {
			target.prop(`name`, `dates[]`)
				.attr(`name`, `dates[]`)
				.removeClass(`holiday`);

			label.removeClass(`btn-outline-warning`);
		}
		else {
			target.prop(`name`, `holiday[]`)
				.attr(`name`, `holiday[]`)
				.addClass(`holiday`);

			label.addClass(`btn-outline-warning`);
		}

		target.trigger(`click`);
	}).on(`click`, (e) => {
		let target = $(e.currentTarget).find(`input`);
		let label = $(e.currentTarget).find(`label`);

		if (!target.prop(`checked`) && target.hasClass(`holiday`)) {
			target.prop(`name`, `dates[]`)
				.attr(`name`, `dates[]`)
				.removeClass(`holiday`);

			label.removeClass(`btn-outline-warning`);
		}
	});

	// HOLIDAY HANDLER
	$(document).on('change', `[data-dragcheck] > input[type=checkbox]`, (e) => {
		const temp = `
			<div class="col-6 col-lg-4" data-holiday=":date">
				<div class="form-group">
					<div class="input-group">
						<span class="input-group-text">:date</span>
						<input type="hidden" name="holidayNameDate[]" value=":date">
						<input type="text" class="form-control" name="holidayName[]" data-date=":date" placeholder="Holiday" aria-label="Holiday Name for :date">
					</div>
				</div>
			</div>
		`;

		let hnContainer = $(`#holidayNames`);
		let hn = hnContainer.find(`input[name="holidayName[]"]`);
		let h = $(`[data-dragcheck] > input[name="holiday[]"]`);

		let hCount = h.length;
		let hnCount = hn.length;

		// If the holiday count is greater than the holiday name count, add a new holiday name
		if (hCount > hnCount) {
			h.each((k, v) => {
				let targetHn = $(`[data-holiday=${v.value}]`);

				if (targetHn.length <= 0) {
					targetHn = $(temp.replace(/:date/gi, v.value));
					hnContainer.append(targetHn);
				}
			});

			hnContainer.html(
				hnContainer.find(`[data-holiday]`).sort((a, b) => {
					return +$(a).data('holiday') - +$(b).data('holiday');
				})
			);
		}
		else if (hCount < hnCount) {
			hn.each((k, v) => {
				let targetH = $(`[name="holiday[]"][value="${v.dataset.date}"]`);

				if (targetH.length <= 0) {
					$(`[data-holiday=${v.dataset.date}]`).remove();
				}
			});
		}
	});

	$(document).on('change', `[name="holidayName[]"]`, (e) => {
		DTR.reset();
		$(`#jobOrderList`).trigger('change');
	});

	// RESET HANDLER
	$(`#reset`).on(`click`, (e) => {
		if (typeof confirmLeave == "function") {
			try {
				confirmLeave(window.location, undefined, `This will reset all fields.`);
			}
			catch (e) {
				console.warn(e);
			}
		}
		else {
			console.warn(`confirmLeave function not defined.`);
		}
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
	$(`#tutorial`).on(`click`, () => {
		if (!Tutorial.instantiated)
			Tutorial.start(TUTORIAL.components, TUTORIAL.options);
	});
});
