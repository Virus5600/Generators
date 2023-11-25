$(() => {
	$(document).on('change keyup keydown', '.text-counter-input', (e) => {
		let obj = $(e.currentTarget);
		let parent = obj.parent();
		let counter = parent.find('.text-counter');
		let max = obj.attr('data-max');
		let warnAt = obj.attr('data-warn-at') ?? 0;

		if (typeof warnAt !== 'number' && isNaN(warnAt))
			warnAt = 0;

		counter.text(max - obj.val().length);

		warnAt = parseInt(warnAt);
		textLen = parseInt(counter.text());

		if (textLen <= warnAt && textLen >= 0) {
			counter.addClass('bg-warning');
			counter.removeClass('bg-danger');
			obj.addClass('mark-warning');
			obj.removeClass('mark-danger');
		}
		else if (textLen < 0) {
			counter.removeClass('bg-warning');
			counter.addClass('bg-danger');
			obj.removeClass('mark-warning');
			obj.addClass('mark-danger');
		}
		else {
			counter.removeClass('bg-danger');
			counter.removeClass('bg-warning');
			obj.removeClass('mark-danger');
			obj.removeClass('mark-warning');
		}
	});

	$('.text-counter-input').trigger('change');
});
