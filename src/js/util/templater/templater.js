import * as Elements from "./Elements/index.js";

// Initializes templater
function init() {
	$(`[data-templater]`).each((k, v) => {
		const obj = $(v);
		const EL = obj.data(`templater`);
		const target = $(obj.data(`templaterTarget`));

		if (EL !== undefined && EL !== null) {
			obj.on(`click`, (e) => {
				const clazz = EL[0].toUpperCase() + EL.slice(1);
				const ELEMENT_INSTANCE = new Elements[clazz]();
				// OBJ const currently has no use but will probably be used in the future.
				// STATUS: Not used => Commented out
				// const OBJ = $(ELEMENT_INSTANCE);

				ELEMENT_INSTANCE.prop(`contentEditable`, true)
					.text(clazz);

				target.append(ELEMENT_INSTANCE.element());
				target.trigger(`change`);
			});
		}
		else {
			console.warning(`Templater does not specify what element to create.`, v);
		}
	});
}

$(() => {
	// Initialize the code
	init();
});
