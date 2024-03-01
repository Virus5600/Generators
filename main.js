const fs = require('fs');
const crypto = require('crypto');
const { app, BrowserWindow, ipcMain, session } = require('electron');
const remote = require('@electron/remote/main');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const log = require('electron-log');

remote.initialize();

try {
	require('electron-reloader')(module);

	// For Development Purposes
	// Object.defineProperty(app, 'isPackaged', {
	// 	get: () => {
	// 		return true;
	// 	}
	// });
} catch (_) {}

var orig_win;
const createWindow = () => {
	const win = orig_win = new BrowserWindow({
		width: 650,
		height: 1250,
		minWidth: 650,
		minHeight: 650,
		frame: false,
		icon: 'icon.ico',
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			plugins: true,
			enableRemoteModule: true,
			contextIsolation: false,
			nodeIntegration: true,
			scrollBounce: true,
		},
	});

	remote.enable(win.webContents);
	win.loadFile('public/index.html');
};

// Menu.setApplicationMenu(null);

app.whenReady().then(() => {
	// Generates a random nonce for CSP
	global.rndCryptNnc = crypto.randomBytes(32).toString('base64');

	const fnCb = (details, callback, from) => {
		// Check if the app is at DTRG
		let url = details.url;
		url = url.substring(url.indexOf("public") + "public/".length)
			.replace(/%20/g, " ")
			.replace(/\.html/g, "")
			.replace(/(\/?)index/g, "$1");
		url = url.length == 0 ? "/" : url;

		let isInDTRTG = url.match(/DTR[\s-]?Template[\s-]?Generator/gi) !== null;

		const CSP = `default-src 'self' 'unsafe-inline'; img-src 'self' data: *; script-src 'self' ${isInDTRTG ? `'unsafe-eval'` : `'nonce-${global.rndCryptNnc}'`};`

		if (!app.isPackaged) {
			console.log(`==================================== ${from}`)
			console.log(`URL: ${url}\n`);
			console.log(Object.assign({'Content-Security-Policy': [CSP]}, details.responseHeaders));
			console.log("------------------------------------")
			console.log(details);
			console.log(`====================================\n`)
		}

		callback({
			responseHeaders: Object.assign({
				'Content-Security-Policy': [CSP],
			}, details.responseHeaders)
		});
	}

	// Sets the CSP
	session
		.defaultSession
		.webRequest
		.onHeadersReceived((d, c) => fnCb(d, c, "onHeadersReceived"));

	initUpdater();
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// Auto Updater - Checks for update every time the app is opened.
function initUpdater() {
	let configInit;

	autoUpdater.setFeedURL({
		provider: "github",
		owner: "Virus5600",
		repo: "Generators",
	});

	ipcMain.on('check-for-updates', (event, ...config) => {
		configInit = config;
		config = config[0];

		// Currently at pre-release so this is always on
		autoUpdater.allowPrerelease = config.allowPrerelease;
		autoUpdater.autoDownload = config.autoDownload;

		autoUpdater.checkForUpdates();
		event.sender.send('update-check-started');
	});

	autoUpdater.on('error', (e) => {
		console.log('update-error', e);
		log.error(e);

		let isManual = configInit[1] ?? false;
		orig_win.webContents.send('update-error', e, isManual);
	});

	autoUpdater.on('checking-for-update', () => {
		console.log('checking-for-update');
		log.info('Checking for update');

		orig_win.webContents.send('checking-for-update');
	});

	autoUpdater.on('update-available', (e) => {
		console.log('update-available');
		log.info('Update available');

		let isManual = configInit[1] ?? false;
		orig_win.webContents.send('update-available', [e, isManual]);
	});

	autoUpdater.on('update-not-available', () => {
		console.log('update-not-available');
		log.info('Update not available');

		let isManual = configInit[1] ?? false;
		console.log(isManual);
		orig_win.webContents.send('update-not-available', isManual);
	});

	autoUpdater.on('download-progress', (e) => {
		console.log('download-progress', e);
		log.info('Download progress', e);

		orig_win.webContents.send('download-progress', e);
	});

	autoUpdater.on('update-downloaded', () => {
		console.log('update-downloaded');
		log.info('Update downloaded');

		orig_win.webContents.send('update-downloaded');
	});

	ipcMain.on('download-update', () => {
		log.info('Downloading update');
		autoUpdater.downloadUpdate();
	});

	ipcMain.on('restart-app', () => {
		log.info('Restarting app to install updates');
		orig_win.webContents.send('open-update-log');
		autoUpdater.quitAndInstall();
	});

}

ipcMain.on(`isPackaged`, (event) => {
	event.returnValue = app.isPackaged;
});

ipcMain.on('get-app-version', (event) => {
	event.returnValue = app.getVersion();
});

if (!app.isPackaged) {
	let yaml = '';

	yaml += "provider: github\n"
	yaml += "useMultipleRangeRequest: false\n"
	yaml += "channel: latest\n"
	yaml += "updaterCacheDirName: " + app.getName()

	let update_file = [path.join(process.resourcesPath, 'app-update.yml'), yaml]
	let dev_update_file = [path.join(process.resourcesPath, 'dev-app-update.yml'), yaml]
	let updateFiles = [update_file, dev_update_file]

	for (let file of updateFiles) {
		if (!fs.existsSync(file[0])) {
			fs.writeFileSync(file[0], file[1], () => { })
		}
	}
}

// EXPOSE TO GLOBAL
ipcMain.on('global.rndCryptNnc', (event) => {
	event.returnValue = global.rndCryptNnc;
});

ipcMain.on('global.generateHash', (event, len) => {
	event.returnValue = crypto.randomBytes(len).toString('base64');
});
