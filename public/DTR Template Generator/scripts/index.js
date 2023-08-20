$(document).ready(() => {
	$(`[data-bs-tooltip]`).each((k, v) => {
		let tooltip = new bootstrap.Tooltip(v, {
			title: v.title,
			trigger: `hover`
		});
	});

	$(`#builder`).sortable({
		revert: true,
		scroll: true,
		cursor: `move`
	});

	$(`#builder`).on(`change`, (e) => {
		$(e.currentTarget).sortable(`refresh`);
	});
});