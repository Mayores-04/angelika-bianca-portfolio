"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var gsap_1 = require("gsap");
function ProjectDetailModal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, project = _a.project;
    var overlayRef = react_1.useRef(null);
    var cardRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!isOpen || !overlayRef.current || !cardRef.current)
            return;
        // Fade in overlay
        gsap_1["default"].from(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
        // Scale + slide up the card
        gsap_1["default"].from(cardRef.current, {
            y: 40,
            scale: 0.95,
            opacity: 0,
            duration: 0.45,
            ease: "back.out(1.4)"
        });
    }, [isOpen]);
    if (!isOpen || !project)
        return null;
    return (React.createElement("div", { ref: overlayRef, className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" },
        React.createElement("div", { ref: cardRef, className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" },
            React.createElement("div", { className: "sticky top-0 flex items-center justify-between p-6 border-b border-gray-100 bg-white rounded-t-2xl" },
                React.createElement("h2", { className: "text-2xl font-semibold text-black" }, project.title),
                React.createElement("button", { onClick: onClose, className: "p-2 hover:bg-gray-100 rounded-lg transition-colors", "aria-label": "Close" },
                    React.createElement(lucide_react_1.X, { size: 24, className: "text-gray-600" }))),
            React.createElement("div", { className: "p-6" },
                React.createElement("div", { className: "mb-6 rounded-xl overflow-hidden bg-gray-100 h-96" },
                    React.createElement(image_1["default"], { src: project.image, alt: project.title, width: 600, height: 400, className: "w-full h-full object-cover" })),
                React.createElement("div", { className: "space-y-4" },
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold" }, "Category"),
                        React.createElement("p", { className: "text-sm text-gray-700 mt-1" }, project.category)),
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold" }, "Description"),
                        React.createElement("p", { className: "text-sm text-gray-700 mt-1" }, project.desc)),
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold" }, "Tools"),
                        React.createElement("p", { className: "text-sm text-gray-700 mt-1" }, "Canva, Photoshop"))),
                React.createElement("div", { className: "mt-6 flex gap-3" },
                    React.createElement("button", { onClick: onClose, className: "flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium" }, "Close"),
                    React.createElement(link_1["default"], { href: "/Contact", className: "flex-1 text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium" }, "Contact Now"))))));
}
exports["default"] = ProjectDetailModal;
