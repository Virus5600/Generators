const prefix = `data-dtr`;
const dataAttr = [
	'name',
	'period',
	'days',
	'saturday',
	'verifier',
	'verifier-position'
];

$(document).ready(() => {
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
	$(`#generate`).on(`click`, DTR.generate)
		.prop(`disabled`, true);

	$(`#print`).on(`click`, DTR.print)
		.prop(`disabled`, true);
});

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
					<div class="dtr-cell border border-secondary small" data-update>${date.prop(`checked`) ? "08:00" : ""}</div>
					<div class="dtr-cell border border-secondary small" data-update>${date.prop(`checked`) ? "12:00" : ""}</div>
					<div class="dtr-cell border border-secondary small fst-italic fw-bold text-danger" data-update>${date.prop(`checked`) ? "BRK" : ""}</div>
					<div class="dtr-cell border border-secondary small" data-update>${date.prop(`checked`) ? "01:00" : ""}</div>
					<div class="dtr-cell border border-secondary small" data-update>${date.prop(`checked`) ? "05:00" : ""}</div>
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
	generate(e) {
		let target = $(`#generatedDTR`), printTarget = $(`#printContainer > .row`);
		let toAppend = ``, toAppendPrint = ``;

		$(`#listPreview li`).each((k, v) => {
			let name = $(v).text().trim();

			let DTR = $(`#dtrSample`).parent().clone()
				.find(`#dtrSample`)
				.removeAttr(`id`)
				.removeProp(`id`)
				.parent();

			dataAttr.forEach((attr) => {
				let obj = DTR.find(`[${prefix}-${attr}]`);

				if (attr == 'name') {
					obj.text(name);
				}
				else {
					let attrVal = $(`[name=${attr}]`).val();
					obj.text(attrVal ?? ``);
				}

			});

			DTR.find(`.border-secondary`)
				.removeClass(`border-secondary`)
				.addClass(`border-black`);

			DTR.find(`.dtr.m-2`)
				.removeClass(`m-2`);
			
			toAppend += DTR.html();
			toAppendPrint += `<div class="col-6">${DTR.html()}</div>`;
		});
		
		target.html(toAppend)
			.addClass(`py-3`);
		printTarget.html(toAppendPrint);

		if ($(`#print`).prop(`disabled`))
			$(`#print`).prop(`disabled`, false);
	},
	print() {
		const elms =  $(`body > *:not(script, style, link)`);
		elms.addClass(`print-enabled`);

		window.print();

		setTimeout(() => {
			elms.removeClass(`print-enabled`);
		}, 1000);
	}
};