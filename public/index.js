const { app, BrowserWindow } = require('electron');

if (handleSquirrelEvent(app)) {
	// Run `npm i electron-winstaller` on the project root to install this required module
	return;
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

function handleSquirrelEvent(application) {
	if (process.argv.length === 1) {
		return false;
	}

	const childProcess = require('child_process');
	const path = require('path');

	const appFolder = path.resolve(process.execPath, '../..');
	const rootAtomFolder = path.resolve(appFolder, '../..');
	const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
	const exeName = path.basename(process.execPath);

	const spawn = function(command, args) {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, {
                detached: true
            });
        } catch (error) {}

        return spawnedProcess;
    };

	const spawnUpdate = function(args) {
		return spawn(updateDotExe, args);
	}

	const squirrelEvent = process.argv[1];
	switch (squirrelEvent) {
		case '--squirrel-install':
		case '--squirrel-updated':
			spawnUpdate(['--createShortcut', exeName]);
			setTimeout(application.quit, 1000);
			return true;
		
		case '--squirrel-uninstall':
			spawnUpdate(['--removeShortcut', exeName]);
			setTimeout(application.quit, 1000);
			return true;
		
		case '--squirrel-obsolete':
			application.quit();
			return true;
	}
}