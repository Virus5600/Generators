$(document).ready(() => {
	$(`app-category`).each((k, v) => {
		const obj = $(v);
		const appData = obj.data();

		let applications = ``;
		obj.find(`sub-application`).each((i, e) => {
			let data = $(e).data();

			applications += `
			<a class="app" href="${data.link ?? `/`}">
				<img src="${data.img ?? `resources/favicon.png`}" alt="${data.title ?? `Sub-Application`}" class="app-thumbnail"/>

				<div class="app-title-container">
					<span class="app-title">
						${data.title ?? `Sub-Application`}
						<small class="app-description">${data.desc ?? `A sub-application`}</small>
					</span>
				</div>
			</a>
			`;
		});

		let toAppend = `
		<div class="card ${Object.keys(appData).includes(`addClass`) ? appData.addClass : ``}">
			<h5 class="card-header text-center">${appData.category ?? `Sub-Application Category`}</h5>

			<div class="card-body d-flex flex-row overflow-x-scroll sub-application-list" draggable="false">
				${applications}
			</div>
		</div>
		`;

		$(toAppend).insertAfter(obj);
		obj.remove();
	});
});
