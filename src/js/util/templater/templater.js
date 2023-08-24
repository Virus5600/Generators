import * as Elements from "./Elements/Element.js";

// Checks for bootstrap functions
if (typeof window.bootstrap != 'function' && typeof window.bootstrap != 'object') {
	import(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.esm.min.js`)
	.then((moduleBS) => {
		window.bootstrap = moduleBS.bootstrap;
		
		document.querySelectorAll(`[data-templater-importmap]`).forEach(v => {
		    v.remove();
		});
	});
}
else {
	document.querySelectorAll(`[data-templater-importmap]`).forEach(v => {
	    v.remove();
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

					ELEMENT_INSTANCE.prop(`contentEditable`, true)
						.text(clazz);

					ELEMENT_INSTANCE.createPopover(
						new bootstrap.Popover(ELEMENT_INSTANCE.element(), {
							container: ELEMENT_INSTANCE.element(),
							content: `TEST`,
							fallbackPlacements: [`top`, `bottom`],
							html: true,
							placement: `top`,
							template: toolbar(ELEMENT_INSTANCE.element(), ELEMENT_INSTANCE.getTools()),
							trigger: `focus`
						})
					);

					// TODO: Fix popover dropdown not rendering.

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

function toolbar(parent, tools) {
	if (typeof tools === `string`)
		tools += `<div class="vr"></div>`;
	else
		tools = ``;

	let toReturn = `
	<div class="popover opacity-87.5" role="popover" contenteditable="false">
		<div class="popover-arrow border-secondary"></div>

		<div class="hstack gap-2 px-2">
			<span class="handle border-0 btn">
				<i class="fas fa-grip-vertical fa-fw m-auto"></i>
			</span>

			<div class="vr"></div>

			${tools}

			<div class="dropdown">
				<button class="btn btn-outline-secondary dropdown-toggle border-0" type="button" title="others" data-bs-toggle="dropdown" aria-expanded="false">
					<i class="fas fa-ellipsis-vertical m-auto"></i>
				</button>
			</div>
		</div>
	</div>
	`;

	console.log(toReturn);
	console.log(window.toReturn = $(toReturn));

	return toReturn;
}