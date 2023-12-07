const { default: Tutorial } = require("./util/tutorial.js/Tutorial");

// jQuery
require("./libs/jQuery");

// Bootstrap 5
require("./libs/bootstrap");

// Sweet Alert 2
require("./libs/swal");

// Fontawesome 5
require("./libs/fontawesome");

window.addEventListener("run-tutorial", (e) => {
	Tutorial.start(e.detail.steps);
});
