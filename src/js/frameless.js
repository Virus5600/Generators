const { ipcRenderer } = require('electron');
const remote = require('@electron/remote');
const semver = require('semver');
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
					<small class="text-danger ms-5" data-vmsg="allowPrerelease"></small>
					</div>

					<div class="form-group">
					<div class="form-check">
						<input type="checkbox" class="form-checkbox" id="autoDownload" name="autoDownload" value="true" ${config.autoDownload ? 'checked' : ''}>
						<label class="form-label" for="autoDownload">Enable Update Auto Download</label>
					</div>

					<p class="text-muted small ms-5">Automatically download updates whenever there are available. This allows you to always don the latest version of the application.</p>
					<small class="text-danger ms-5" data-vmsg="autoDownload"></small>
				</div>

				<div class="form-group">
					<div class="form-check">
						<input type="checkbox" class="form-checkbox" id="checkForUpdates" name="checkForUpdates" ${config.checkForUpdates ? 'checked' : ''}>
						<label class="form-label" for="checkForUpdates">Auto Check For Updates</label>
					</div>

					<p class="text-muted small ms-5">Automatically check for any available updates. You can still manually check for updates by clicking the "Check for Updates" button below.</p>
					<small class="text-danger ms-5" data-vmsg="checkForUpdates"></small>
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
			allowEscapeKey: true,
			allowEnterKey: true,
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
			preConfirm: async() => {
				let importV = async() => {
					return await import("./util/validator/Validator.js");
				};

				let Validator = (await importV()).default;

				let ap = document.querySelector(`input[name="allowPrerelease"]`) ?? null;
				let ad = document.querySelector(`input[name="autoDownload"]`) ?? null;
				let cfu = document.querySelector(`input[name="checkForUpdates"]`) ?? null;

				let validator = new Validator({
					allowPrerelease: ap != null ? (ap.checked ? "true" : "false") : null,
					autoDownload: ad != null ? (ad.checked ? "true" : "false") : null,
					checkForUpdates: cfu != null ? (cfu.checked ? "true" : "false") : null,
				}, {
					allowPrerelease: ['required', 'boolean'],
					autoDownload: ['required', 'boolean'],
					checkForUpdates: ['required', 'boolean'],
				}, {
					allowPrerelease: {
						required: 'Please refrain from modifying the value of this field',
						boolean: 'Please refrain from modifying the value of this field'
					},
					autoDownload: {
						required: 'Please refrain from modifying the value of this field',
						boolean: 'Please refrain from modifying the value of this field'
					},
					checkForUpdates: {
						required: 'Please refrain from modifying the value of this field',
						boolean: 'Please refrain from modifying the value of this field'
					},
				});

				if (validator.fails()) {
					validator.invalidFields().forEach((field) => {
						document.querySelector(`[name=${field}]`).classList.add('is-invalid');
					});

					return false;
				}

				return validator.validate();
			}
		}).then((result) => {
			if (result.isConfirmed || result.isDenied) {
				if (result.isConfirmed) {
					for (v in result.value) {
						localStorage.setItem(v, result.value[v]);
					}
				}
				else {
					localStorage.clear();
					initConfigs();
				}

				let action = result.isConfirmed ? 'Updated' : 'Reverted';
				Swal.fire({
					title: `Successfully ${action} Update Configuration`,
					icon: 'success',
					showCancelButton: false,
					showConfirmButton: false,
					showDenyButton: false,
					timer: 2500,
					timerProgressBar: true,
					allowOutsideClick: false,
					allowEscapeKey: false,
					allowEnterKey: false,
				});

				setTimeout(() => {
					optionsButton.click();
				}, 2625);
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
	if (config.skipVersion === null)
		localStorage.setItem('skipVersion', ipcRenderer.sendSync('get-app-version'));
}

function getConfigs(rawData = false) {
	if (rawData) {
		return {
			allowPrerelease: localStorage.getItem('allowPrerelease'),
			autoDownload: localStorage.getItem('autoDownload'),
			checkForUpdates: localStorage.getItem('checkForUpdates'),
			skipVersion: localStorage.getItem('skipVersion'),
		};
	}

	return {
		allowPrerelease: localStorage.getItem('allowPrerelease') === 'true',
		autoDownload: localStorage.getItem('autoDownload') === 'true',
		checkForUpdates: localStorage.getItem('checkForUpdates') === 'true',
		skipVersion: localStorage.getItem('skipVersion'),
	};
}

// ACTUAL AUTO UPDATER CHECKER
function updateCheck() {
	// SETS THE LISTENERS
	// Update Check Started
	ipcRenderer.on('update-check-started', (e) => {
		console.log('Update check started...');
	});

	// Error
	ipcRenderer.on('update-error', (e, ...data) => {
		console.error("Something went wrong\n", data[0]);
		isManual = data[1];

		Swal.fire({
			title: 'Update Error',
			text: isManual ? 'Something went wrong while checking for updates. Please try again later.' : undefined,
			icon: `error`,
			toast: !isManual,
			timer: isManual ? undefined : 5000,
			timerProgressBar: isManual ? undefined : true,
			showConfirmButton: isManual,
			confirmButtonText: 'Close',
			position: isManual ? 'center' : 'top-end',
			customClass: {
				popup: isManual ? undefined : `p-3`
			}
		});
	});

	// Checking for Update
	ipcRenderer.on('checking-for-update', () => {
		console.log('Still checking for updates...');
	});

	// Update Available
	ipcRenderer.on('update-available', (e, [data, isManual]) => {
		let skipVersion = localStorage.getItem('skipVersion');
		if (semver.gte(skipVersion, data.version) && !isManual) {
			console.log('Skipping update...', {
				skip: skipVersion,
				update: data.version
			});
			return;
		}

		console.log('An update is available!', {
			skip: skipVersion,
			update: data.version
		});
		let content = `
		<p>A new update is available. Do you want to update now?</p>

		<h4 class="text-start">Patch Notes</h4>
		<div class="text-bg-secondary rounded">${data.releaseNotes}</div>
		`;

		Swal.fire({
			title: `v${data.version} is now Available`,
			html: content,
			iconColor: `#3fc3ee`,
			iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-download fa-stack-1x text-white"></i></span>`,
			showConfirmButton: true,
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Update',
			denyButtonText: 'Skip',
			cancelButtonText: 'Later',
		}).then((result) => {
			if (result.isConfirmed) {
				ipcRenderer.send('download-update');

				Swal.fire({
					title: `Downloading Update...`,
					html: `<div class="progress" role="progressbar" aria-label="Download Progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
						<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%;"></div>
					</div>`
				});
			}
			else if (result.isDenied) {
				localStorage.setItem('skipVersion', data.version);
				Swal.fire({
					title: `Skipping Update...`,
					icon: 'info',
					timer: 2500,
					timerProgressBar: true,
				});
			}
		});
	});

	// Update Not Available
	ipcRenderer.on('update-not-available', (e) => {
		console.log('No updates yet...');

		Swal.fire({
			icon: 'success',
			title: 'No Updates Available',
			text: 'You are currently using the latest version of the application.',
		});
	});

	// Downloading Update
	ipcRenderer.on('download-progress', (e, data) => {
		console.log('Downloading update...', data);

		let i = Math.ceil(data.percent);
		Swal.update({
			html: `<div class="progress" role="progressbar" aria-label="Download Progress" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${i}%;">${i}%</div>
			</div>`
		});
	});

	// Update Downloaded
	ipcRenderer.on('update-downloaded', () => {
		Swal.fire({
			title: 'Update Downloaded',
			text: 'Restart the application to update the application.',
			iconColor: `#3fc3ee`,
			iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-check-to-slot fa-stack-1x text-white"></i></span>`,
			showConfirmButton: true,
			showDenyButton: true,
			confirmButtonText: 'Restart',
			denyButtonText: 'Later',
		}).then((result) => {
			if (result.isConfirmed)
				ipcRenderer.send('restart-app');
		});
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
			ipcRenderer.send('check-for-updates', getConfigs(), true);
		}
	});
}
