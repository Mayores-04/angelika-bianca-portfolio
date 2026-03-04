"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var gsap_1 = require("gsap");
var navItems = [
    { href: "/AboutMe", label: "About Me" },
    { href: "/Projects", label: "Projects" },
    { href: "/Vlogs", label: "Vlogs" },
    { href: "/Contact", label: "Contact" },
    { href: "/Achievements", label: "Achievements" },
];
function Header() {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var pathname = navigation_1.usePathname();
    var headerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!headerRef.current)
            return;
        // Initial slide-down entrance
        gsap_1["default"].from(headerRef.current, {
            y: -60,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });
        // Hide on scroll down, show on scroll up
        var lastScrollY = window.scrollY;
        var ticking = false;
        var handleScroll = function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    var currentScrollY = window.scrollY;
                    var header = headerRef.current;
                    if (!header)
                        return;
                    if (currentScrollY > lastScrollY && currentScrollY > 80) {
                        // Scrolling down — hide
                        gsap_1["default"].to(header, {
                            y: -header.offsetHeight,
                            duration: 0.35,
                            ease: "power2.inOut"
                        });
                    }
                    else {
                        // Scrolling up — show
                        gsap_1["default"].to(header, {
                            y: 0,
                            duration: 0.35,
                            ease: "power2.out"
                        });
                    }
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var isActive = function (href) { return pathname === href; };
    return (react_1["default"].createElement("header", { ref: headerRef, className: "bg-white border-b border-gray-200" },
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6" },
            react_1["default"].createElement("div", { className: "flex items-center justify-between h-16" },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement(link_1["default"], { href: "/", className: "text-black text-2xl font-semibold relative group pb-1" },
                        "Angelika Bianca",
                        react_1["default"].createElement("span", { className: "absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform origin-left duration-300 " + (pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100") }))),
                react_1["default"].createElement("nav", { className: "hidden md:flex space-x-6" }, navItems.map(function (item) { return (react_1["default"].createElement(link_1["default"], { key: item.href, href: item.href, className: "text-sm relative group pb-1 " + (isActive(item.href) ? "text-black font-medium" : "text-gray-700 hover:text-black") },
                    item.label,
                    react_1["default"].createElement("span", { className: "absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform origin-left duration-300 " + (isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100") }))); })),
                react_1["default"].createElement("div", { className: "md:hidden" },
                    react_1["default"].createElement("button", { "aria-label": "Toggle menu", onClick: function () { return setOpen(function (v) { return !v; }); }, className: "inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none" }, open ? (react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))) : (react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }))))))),
        open && (react_1["default"].createElement("div", { className: "md:hidden" },
            react_1["default"].createElement("div", { className: "px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100" }, navItems.map(function (item) { return (react_1["default"].createElement(link_1["default"], { key: item.href, href: item.href, onClick: function () { return setOpen(false); }, className: "block px-3 py-2 rounded-md text-base relative group " + (isActive(item.href) ? "text-black font-medium bg-gray-50" : "text-gray-700 hover:text-black hover:bg-gray-50") },
                item.label,
                react_1["default"].createElement("span", { className: "absolute left-3 bottom-1 w-[calc(100%-1.5rem)] h-0.5 bg-black transition-transform origin-left duration-300 " + (isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100") }))); }))))));
}
exports["default"] = Header;
