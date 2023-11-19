let importMod = () => {
	return import("./dragcheck.mod.js");
};

importMod().then((mod) => {
	window.Dragcheck = mod.default;
});
