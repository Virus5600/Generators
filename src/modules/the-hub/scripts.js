import Tutorial from '../../js/util/tutorial.js/Tutorial.js';

$(() => {
	$(`app-category`).each((k, v) => {
		const obj = $(v);
		const appData = obj.data();

		let applications = ``;
		obj.find(`sub-application`).each((i, e) => {
			let data = $(e).data();

			applications += `
			<div class="app" id="${data.id ?? data.title?.toLowerCase().replaceAll(/\(\w+\)/g, "").replaceAll(/\s{2,}|\s/g, "-") ?? `sub-application-${i}`}">
				<a href="${data.link ?? `/`}">
					<img src="${data.img ?? `resources/favicon.png`}" alt="${data.title ?? `Sub-Application`}" class="app-thumbnail"/>

					<div class="app-title-container">
						<span class="app-title">
							${data.title ?? `Sub-Application`}
							<small class="app-description">${data.desc ?? `A sub-application`}</small>
						</span>
					</div>
				</a>
			</div>
			`;
		});

		let toAppend = `
		<div class="card ${appData.addClass ?? ``}">
			<h5 class="card-header text-center ${appData.addTitleClass ?? ``}">${appData.category ?? `Sub-Application Category`}</h5>

			<div class="card-body d-flex flex-row overflow-x-auto sub-application-list" draggable="false">
				${applications}
			</div>
		</div>
		`;

		$(toAppend).insertAfter(obj);
		obj.remove();
	});

	let tutorialDone = localStorage.getItem(`tutorial.hub`) === `true`;
	if (!tutorialDone) {
		tutorial();
	}
});

let tutorialAttempts = 0;
const tutorial = () => {
	if (document.querySelector(`#title-bar`) === null && tutorialAttempts < 10) {
		tutorialAttempts++;
		setTimeout(tutorial, 100);
		return false;
	}

	Tutorial.start({
		'#title-bar': {
			title: "Title Bar",
			content: "Contains the title of the current open sub-application. The window controls are also located here, along with the options/configuration"
		},
		'#title': {
			title: "Title",
			content: "This is where the sub-application title is located. Its title changes when changing applications so you will always know where you are."
		},
		"#title-bar-btns": {
			title: "Window Controls and Options",
			content: "This is where the minimize, maximize/restore, close, and options button is located. You know the drill here!<br>The options on the other hand, lets you configure your update options."
		},
		"#str-gen": {
			title: "String Generator",
			content: "Creates a string composed of random characters. It could be as short as 1 character, or as long as 255 characters."
		},
		"#dtr-gen": {
			title: "DTR Generator",
			content: "Creates a DTR from a pre-defined DTR template. Allows mass creation of DTR by just providing a text file with names per single line and providing desired values to the inputs."
		},
		"#dtr-tmp-gen": {
			title: "DTR Template Generator",
			content: "Creates a DTR Template that could be used by the DTR Generator. It allows you to create a template with a custom set of inputs and outputs."
		}
	});

	localStorage.setItem(`tutorial.hub`, `true`);
};
