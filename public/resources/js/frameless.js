const remote = require('@electron/remote');
const win = remote.getCurrentWindow();
const winContent = remote.getCurrentWebContents();
let initialized = false;

document.readyState === 'complete' ? init() : initialized ? null : window.addEventListener('load', init);

function init() {
	initialized = true;

	prependTitleBar();

	const minimizeButton = document.querySelector('button#min-btn');
	const maximizeButton = document.querySelector('button#max-btn');
	const closeButton = document.querySelector('button#close-btn');

	let isMaximized = win.isMaximized();
	
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
	
	window.onbeforeunload = (e) => {
		win.removeAllListeners();
		// Add an emitter remover
	}

	function toggleMaximizeButton(isMax) {
		if (isMax) {
			maximizeButton.querySelector('svg').classList.remove('fa-window-maximize');
			maximizeButton.querySelector('svg').classList.add('fa-window-restore');
			win.maximize();
		}
		else {
			maximizeButton.querySelector('svg').classList.remove('fa-window-restore');
			maximizeButton.querySelector('svg').classList.add('fa-window-maximize');
			win.unmaximize();
		}
	}
}

function prependTitleBar() {
	const favicon = document.querySelector(`link[rel=icon]`).dataset['alt'];
	const title = document.querySelector(`head > title`).innerText;

	const titleBar = `
	<div id="title-bar">
		<div id="title">
			<img src="${favicon}" alt="Generator">
			<span>${title}</span>
		</div>

		<div id="title-bar-btns">
			<button id="min-btn">
				<i class="fas fa-window-minimize"></i>
			</button>
				
			<button id="max-btn">
				<i class="fas fa-window-${win.isMaximized() ? "restore" : "maximize"}"></i>
			</button>
			
			<button id="close-btn">
				<i class="fa fa-x"></i>
			</button>
		</div>
	</div>
	`;

	let goBackMeta = document.querySelector(`meta[name="go-back"]`);
	let goBackURI = goBackMeta ? goBackMeta.content : undefined;
	let goBackTitle = goBackMeta ? goBackMeta.title : "Go Back";
	let goBack = ``;
	if (goBackURI) {
		goBack = `
			<h3 class="mx-3 my-2">
				<a href="${goBackURI}" class="text-decoration-none">
					<i class="fas fa-chevron-left mr-2"></i> ${goBackTitle}
				</a>
			</h3>
		`;
	}

	const body = document.querySelector(`body`);
	body.insertAdjacentHTML('afterbegin', goBack);
	body.insertAdjacentHTML('afterbegin', titleBar);
	win.setIcon(__dirname + favicon);
}