import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable.js';
import * as Elements from "./Elements/Element.js";

// Initializes templater
function init() {
	$(() => {
		// Check for the styling. If isn't present, append the style to the head.
		let styling = document.querySelector(`[data-templater-style]`);
		if (!styling) {
			$(`head`).append(style);
		}

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

						const POPOVER = new bootstrap.Popover(ELEMENT_INSTANCE.element(), {
							container: ELEMENT_INSTANCE.element(),
							content: `TEST`,
							fallbackPlacements: [`top`, `bottom`],
							html: true,
							placement: `top`,
							template: toolbar(ELEMENT_INSTANCE.element(), ELEMENT_INSTANCE.getTools()),
							trigger: `focus`
						});

					ELEMENT_INSTANCE.createPopover(POPOVER, false);

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
		<div class="popover-arrow border-secondary" data-popper-arrow></div>

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

	return toReturn;
}
