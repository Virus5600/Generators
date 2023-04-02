const { app, BrowserWindow } = require('electron');
const remote = require('@electron/remote/main');
const path = require('path');

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