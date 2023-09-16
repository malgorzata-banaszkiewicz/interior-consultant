import { navToggle, headerOnResize, vhUnit } from "../__modules/header";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded() {
		navToggle();
		vhUnit();
	},
	resized(e) {
		headerOnResize(e);
		vhUnit();
	},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
