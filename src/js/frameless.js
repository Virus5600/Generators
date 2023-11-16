const { ipcRenderer } = require('electron');
const remote = require('@electron/remote');
const { first } = require('lodash');
const win = remote.getCurrentWindow();
let initialized = false;

document.readyState === 'complete' ? init() : initialized ? null : window.addEventListener('load', init);

function init() {
	initialized = true;

	initConfigs();
	prependTitleBar();

	const optionsButton = document.querySelector('button#options-btn');
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
	optionsButton.addEventListener('click', () => {
		let config = getConfigs();
		let content = `
		<div class="card text-light text-start">
			<div class="card-body px-0">
				<div class="form-group">
					<div class="form-check">
						<input type="checkbox" class="form-checkbox" id="allowPrerelease" name="allowPrerelease" value="true" ${config.allowPrerelease ? 'checked' : ''}>
						<label class="form-label" for="allowPrerelease">Check Pre-release</label>
					</div>

					<p class="text-muted small ms-5">Check for Pre-release updates. Versions released in this state contains experimental features and may be unstable.</p>
				</div>

				<div class="form-group">
					<div class="form-check">
						<input type="checkbox" class="form-checkbox" id="autoDownload" name="autoDownload" value="true" ${config.autoDownload ? 'checked' : ''}>
						<label class="form-label" for="autoDownload">Enable Update Auto Download</label>
					</div>

					<p class="text-muted small ms-5">Automatically download updates whenever there are available. This allows you to always don the latest version of the application.</p>
				</div>

				<div class="form-group">
					<div class="form-check">
						<input type="checkbox" class="form-checkbox" id="checkForUpdates" name="checkForUpdates" ${config.checkForUpdates ? 'checked' : ''}>
						<label class="form-label" for="checkForUpdates">Auto Check For Updates</label>
					</div>

					<p class="text-muted small ms-5">Automatically check for any available updates. You can still manually check for updates by clicking the "Check for Updates" button below.</p>
				</div>
			</div>

			<div class="card-footer text-center">
				<button id="check-for-updates" class="btn btn-primary">Check for Updates</button>
			</div>
		</div>
		`;

		Swal.fire({
			title: `Configuration`,
			html: content,
			iconHtml: `<i class="fas fa-gear text-success-emphasis"></i>`,
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false,
			showCloseButton: true,
			showConfirmButton: true,
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: `Save`,
			denyButtonText: `Reset`,
			cancelButtonText: `Close`,
			confirmButtonAriaLabel: `Save`,
			denyButtonAriaLabel: `Reset`,
			cancelButtonAriaLabel: `Close`,
			focusConfirm: false,
			showLoaderOnConfirm: true,
			showLoaderOnDeny: true,
			preConfirm: () => {
			}
		});
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
			maximizeButton.title = "Restore";
			maximizeButton.querySelector('svg').classList.remove('fa-window-maximize');
			maximizeButton.querySelector('svg').classList.add('fa-window-restore');
			win.maximize();
		}
		else {
			maximizeButton.title = "Maximize";
			maximizeButton.querySelector('svg').classList.remove('fa-window-restore');
			maximizeButton.querySelector('svg').classList.add('fa-window-maximize');
			win.unmaximize();
		}
	}

	// Initialize Event Listeners
	initEventListeners();

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
			<button id="options-btn" title="Options">
				<i class="fas fa-gear"></i>
			</button>

			<button id="min-btn" title="Minimize">
				<i class="fas fa-window-minimize"></i>
			</button>

			<button id="max-btn" title="${win.isMaximized() ? "Restore" : "Maximize"}">
				<i class="fas fa-window-${win.isMaximized() ? "restore" : "maximize"}"></i>
			</button>

			<button id="close-btn" title="Close">
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

// INITIALIZED CONFIGS IF NOT YET
function initConfigs() {
	let config = getConfigs(true);

	if (config.allowPrerelease === null)
		localStorage.setItem('allowPrerelease', false);
	if (config.autoDownload === null)
		localStorage.setItem('autoDownload', false);
	if (config.checkForUpdates === null)
		localStorage.setItem('checkForUpdates', true);
}

function getConfigs(rawData = false) {
	if (rawData) {
		return {
			allowPrerelease: localStorage.getItem('allowPrerelease'),
			autoDownload: localStorage.getItem('autoDownload'),
			checkForUpdates: localStorage.getItem('checkForUpdates'),
		};
	}

	return {
		allowPrerelease: localStorage.getItem('allowPrerelease') === 'true',
		autoDownload: localStorage.getItem('autoDownload') === 'true',
		checkForUpdates: localStorage.getItem('checkForUpdates') === 'true',
	};
}

// ACTUAL AUTO UPDATER CHECKER
function updateCheck() {
	// Sets the listeners
	ipcRenderer.on('update-check-started', () => {
		console.log('Update check started...');
	});

	ipcRenderer.on('checking-for-update', () => {
		console.log('Still checking for updates...');
	});

	ipcRenderer.on('update-available', (e, data) => {
		console.log('An update is available!', data);
		Swal.fire({
			title: 'Update Available',
			text: 'A new update is available. Do you want to update now?',
			iconColor: `#3fc3ee`,
			iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-download fa-stack-1x text-white"></i></span>`,
			showConfirmButton: true,
			confirmButtonText: 'Update',
		}).then((result) => {
			if (result.isConfirmed)
				ipcRenderer.send('download_update');
		});
	});

	ipcRenderer.on('update-not-available', (e) => {
		console.log('No updates yet...');
	});

	ipcRenderer.on('update-error', (e, data) => {
		console.error("Something went wrong\n", data);
		Swal.fire({
			title: 'Update Error',
			text: 'Something went wrong while checking for updates. Please try again later.',
			iconColor: `#f44336`,
			icon: `error`,
			showConfirmButton: true,
			confirmButtonText: 'Close',
		});
	});

	ipcRenderer.on('update-downloaded', () => {
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

	ipcRenderer.on('download-progress', (e, data) => {
	});

	// Sends the request to the main process
	let config = getConfigs();
	if (config.checkForUpdates) {
		ipcRenderer.send('check-for-updates', config);
	}
}

function initEventListeners() {
	document.addEventListener('click', (e) => {
		if (e.target.closest(`#check-for-updates`)) {
			console.log(`Checking for updates...`, getConfigs());
			ipcRenderer.send('check-for-updates', getConfigs());
		}
	});
}
