const dataAttr = [
	'name',
	'period',
	'days',
	'saturday',
];

$(document).ready(() => {
	$(`#listUploadBtn`).on('click', (e) => {
		$(`#jobOrderList`).click();
	});

	$(`#jobOrderList`).on('change', displayContent);
});

const displayContent = (e) => {
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
		dates += `
			<div class="dtr-row">
				<div class="dtr-cell text-right">${i}</div>
				<div class="dtr-cell border border-dark small">${i}</div>
				<div class="dtr-cell border border-dark small">${i}</div>
				<div class="dtr-cell border border-dark small font-italic font-weight-bold text-danger">BRK</div>
				<div class="dtr-cell border border-dark small">${i}</div>
				<div class="dtr-cell border border-dark small">${i}</div>
				<div class="dtr-cell"></div>
			</div>
		`;
	}

	$(`#dtrSample`).append(dates);

	list.forEach((v) => {

	});
};