const { app, BrowserWindow, ipcMain, session } = require('electron');
const remote = require('@electron/remote/main');
const { autoUpdater } = require('electron-updater');
const path = require('path');

remote.initialize();

try {
	require('electron-reloader')(module);
} catch (_) {}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 650,
		height: 1250,
		minWidth: 650,
		minHeight: 650,
		frame: false,
		icon: 'icon.ico',
		webPreferences: {
			enableRemoteModule: true,
			contextIsolation: false,
			nodeIntegration: true,
		},
	});

	remote.enable(win.webContents);
	win.loadFile('public/index.html');
};

app.whenReady().then(() => {
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
	ipcMain.on('check-for-updates', (event, config) => {
		// Currently at pre-release so this is always on
		autoUpdater.allowPrerelease = config.allowPrerelease;
		autoUpdater.autoDownload = config.autoDownload;

		autoUpdater.on('checking-for-update', () => {
			console.log('checking-for-update');
			win.webContents.send('checking-for-update');
		});

		autoUpdater.on('update-available', (e) => {
			console.log('update-available');
			win.webContents.send('update-available', e);
		});

		autoUpdater.on('update-not-available', (e) => {
			console.log('update-not-available');
			win.webContents.send('update-not-available', e);
		});

		autoUpdater.on('error', (e) => {
			console.log('update-error', e);
			win.webContents.send('update-error', e);
		});

		autoUpdater.on('update-downloaded', () => {
			console.log('update-downloaded');
			win.webContents.send('update-downloaded');
		});

		autoUpdater.on('download-progress', (e) => {
			console.log('update-progress', e);
			win.webContents.send('update-progress', e);
		});

		ipcMain.on('restart-app', () => {
			autoUpdater.quitAndInstall();
		});

		autoUpdater.checkForUpdates();
		e.sender.send('update-check-started');
	});
}
