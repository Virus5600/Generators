import * as Elements from "./Elements/Element.js";

// Checks for bootstrap functions
if (typeof window.bootstrap != 'function') {
	import(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js`)
	.then((moduleBS) => {
		window.bootstrap = moduleBS.bootstrap;
	});
}

// Checks for jQuery function
if (typeof window.$ != 'function' || typeof window.jQuery != 'function') {
	import(`https://code.jquery.com/jquery-3.6.4.min.js`)
	.then((module) => {
		window.$ = window.jQuery = module.$ || module.jQuery;

		init();
	});
}
else {
	init();
}

// Initializes templater
function init() {
	$(document).ready(() => {
		$(`[data-templater]`).each((k, v) => {
			const obj = $(v);
			const EL = obj.data(`templater`);
			const target = $(obj.data(`templaterTarget`));

			if (EL !== undefined && EL !== null) {
				obj.on(`click`, (e) => {
					const clazz = EL[0].toUpperCase() + EL.slice(1);
					const ELEMENT_INSTANCE = new Elements[clazz]();
					const OBJ = $(ELEMENT_INSTANCE);

					ELEMENT_INSTANCE.text(clazz);
					ELEMENT_INSTANCE.prop(`contentEditable`, true);

					// TODO: Create a Popover for the handler and element controls.

					target.append(ELEMENT_INSTANCE.element());
					target.trigger(`change`);
				});
			}
			else {
				console.warning(`Templater does not specify what element to create.`, v);
			}
		});
	});
}