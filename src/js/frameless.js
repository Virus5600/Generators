const { ipcRenderer, shell } = require('electron');
const remote = require('@electron/remote');
const semver = require('semver');
const md = require('markdown-it');

import Validator from './util/validator/Validator.js';

const win = remote.getCurrentWindow();
let initialized = false;
var tutorial = {};

document.readyState === 'complete' ? init() : initialized ? null : window.addEventListener('load', init);

function init() {
	initialized = true;

	initConfigs();
	prependTitleBar();

	const tutorialButton = document.querySelector('button#tutorial-btn');
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
				<button id="check-version-changes" class="btn btn-secondary">Changelog</button>
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
					for (let v in result.value) {
						localStorage.setItem(v, result.value[v]);
					}
				}
				else {
					let tutorialDone = localStorage.getItem(`tutorial.hub`) === `true`;
					localStorage.clear();
					localStorage.setItem(`tutorial.hub`, tutorialDone);
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
					allowOutsideClick: true,
					allowEscapeKey: true,
					allowEnterKey: false,
				}).then((response) => {
					if (response.isDismissed) {
						optionsButton.click();
					}
				});
			}
		});
	});
	if (Object.keys(tutorial).length > 0) {
		tutorialButton?.addEventListener('click', () => {
			let tutorialDone = localStorage.getItem(`tutorial.hub`) === `true`;
			if (tutorialDone) {
				Swal.fire({
					title: `Tutorial`,
					text: `You have already completed the tutorial. Do you want to restart the tutorial?`,
					icon: `question`,
					iconColor: `#3fc3ee`,
					showDenyButton: true,
					confirmButtonText: `Yes`,
					denyButtonText: `No`,
				}).then((result) => {
					if (result.isConfirmed) {
						runTutorial();
					}
				});
			}
			else {
				runTutorial();
			}
		});
	}

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
	if (localStorage.getItem(`tutorial.hub`) === `true`)
		updateCheck();

	// Add listener to all [data-open-external] anchor tags
	initOpenExternal();
}

