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

	$(`#jobOrderList`).on('change', DTR.displayContent);
	$(`#reset`).on('click', PAGE.reset);

	PAGE.initCalendarView();
});

const DTR = {
	displayContent(e) {
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
			DTR.previewDTR(list);
		};

		if (e.target.files.length > 0)
			reader.readAsText(e.target.files[0]);
	},
	previewDTR(list) {
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
	}
};

const PAGE = {
	reset(e) {
		const reset = $(e.currentTarget);
		const formInputs = $(`#informationForm textarea, input:not([name="days[]"])`);
	},
	initCalendarView() {
		const target = $(`#dateRangeContainer`);
		let toAppend = ``;

		for (i = 0; i < 31; i++) {
			const isSeventh = i%7 == 0;

			// Every seventh iteration, add a row
			if (isSeventh) {
				if (i == 1)
					toAppend += `<tr>`;
				else if (i == 24)
					toAppend += `</tr>`;
				else
					toAppend += `
						</tr>

						<tr>
					`;
			}

			toAppend += `
				<td>
					<div class="btn-group-toggle" data-toggle="buttons">
						<label class="btn btn-outline-secondary w-100" id="day${i+1}">
							<input type="checkbox" name="days[]">
							${i+1}
						</label>
					</div>
				</td>
			`;
		}

		target.html(toAppend);

		target.find(`label`).on(`click`, (e) => {
			let obj = $(e.currentTarget);

			obj.addClass(`active`)
				.find(`input`)
				.prop(`checked`);
		});
	}
};