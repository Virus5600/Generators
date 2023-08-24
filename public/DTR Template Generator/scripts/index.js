$(document).ready(() => {
	$(`[data-bs-tooltip]`).each((k, v) => {
		let tooltip = new bootstrap.Tooltip(v, {
			title: v.title,
			trigger: `hover`
		});
	});

	$(`#builder`).sortable({
		cursor: `grabbing`,
		handle: `.handle`,
		revert: true,
		scroll: true,
		start: (e, ui) => { ui.item.addClass(`highlight`); },
		stop: (e, ui) => { ui.item.removeClass(`highlight`); }
	});

	$(`#builder`).on(`change`, (e) => {
		$(e.currentTarget).sortable(`refresh`);
	});
});