let mobileIcons = document.querySelector(".mobile-icons");
let iconClose = document.querySelector(".mobile-icons--close");
let nav = document.querySelector(".navigation__nav");
let mobileNav = document.querySelector("#mobileNav");
let body = document.querySelector(".body");
let header = document.querySelector(".header");
let layoutBreakpoint = 905;
let iconOpen = "mobile-icons--open";
let navOpen = "navigation__nav--open";
let bodyNavOpen = "body--open-nav";
let navMobile = "navigation--mobile";

//function counting header height

export const vhUnit = () => {
	document.documentElement.style.setProperty(
		"--headerHeight",
		`${header.getBoundingClientRect().height}px`
	);
};

//action for hamburger click

export const navToggle = () => {
	mobileIcons.addEventListener("click", () => {
		mobileIcons.classList.toggle(iconOpen);
		body.classList.toggle(bodyNavOpen);
		nav.classList.toggle(navOpen);
		mobileNav.classList.toggle(navMobile);
	});
};

//tracking resize event

export const headerOnResize = (e) => {
	if (e.currentTarget.innerWidth > layoutBreakpoint) {
		mobileIcons.classList.remove(iconOpen);
		body.classList.remove(bodyNavOpen);
		nav.classList.remove(navOpen);
		mobileNav.classList.remove(navMobile);
	}
};
