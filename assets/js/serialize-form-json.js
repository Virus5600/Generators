(function ($) {
	$.fn.serializeFormJSON = function () {
		var jsonForm = {};
		var a = this.serializeArray();
		var indexes = {};

		$.each(a, function () {
			if (this.name.match(/(\[\])/gi)) {
				this.name = this.name.replaceAll(/(\[\])/gi, "");
			}

			if (jsonForm[this.name]) {
				if (!jsonForm[this.name].push) {
					jsonForm[this.name] = [jsonForm[this.name]];
				}
				jsonForm[this.name].push(this.value || '');
			} else {
				jsonForm[this.name] = this.value || '';
			}
		});
		return jsonForm;
	};
})(jQuery);
// (C) gabrieleromanato @ https://jsfiddle.net/gabrieleromanato/bynaK/