function prependTitleBar() {
	const favicon = document.querySelector(`link[rel=icon]`).dataset['alt'];
	const title = document.querySelector(`head > title`).innerText;
	tutorial = {
		happened: localStorage.getItem(`tutorial.${document.querySelector('meta[property=shortname]')?.content}`) === `true`,
		stepsDir: document.querySelector('meta[property=tutorial-steps]')?.content ?? null,
		button: ``,
	};

	if (tutorial.stepsDir != null) {
		document.querySelector('meta[property=tutorial-steps]').remove();
		fetch(tutorial.stepsDir)
			.then((res) => res.json())
			.then((data) => {
				tutorial.stepsDir = data;
			});

		tutorial.button = `
			<button id="tutorial-btn" title="Tutorial">
				<i class="fas fa-question-circle"></i>
			</button>
		`;
	}

	const titleBar = `
	<div id="title-bar">
		<div id="title">
			<img src="${favicon}" alt="Generator">
			<span>${title}</span>
		</div>

		<div id="title-bar-btns">
			${tutorial.button}

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

			if (!ipcRenderer.sendSync('get-app-version'))
				console.warn("First attempt to set icon failed\nUsing: " + favicon, e);
		}

		// Second Attempt
		if (!firstSuccess) {
			win.setIcon(favicon);
		}
	} catch (ex) {
		secondSuccess = false;

		if (!ipcRenderer.sendSync('get-app-version'))
			console.warn("Second attempt to set icon failed\nUsing: " + favicon, ex);
	}

	return (firstSuccess || secondSuccess);
}

function openUpdateLog() {
	fetch("resources/modules/the-hub/assets/changelog.json").then((res) => {
		return res.json();
	}).then((data) => {
		let c = data.changelogs[0];

		const changelogTypes = ["added", "updated", "removed"],
			changelogBullets = ["🟢", "🟡", "🔴"];

		let changelog = {
			added: null,
			updated: null,
			removed: null
		},
		content = ``;

		c.date = new Date(c.date).toLocaleString("default", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		});

		changelogTypes.forEach((type, index) => {
			if (c.changelog[type] instanceof Array) {
				changelog[type] = c.changelog[type].map((item) => {
					return `${changelogBullets[index]} ${item}`;
				}).join("\n\n");
			}
		});

		content += `
		<div class="col-12 col-lg-10">
			<div class="card floating-header my-5 fs-6">
				<div class="card-header border rounded d-flex flex-row align-items-center bg-body-tertiary">
					${c["pre-release"] ? `<small class="me-3 d-flex flex-row align-items-center"><span class="badge rounded-pill bg-info text-dark">Pre-release</span></small>` : ``}
					<h3 class="my-0">${c.version}</h3>
				</div>

				<div class="card-body text-start pt-5">
					<div class="card-text d-flex flex-row mb-2">
						<h4 class="my-auto me-2">${c.date}</h4>
						<hr class="w-auto flex-grow-1">
					</div>

					${md().render(c.description)}
					<br>

					<div class="card-text d-flex flex-row mb-2">
						<h4 class="my-auto me-2">Changelog</h4>
						<hr class="w-auto flex-grow-1">
					</div>

					<div class="container-fluid">
						${changelog.added ? `<h5 class="mt-2 mb-3">Added</h5>${md().render(changelog.added).replaceAll(/(\<p)(>)/g, "$1 class=\"my-0\"$2")}` : ``}
						${changelog.updated ? `<h5 class="mt-2 mb-3">Updated</h5>${md().render(changelog.updated).replaceAll(/(\<p)(>)/g, "$1 class=\"my-0\"$2")}` : ``}
						${changelog.removed ? `<h5 class="mt-2 mb-3">Removed</h5>${md().render(changelog.removed).replaceAll(/(\<p)(>)/g, "$1 class=\"my-0\"$2")}` : ``}
					</div>
				</div>
			</div>
		</div>
		`;

		Swal.fire({
			title: `Successfully Updated to ${c.version}!`,
			html: content.replaceAll(/(\<a.+".+")(\>)/gi, "$1 data-open-external$2"),
			showDenyButton: false,
			confirmButtonText: `Close`,
			width: `75%`
		});

		localStorage.setItem(`openUpdateLog`, false);
	});
}

// INITIALIZED CONFIGS IF NOT YET
function initConfigs() {
	let config = getConfigs(true);

	if (sessionStorage.getItem('update-later') === null)
		sessionStorage.setItem('update-later', false);
	if (sessionStorage.getItem('skipSkippedVer') === null)
		sessionStorage.setItem('skipSkippedVer', false)

	if (config.allowPrerelease === null)
		localStorage.setItem('allowPrerelease', false);
	if (config.autoDownload === null)
		localStorage.setItem('autoDownload', false);
	if (config.checkForUpdates === null)
		localStorage.setItem('checkForUpdates', true);

	if (config.skipVersion === null || semver.eq(config.skipVersion, ipcRenderer.sendSync('get-app-version')))
		localStorage.setItem('skipVersion', ipcRenderer.sendSync('get-app-version'));
}

function getConfigs(rawData = false) {
	if (rawData) {
		return {
			allowPrerelease: localStorage.getItem('allowPrerelease'),
			autoDownload: localStorage.getItem('autoDownload'),
			checkForUpdates: localStorage.getItem('checkForUpdates'),
			skipVersion: localStorage.getItem('skipVersion'),
			openUpdateLog: localStorage.getItem('openUpdateLog'),
		};
	}

	return {
		allowPrerelease: localStorage.getItem('allowPrerelease') === 'true',
		autoDownload: localStorage.getItem('autoDownload') === 'true',
		checkForUpdates: localStorage.getItem('checkForUpdates') === 'true',
		skipVersion: localStorage.getItem('skipVersion'),
		openUpdateLog: localStorage.getItem('openUpdateLog') === 'true',
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
		let isManual = data[1];

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
		if (sessionStorage.getItem('update-later') === 'true' && !isManual) {
			sessionStorage.removeItem('skipSkippedVersion');
			console.log('Remind later...');
			return;
		}

		let skipSkippedVer = sessionStorage.getItem('skipSkippedVer');
		let skipVersion = localStorage.getItem('skipVersion');
		if (!skipSkippedVer || (semver.gte(skipVersion, data.version) && !isManual)) {
			console.log('Skipping update...', {
				skip: skipVersion,
				update: data.version
			});

			Swal.fire({
				icon: 'success',
				title: 'No Updates Available',
				text: 'You are currently using the latest version of the application.',
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
		<div class="text-bg-secondary rounded text-start p-3">${data.releaseNotes.replaceAll(/(\<a.+".+")(\>)/gi, "$1 data-open-external$2")}</div>
		`;

		Swal.fire({
			title: `v${data.version} is now Available`,
			html: content,
			iconColor: `#3fc3ee`,
			iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-download fa-stack-1x text-white"></i></span>`,
			grow: `row`,
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
			else {
				sessionStorage.setItem('update-later', true);
				Swal.fire({
					title: `You will be reminded again later.`,
					icon: 'info',
					timer: 2500,
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					showCloseButton: true,
				});
			}

			sessionStorage.removeItem('skipSkippedVer');
		});
	});

	// Update Not Available
	ipcRenderer.on('update-not-available', (e, isManual) => {
		console.log('No updates yet...');

		if (isManual) {
			Swal.fire({
				icon: 'success',
				title: 'No Updates Available',
				text: 'You are currently using the latest version of the application.',
			});
		}

		if (getConfigs().openUpdateLog) {
			openUpdateLog();
		}
	});

	// Downloading Update
	ipcRenderer.on('download-progress', (e, data) => {
		console.log('Downloading update...', data);

		if (Swal.getPopup() != null) {
			let progress = Math.round(data.percent);
			Swal.update({
				html: `<div class="progress" role="progressbar" aria-label="Download Progress" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
					<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${progress}%;">${progress}%</div>
				</div>`
			});
		}
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

	// Sets the Update Log Frame to open after an update.
	ipcRenderer.on('open-update-log', (e) => {
		localStorage.removeItem(`skipVersion`);

		if (!getConfigs().openUpdateLog) {
			localStorage.setItem(`openUpdateLog`, true);
		}
	});

	// Sends the request to the main process
	let config = getConfigs();
	if (config.checkForUpdates) {
		ipcRenderer.send('check-for-updates', config);
	}
}

function initEventListeners() {
	document.addEventListener('click', (e) => {
		// CHECK FOR UPDATES
		if (e.target.closest(`#check-for-updates`)) {
			Swal.fire({
				title: `Include skipped versions?`,
				showDenyButton: true,
				confirmButtonText: `Yes`,
				denyButtonText: `No`,
			}).then((result) => {
				if (result.isConfirmed) {
					sessionStorage.setItem('skipSkippedVer', true);
				}

				console.log(`Checking for updates...`, getConfigs());
				ipcRenderer.send('check-for-updates', getConfigs(), true);
			});
		}
		// CHANGELOG
		else if (e.target.closest(`#check-version-changes`)) {
			fetch("resources/modules/the-hub/assets/changelog.json").then((res) => {
				return res.json();
			}).then((data) => {
				const changelogTypes = ["added", "updated", "removed"],
					changelogBullets = ["🟢", "🟡", "🔴"];

				let changelog = {
					added: null,
					updated: null,
					removed: null
				},
					navContent = `<div class="col-12 col-lg-2 d-flex flex-column position-relative">`,
					content = `<div class="col-12 col-lg-10" data-bs-spy="scroll" data-bs-target="#vcNavContent" tabindex="0" id="vcContent">`,
					versions = [];

				for (let c of data.changelogs) {
					c.date = new Date(c.date).toLocaleString("default", {
						month: "short",
						day: "2-digit",
						year: "numeric",
					});

					changelogTypes.forEach((type, index) => {
						if (c.changelog[type] instanceof Array) {
							changelog[type] = c.changelog[type].map((item) => {
								return `${changelogBullets[index]} ${item}`;
							}).join("\n\n");
						}
					});

					versions.push(c.version.replaceAll(".", "_"));

					content += `
					<div class="card floating-header my-5 fs-6">
						<div class="card-header border rounded d-flex flex-row align-items-center bg-body-tertiary" id="${c.version.replaceAll(".", "_")}">
							${c["pre-release"] ? `<small class="me-3 d-flex flex-row align-items-center"><span class="badge rounded-pill bg-info text-dark">Pre-release</span></small>` : ``}
							<h3 class="my-0">${c.version}</h3>
						</div>

						<div class="card-body text-start pt-5">
							<div class="card-text d-flex flex-row mb-2">
								<h4 class="my-auto me-2">${c.date}</h4>
								<hr class="w-auto flex-grow-1">
							</div>

							${md().render(c.description)}
							<br>

							<div class="card-text d-flex flex-row mb-2">
								<h4 class="my-auto me-2">Changelog</h4>
								<hr class="w-auto flex-grow-1">
							</div>

							<div class="container-fluid">
								${changelog.added ? `<h5 class="mt-2 mb-3">Added</h5>${md().render(changelog.added).replaceAll(/(\<p)(>)/g, "$1 class=\"my-0\"$2")}` : ``}
								${changelog.updated ? `<h5 class="mt-2 mb-3">Updated</h5>${md().render(changelog.updated).replaceAll(/(\<p)(>)/g, "$1 class=\"my-0\"$2")}` : ``}
								${changelog.removed ? `<h5 class="mt-2 mb-3">Removed</h5>${md().render(changelog.removed).replaceAll(/(\<p)(>)/g, "$1 class=\"my-0\"$2")}` : ``}
							</div>
						</div>

						<div class="card-footer text-end">
							<a href="${c.download}" class="btn btn-secondary" data-open-external>Release Page</a>
							<a href="#top-vc" class="btn btn-primary d-inline-block d-lg-none">Back to Top</a>
						</div>
					</div>
					`;
				}

				navContent += `
				<nav class="border border-light rounded bg-body-tertiary sticky-top posabs-vertical-middle mx-3 mt-4 p-3" id="vcNavContent">
				`;
				versions.forEach((v) => {navContent += `<a href="#${v}" class="btn btn-dark w-lg-100 mx-2 mx-lg-auto my-1">${v.replaceAll("_", ".")}</a>`;});
				navContent += `
				</nav>
				`;

				Swal.fire({
					title: `<span id="top-vc">Version Changes</span>`,
					html: `<div class="d-flex flex-column flex-lg-row">${navContent}</div>	${content.replaceAll(/(\<a.+".+")(\>)/gi, "$1 data-open-external$2")}</div></div>`,
					showDenyButton: false,
					confirmButtonText: `Close`,
					width: `75%`
				});

				bootstrap.ScrollSpy.getOrCreateInstance(`#vcContent`);
			});

		}
	});
}

function initOpenExternal() {
	document.addEventListener(`click`, (e) => {
		if (e.target.closest(`a[data-open-external]`)) {
			e.preventDefault();

			let event = new CustomEvent(`open-external`, {
				detail: {url: e.target.href}
			});

			window.dispatchEvent(event);
		}
	});
}

function openExternal(e) {
	let url = e.detail.url;
	Swal.fire({
		title: `You are opening an external link`,
		text: `Are you sure you want to proceed?`,
		icon: `warning`,
		showDenyButton: true,
		confirmButtonText: `Yes`,
		denyButtonText: `No`,
	}).then((result) => {
		if (result.isConfirmed) {
			shell.openExternal(url);
		}
	});
}
window.addEventListener('open-external', openExternal);

function runTutorial() {
	window.dispatchEvent(new CustomEvent('run-tutorial', {
		detail: {
			steps: tutorial.stepsDir,
			options: {
				arrowBtns: false,
				arrow: {
					left: `Prev`,
					right: `Next`,
				},
				includePrev: false,
				callbacks: {
					start: null,
					end: () => {
						updateCheck();
					}
				}
			}
		}
	}));
}
