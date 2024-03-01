import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable.js';

$(() => {
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

	if (window.isPackaged) {
		Swal.fire({
			title: `This Generator is still in Alpha Phase`,
			text: `DTR Template Generator (DTRG) is still under development and currently unusable. Please wait for further updates.`,
			icon: `info`,
			confirmButtonText: `Leave`,
			confirmButtonColor: `#dc3545`,
			allowOutsideClick: false,
			customClass: {
				htmlContainer: `text-white`
			}
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = `../index.html`;
			}
		});
	}
});
