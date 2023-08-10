const prefix = `data-dtr`;
const dataAttr = [
	'name',
	'period',
	'days',
	'saturday',
	'verifier',
	'verifier-positions'
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

	$(`#reset`).on(`click`, (e) => {
		window.location = window.location;
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
	displayContent(e) {
		DTR.reset();

		let reader = new FileReader();
		let content;

		reader.onload = () => {
			content = reader.result;

			let list = [];
			let toAppend = `<ul>`;

			$.each(content.split("\n"), (k, v) => {
				list.push(v);
				toAppend += `<li>${v.replaceAll(`\t`, `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)}</li>`;
			});

			toAppend += `</ul>`;

			$(`#listPreview`).html(toAppend);
			DTR.preview(list);
		};

		if (e.target.files.length > 0)
			reader.readAsText(e.target.files[0]);
	},
	preview(list) {
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

				if (attr == 'name')
					obj.text(name);
				else
					obj.text(`${attr}`);

			});
			
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

	}
};