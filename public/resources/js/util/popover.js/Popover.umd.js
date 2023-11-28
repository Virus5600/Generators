let importMod = () => {
	return import("./Popover.js");
};

importMod().then((mod) => {
	window.Popover = mod.default;
});
