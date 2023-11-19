let importMod = () => {
	return import("./Validator.js");
};

importMod().then((mod) => {
	window.Validator = mod.default;
});
