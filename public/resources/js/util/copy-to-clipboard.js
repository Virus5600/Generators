if (!window.Swal)
	window.Swal = require("node_modules/sweetalert2/dist/sweetalert2.all.min.js");

$(document).ready(() => {
	$(document).on('click', `[data-copy-target], [data-copy-text], [data-copy]`, (e) => {
		let element = e.currentTarget;

		let temp = $("<input>");
		$("body").append(temp);

		let textToCopy;
		if (typeof $(element).attr('data-copy-target') != 'undefined') {
			if ($($(element).attr('data-copy-target')).val().length > 0)
				textToCopy = $($(element).attr('data-copy-target')).val();
			else if ($($(element).attr('data-copy-target')).text().length > 0)
				textToCopy = $($(element).attr('data-copy-target')).text();
		}
		else if (typeof $(element).attr('data-copy-text') != 'undefined')
			textToCopy = $(element).attr('data-copy-text');
		else
			textToCopy = $(element).val();

		temp.val(textToCopy).select();
		document.execCommand("copy");
		temp.remove();
		
		Swal.fire({
			title: `Text copied`,
			position: `top-right`,
			showConfirmButton: false,
			toast: true,
			timer: 3750,
			background: `#28a745`,
			customClass: {
				title: `text-white`,
				popup: `px-0 animated fadeInLeft`
			},
			width: 150,
			showClass: { popup: 'animate__animated animate__flipInX animate__bounce animate__faster' },
			hideClass: { popup: 'animate__animated animate__fadeOutRight animate__faster' }
		});
	});
});