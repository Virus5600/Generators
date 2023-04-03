const { ipcRenderer } = require('electron');

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
	ipcRenderer.removeAllListeners('app_version');
});

ipcRenderer.on('update_available', () => {
	ipcRenderer.removeAllListeners('update_available');
	Swal.fire({
		title: 'Update Available',
		text: 'A new update is available. Do you want to update now?',
		iconColor: `#3fc3ee`,
		iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-download fa-stack-1x text-white"></i></span>`,
		showConfirmButton: true,
		confirmButtonText: 'Update',
	}).then((result) => {
		if (result.isConfirmed)
			Swal.close();
	});
});

ipcRenderer.on('update_downloaded', () => {
	ipcRenderer.removeAllListeners('update_downloaded');
	Swal.fire({
		title: 'Update Downloaded',
		text: 'Restart the application to apply the updates.',
		iconColor: `#3fc3ee`,
		iconHtml: `<span class="fa-stack fa-1x"><i class="fas fa-circle fa-stack-2x swal2-info"></i><i class="fas fa-check-to-slot fa-stack-1x text-white"></i></span>`,
		showConfirmButton: true,
		confirmButtonText: 'Restart',
	}).then((result) => {
		if (result.isConfirmed)
			ipcRenderer.send('restart_app');
	});
});