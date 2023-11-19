if (Swal) {
	let importMod = () => {
		return import("./swal-flash.mod.js");
	};

	importMod().then((mod) => {
		window.SwalFlash = mod.default;
	});
}
else {
	throw Error('Sweetalert2 not instantiated. Please include the said library (https://sweetalert2.github.io/). Currently testing for `Swal` keyword.');
}
