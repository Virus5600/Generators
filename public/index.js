const { app, BrowserWindow, nativeImage} = require('electron');
const path = require('path');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 650,
		height: 1250,
		frame: true,
		icon: path.join(__dirname, '../resources/favicon.ico'),
	});

	win.loadFile('public/String Generator/index.html');
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