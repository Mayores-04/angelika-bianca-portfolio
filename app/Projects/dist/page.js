"use client";
"use strict";
exports.__esModule = true;
var Separator_1 = require("../components/Separator");
var ProjectDetailModal_1 = require("../components/ProjectDetailModal");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var useGsapAnimation_1 = require("../hooks/useGsapAnimation");
var react_1 = require("react");
function ProjectsPage() {
    var containerRef = useGsapAnimation_1.useGsapAnimation();
    // Collections of images discovered in public/images
    var imagesByCategory = {
        "Social Media": [
            "/images/SocialMediaGraphics/CentellaCleanser.png",
            "/images/SocialMediaGraphics/CentellaCleanser1.png",
            "/images/SocialMediaGraphics/CentellaCleanser2.png",
            "/images/SocialMediaGraphics/CookingSpoon.png",
            "/images/SocialMediaGraphics/CookingSpoon1.png",
            "/images/SocialMediaGraphics/GlossMatte.png",
            "/images/SocialMediaGraphics/GlossMatte1.PNG",
            "/images/SocialMediaGraphics/KeratinSakura.png",
            "/images/SocialMediaGraphics/KeratinSakura1.png",
            "/images/SocialMediaGraphics/Peeling lotion Instant White.PNG",
            "/images/SocialMediaGraphics/Peeling lotion Instant White1.PNG",
            "/images/SocialMediaGraphics/Velvet Drip.png",
            "/images/SocialMediaGraphics/Velvet Drip1.png",
        ],
        Flyer: [
            "/images/LayoutDesigns/Flyer/Salazar_Flyer.png",
        ],
        "Uniquely Made": [
            "/images/UM/Medal/MEDAL.png",
            "/images/UM/Medal/MEDAL1.png",
        ],
        Branding: [
            "/images/Branding/Logo/Movie Munch .png",
        ]
    };
    // Helper function to extract readable title from image path
    var getTitleFromImage = function (imagePath) {
        var filename = imagePath.split("/").pop() || "";
        return filename
            .replace(/\.[^/.]+$/, "") // Remove extension
            .replace(/_/g, " ") // Replace underscores with spaces
            .replace(/(\d+)$/, "") // Remove trailing numbers
            .trim();
    };
    // Generate allItems dynamically from images
    var allItems = Object.entries(imagesByCategory)
        .flatMap(function (_a) {
        var category = _a[0], images = _a[1];
        return images.map(function (image, index) { return ({
            id: Math.random(),
            category: category,
            title: getTitleFromImage(image),
            desc: "Description placeholder",
            image: image
        }); });
    });
    var _a = react_1.useState(false), showAll = _a[0], setShowAll = _a[1];
    var _b = react_1.useState(null), selectedProject = _b[0], setSelectedProject = _b[1];
    var _c = react_1.useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var items = showAll ? allItems : allItems.slice(0, 6);
    return (React.createElement("main", { ref: containerRef, className: "min-h-screen bg-white text-gray-800" },
        React.createElement("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-12" },
            React.createElement("h1", { "data-animate": "fade-up", className: "text-3xl font-semibold text-center text-black" }, "My Designs"),
            React.createElement("p", { "data-animate": "fade-up", className: "text-center text-sm text-gray-600 mt-2" }, "A showcase of my creative work and design projects"),
            React.createElement("div", { "data-animate-stagger": true, className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, items.map(function (item) { return (React.createElement("article", { key: item.id, className: "bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm" },
                React.createElement("div", { className: "relative group" },
                    React.createElement("div", { className: "h-48 bg-gray-200 w-full flex items-center justify-center overflow-hidden rounded-t-xl" },
                        React.createElement(image_1["default"], { src: item.image, alt: item.title + " preview", width: 400, height: 240, className: "object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" })),
                    React.createElement("div", { className: "absolute inset-0 flex items-center justify-center  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-t-xl" },
                        React.createElement("button", { onClick: function () {
                                setSelectedProject(item);
                                setIsModalOpen(true);
                            }, className: "opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100" },
                            React.createElement(lucide_react_1.Eye, { size: 16, className: "mr-2" }),
                            " View Details"))),
                React.createElement("div", { className: "p-4" },
                    React.createElement("div", { className: "flex items-center justify-between text-xs text-gray-500" },
                        React.createElement("span", null, item.category),
                        React.createElement("span", null, "Canva, Photoshop")),
                    React.createElement("h3", { className: "mt-2 text-sm font-semibold text-black" }, item.title),
                    React.createElement("p", { className: "mt-2 text-xs text-gray-600" }, item.desc)))); })),
            React.createElement("div", { className: "mt-8 text-center" }, !showAll && allItems.length > 6 && (React.createElement("button", { onClick: function () { return setShowAll(true); }, className: "inline-block px-6 py-2 rounded-md bg-gray-800 text-white" }, "View More")))),
        React.createElement(Separator_1["default"], { className: "mt-12" }),
        React.createElement(ProjectDetailModal_1["default"], { isOpen: isModalOpen, onClose: function () { return setIsModalOpen(false); }, project: selectedProject })));
}
exports["default"] = ProjectsPage;
