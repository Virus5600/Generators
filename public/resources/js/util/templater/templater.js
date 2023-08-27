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

// Checks for PopperJS
if (typeof window.Popper != 'function' && typeof window.Popper != 'object') {
	import(`https://unpkg.com/@popperjs/core@2.11.8/dist/esm/index.js`)
	.then((modulePop) => {
		window.Popper = modulePop;
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
	const style = `
	<style data-templater-style>
		[data-popper-arrow],
		[data-popper-arrow]::before {
			position: absolute;
			width: 8px;
			height: 8px;
		  }

		  [data-popper-arrow] {
			visibility: hidden;
		  }

		  [data-popper-arrow]::before {
			visibility: visible;
			content: '';
			transform: rotate(45deg);
		  }

		  [role=popover][data-popper-placement^='top'] > [data-popper-arrow] {
			bottom: -4px;
		  }

		  [role=popover][data-popper-placement^='bottom'] > [data-popper-arrow] {
			top: -4px;
		  }

		  [role=popover][data-popper-placement^='left'] > [data-popper-arrow] {
			right: -4px;
		  }

		  [role=popover][data-popper-placement^='right'] > [data-popper-arrow] {
			left: -4px;
		  }
	</style>
	`;
	$(document).ready(() => {
		// Check for the styling. If itsn't present, append the style to the head.
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

						// const POPOVER =  Popper.createPopper(
						// 	ELEMENT_INSTANCE.element(),
						// 	toolbar(ELEMENT_INSTANCE.element(), ELEMENT_INSTANCE.getTools()),
						// 	{
						// 		placement: `auto`,
						// 		modifiers: [
						// 			{
						// 				name: `offset`,
						// 				options: {
						// 					offset: [0, 10]
						// 				}
						// 			},
						// 			{
						// 				name: `flip`,
						// 				options: {
						// 					fallbackPlacements: [
						// 						`top`,
						// 						`bottom`,
						// 						`left`,
						// 						`right`
						// 					]
						// 				}
						// 			}
						// 		]
						// 	}
						// );

					ELEMENT_INSTANCE.createPopover(POPOVER, false);

					// TODO: Migrate popover to vanilla Popper component.
					// NOTE: Current work is revolving around recreating Bootstrap 5s' component functionality.

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