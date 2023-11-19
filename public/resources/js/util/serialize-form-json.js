HTMLFormElement.prototype.serializeFormJSON = function (removeArrayIdentifier = false) {
	var fd = new FormData(document.forms[0]);

	let formVal = {};
	[...fd].forEach((formData) => {
		let [k, v] = formData;
		if (`${k}`.match(/(\[\]$)/gi)) {
			if (removeArrayIdentifier) k = k.replace(/(\[\]$)/gi, '');

			if (formVal[k]) formVal[k].push(v);
			else formVal[k] = [v]
		}
		else {
			formVal[k] = v;
		}
	});

	return formVal;
};

if (jQuery || window.jQuery || $ || window.$) {
	(function ($) {
		$.fn.serializeFormJSON = function (removeArrayIdentifier = false) {
			if (this.length == 1) {
				return this[0].serializeFormJSON(removeArrayIdentifier);
			}

			let jsonForm = [];
			for (let f of this) {
				if (f instanceof HTMLFormElement) {
					jsonForm.push({
						id: f.id,
						classes: f.classList,
						action: f.action,
						method: f.method,
						values: f.serializeFormJSON()
					});
				}
			}

			return jsonForm;
		};
	})(jQuery);
}
