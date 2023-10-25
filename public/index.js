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
		icon: path.join(__dirname, '../resources/favicon.png'),
		webPreferences: {
			enableRemoteModule: true,
			contextIsolation: false,
			nodeIntegration: true,
		},
	});

	remote.enable(win.webContents);
	win.loadFile('public/index.html');

	// Auto Updater
	win.once('ready-to-show', () => {
		autoUpdater.checkForUpdatesAndNotify();
	});
};

app.whenReady().then(() => {
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

// Auto Updater
ipcMain.on('app_version', (e) => {
	e.sender.send('app_version', {
		version: app.getVersion()
	});
});

ipcMain.on('restart_app', () => {
	autoUpdater.quitAndInstall();
});

autoUpdater.on('update-available', () => {
	win.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
	win.webContents.send('update_downloaded');
});