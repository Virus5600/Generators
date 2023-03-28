const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) {
	app.quit();
}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 650,
		height: 1250,
		frame: true,
		icon: 'assets/favicon.ico',
	});

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