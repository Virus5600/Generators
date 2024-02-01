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

					const POPOVER = new bootstrap.Popover(ELEMENT_INSTANCE.element(), {
						container: ELEMENT_INSTANCE.element(),
						content: `TEST`,
						fallbackPlacements: [`top`, `bottom`],
						html: true,
						placement: `top`,
						template: toolbar(ELEMENT_INSTANCE.getTools()),
						trigger: `focus`,
						sanitize: false,
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
}

function toolbar(tools) {
	if (typeof tools === `string`)
		tools += `<div class="vr"></div>`;
	else
		tools = ``;

	let toReturn = `
	<div class="popover opacity-87.5 border-1 border-secondary dtrtg-toolbar" role="popover" contenteditable="false">
		<div class="popover-arrow border-1 border-secondary" data-popper-arrow></div>

		<div class="hstack px-2 dtrtg-toolbar-content">
			${tools}

			<div class="hstack dtrtg-toolbar-content-end">
				<div class="dropdown">
					<button class="btn dropdown-toggle" type="button" title="others" data-bs-toggle="dropdown" aria-expanded="false">
						<i class="fas fa-ellipsis-vertical m-auto"></i>
					</button>
				</div>

				<span class="delete btn">
					<i class="fas fa-trash fa-fw m-auto"></i>
				</span>

				<span class="handle btn">
					<i class="fas fa-grip-vertical fa-fw m-auto"></i>
				</span>
			</div>
		</div>
	</div>`;

	return toReturn;
}

$(() => {
	// Initialize the code
	init();

	// Attach Event Listener to the delete button.
	$(document).on(`click`, `.dtrtg-toolbar .delete`, (e) => {
		let target = $(e.currentTarget).closest(`[id]`)[0].id;
		$(`[aria-describedby=${target}]`).remove();
	});
});
