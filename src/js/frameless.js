const remote = require('@electron/remote');
const win = remote.getCurrentWindow();
let initialized = false;

document.readyState === 'complete' ? init() : initialized ? null : window.addEventListener('load', init);

function init() {
	initialized = true;
	const minimizeButton = document.querySelector('button#min-btn');
	const maximizeButton = document.querySelector('button#max-btn');
	const closeButton = document.querySelector('button#close-btn');

	win.removeAllListeners();
	
	let isMaximized = false;
	
	closeButton.addEventListener('click', () => win.close());
	minimizeButton.addEventListener('click', () => win.minimize());
	maximizeButton.addEventListener('click', () => {
		isMaximized = !isMaximized;
		toggleMaximizeButton(isMaximized);
	});
	
	win.on('unmaximize', () => {
		isMaximized = false;
		toggleMaximizeButton(isMaximized);
	});
	
	win.on('maximize', () => {
		isMaximized = true;
		toggleMaximizeButton(isMaximized);
	});

	function toggleMaximizeButton(isMax) {
		if (isMax) {
			maximizeButton.querySelector('i').classList.remove('fa-window-maximize');
			maximizeButton.querySelector('i').classList.add('fa-window-restore');
			win.maximize();
		}
		else {
			maximizeButton.querySelector('i').classList.remove('fa-window-restore');
			maximizeButton.querySelector('i').classList.add('fa-window-maximize');
			win.unmaximize();
		}
	}
}