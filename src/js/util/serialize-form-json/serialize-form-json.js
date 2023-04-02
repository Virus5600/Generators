(function ($) {
	$.fn.serializeFormJSON = function () {
		var jsonForm = {};
		var a = this.serializeArray();

		$.each(a, function () {
			let isArray = false;
			if (this.name.match(/(\[\])/gi)) {
				isArray = true;
				this.name = this.name.replaceAll(/(\[\])/gi, "");
			}

			if (jsonForm[this.name]) {
				if (isArray)
					jsonForm[this.name].push(this.value || '');
				else
					jsonForm[this.name] = this.value;
			} else {
				if (isArray)
					jsonForm[this.name] = [this.value || ''];
				else
					jsonForm[this.name] = this.value || '';
			}
		});
		return jsonForm;
	};
})(jQuery);
// (C) gabrieleromanato @ https://jsfiddle.net/gabrieleromanato/bynaK/