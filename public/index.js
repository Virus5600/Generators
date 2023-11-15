const { app, BrowserWindow, ipcMain, session } = require('electron');
const remote = require('@electron/remote/main');
const { autoUpdater } = require('electron-updater');
const path = require('path');
Swal = require('sweetalert2');

remote.initialize();

try {
	require('electron-reloader')(module);
} catch (_) {}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 650,
		height: 1250,
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
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();

			// Auto Updater - Checks for update every time the app is opened.
			// Currently at pre-release so this is always on
			autoUpdater.allowPrerelease = true;

			autoUpdater.on('update-available', (e) => {
				console.log('update-available', e);
				win.webContents.send('update-available', e);
			});

			autoUpdater.on('update-downloaded', () => {
				console.log('update-downloaded');
				win.webContents.send('update_downloaded');
			});

			autoUpdater.on('error', (e) => {
				console.log('update-error', e);
				win.webContents.send('update-error', e);
			});

			autoUpdater.on('download-progress', (e) => {
				console.log('update-progress', e);
				win.webContents.send('update-progress', e);
			});

			ipcMain.on('restart_app', () => {
				autoUpdater.quitAndInstall();
			});

			autoUpdater.checkForUpdates();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// Auto Updater
ipcMain.on('app_version', (e) => {
	e.sender.send('app_version', {
		version: app.getVersion()
	});
});
