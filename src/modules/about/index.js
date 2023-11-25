$(() => {
	$(`[data-open-external]`).on(`click`, (e) => {
		e.preventDefault();

		let event = new CustomEvent(`open-external`, {
			detail: {url: e.target.href}
		});

		window.dispatchEvent(event);
	});
});
