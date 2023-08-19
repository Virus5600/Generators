const { ipcRenderer } = require('electron');

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
	ipcRenderer.removeAllListeners('app_version');
});

ipcRenderer.on('update_available', () => {
	ipcRenderer.removeAllListeners('update_available');
	Swal.fire({
		title: 'Update Available',
		text: 'A new update is available. Do you want to update now?',
		iconColor: `#3fc3ee`,
		iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-download fa-stack-1x text-white"></i></span>`,
		showConfirmButton: true,
		confirmButtonText: 'Update',
	}).then((result) => {
		if (result.isConfirmed)
			Swal.close();
	});
});

ipcRenderer.on('update_downloaded', () => {
	ipcRenderer.removeAllListeners('update_downloaded');
	Swal.fire({
		title: 'Update Downloaded',
		text: 'Restart the application to apply the updates.',
		iconColor: `#3fc3ee`,
		iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-check-to-slot fa-stack-1x text-white"></i></span>`,
		showConfirmButton: true,
		confirmButtonText: 'Restart',
	}).then((result) => {
		if (result.isConfirmed)
			ipcRenderer.send('restart_app');
	});
});

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