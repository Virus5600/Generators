let importMod = () => {
	return import("./Tutorial.js");
};

importMod().then((mod) => {
	window.Tutorial = mod.default;
});
