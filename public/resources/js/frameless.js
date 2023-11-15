const { ipcRenderer } = require('electron');
const remote = require('@electron/remote');
const { first } = require('lodash');
const win = remote.getCurrentWindow();
let initialized = false;

document.readyState === 'complete' ? init() : initialized ? null : window.addEventListener('load', init);

function init() {
	initialized = true;

	prependTitleBar();

	const minimizeButton = document.querySelector('button#min-btn');
	const maximizeButton = document.querySelector('button#max-btn');
	const closeButton = document.querySelector('button#close-btn');

	let isMaximized = win.isMaximized();

	closeButton.addEventListener('click', () => win.close());
	minimizeButton.addEventListener('click', () => win.minimize());
	maximizeButton.addEventListener('click', () => {
		isMaximized = !isMaximized;
		toggleMaximizeButton(isMaximized);
	});

	win.on('unmaximize', () => {
		isMaximized = false;
		toggleMaximizeButton(isMaximized);
	});

	win.on('maximize', () => {
		isMaximized = true;
		toggleMaximizeButton(isMaximized);
	});

	window.onbeforeunload = (e) => {
		win.removeAllListeners();
		// Add an emitter remover
	}

	function toggleMaximizeButton(isMax) {
		if (isMax) {
			maximizeButton.querySelector('svg').classList.remove('fa-window-maximize');
			maximizeButton.querySelector('svg').classList.add('fa-window-restore');
			win.maximize();
		}
		else {
			maximizeButton.querySelector('svg').classList.remove('fa-window-restore');
			maximizeButton.querySelector('svg').classList.add('fa-window-maximize');
			win.unmaximize();
		}
	}

	// Auto Updater - Detects whether there's an update or not
	updateCheck();
}

function prependTitleBar() {
	const favicon = document.querySelector(`link[rel=icon]`).dataset['alt'];
	const title = document.querySelector(`head > title`).innerText;

	const titleBar = `
	<div id="title-bar">
		<div id="title">
			<img src="${favicon}" alt="Generator">
			<span>${title}</span>
		</div>

		<div id="title-bar-btns">
			<button id="min-btn">
				<i class="fas fa-window-minimize"></i>
			</button>

			<button id="max-btn">
				<i class="fas fa-window-${win.isMaximized() ? "restore" : "maximize"}"></i>
			</button>

			<button id="close-btn">
				<i class="fa fa-x"></i>
			</button>
		</div>
	</div>
	`;

	let goBackMeta = document.querySelector(`meta[name="go-back"]`);
	let goBackURI = goBackMeta ? goBackMeta.content : undefined;
	let goBackTitle = goBackMeta ? goBackMeta.title : "Go Back";
	let goBack = ``;
	if (goBackURI) {
		goBack = `
			<h3 class="mx-3 my-2">
				<a href="${goBackURI}" class="text-decoration-none link-body-emphasis">
					<i class="fas fa-chevron-left mr-2"></i> ${goBackTitle}
				</a>
			</h3>
		`;
	}

	const body = document.querySelector(`body`);
	body.insertAdjacentHTML('afterbegin', goBack);
	body.insertAdjacentHTML('afterbegin', titleBar);

	// Favicon Update
	let updateFavSuccess = updateFavicon(favicon) ? true : updateFavicon(document.querySelector(`link[rel=icon]`).href);
	if (!updateFavSuccess)
		console.warn("Failed to set favicon")
}

function updateFavicon(favicon) {
	let firstSuccess = true;
	let secondSuccess = true;

	try {
		// First Attempt
		try {
			win.setIcon(__dirname + favicon);
		} catch (e) {
			firstSuccess = false;
			console.warn("First attempt to set icon failed\nUsing: " + favicon, e);
		}

		// Second Attempt
		if (!firstSuccess) {
			win.setIcon(favicon);
		}
	} catch (ex) {
		secondSuccess = false;
		console.warn("Second attempt to set icon failed\nUsing: " + favicon, ex);
	}

	return (firstSuccess || secondSuccess);
}

function updateCheck() {
	ipcRenderer.on('update_available', (e) => {
		console.log('update-available', e);
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
}
