(function ($) {
	$.fn.serializeFormJSON = function () {
		var jsonForm = {};
		var a = this.serializeArray();
		var indexes = {};

		$.each(a, function () {
			let isArr = false;

			if (this.name.match(/(\[\])/gi)) {
				this.name = this.name.replaceAll(/(\[\])/gi, "");
				isArr = true;
				
				if (typeof jsonForm[this.name] == 'undefined')
					jsonForm[this.name] = Array();
			}

			if (isArr) {
				jsonForm[this.name].push(this.value || '');
			} else {
				jsonForm[this.name] = this.value || '';
			}
		});
		return jsonForm;
	};
})(jQuery);
// (C) gabrieleromanato @ https://jsfiddle.net/gabrieleromanato/bynaK/