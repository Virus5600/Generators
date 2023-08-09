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

	$(`#jobOrderList`).on('change', displayContent);

	$(document).on(`click`, `[data-dtr-toggle][data-dtr-displayed=true]`, (e) => {
		let obj = $(e.currentTarget);

		resetDTR();
		$(`#jobOrderList`).change();
	});

	$(`#reset`).on(`click`, (e) => {
		window.location = window.location;
	});

	$(`#generate`).on(`click`, generateDTR)
		.prop(`disabled`, true);
});

const displayContent = (e) => {
	resetDTR();

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
		previewDTR(list);
	};

	if (e.target.files.length > 0)
		reader.readAsText(e.target.files[0]);
};

const previewDTR = (list) => {
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
};

const resetDTR = () => {
	for (let i = 1; i <= 31; i++) {
		$(`div.dtr-row[data-date]`).remove();
	}
};

const generateDTR = (e) => {
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
};