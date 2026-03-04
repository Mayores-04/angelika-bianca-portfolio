"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Separator_1 = require("../components/Separator");
var useGsapAnimation_1 = require("../hooks/useGsapAnimation");
var vlogs = [
    {
        title: "Logo Design Process",
        date: "2026-02-01",
        description: "A behind-the-scenes look at how I design a modern business logo, from sketch to final digital version.",
        image: "/image/vlog1.jpg",
        video: "https://www.youtube.com/embed/your-video-id-1"
    },
    {
        title: "Packaging Mockup Creation",
        date: "2026-01-20",
        description: "Watch my workflow for creating custom packaging mockups for a client, including brainstorming and prototyping.",
        image: "/image/vlog2.jpg",
        video: "https://www.youtube.com/embed/your-video-id-2"
    },
    {
        title: "Branding Board Assembly",
        date: "2025-12-15",
        description: "See how I assemble a branding board, select color palettes, and choose typography for a new brand.",
        image: "/image/vlog3.jpg",
        video: "https://www.youtube.com/embed/your-video-id-3"
    },
];
function VlogsPage() {
    var containerRef = useGsapAnimation_1.useGsapAnimation();
    return (React.createElement("div", { ref: containerRef, className: "bg-white w-full" },
        React.createElement("div", { className: "min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 max-w-7xl mx-auto" },
            React.createElement("h1", { "data-animate": "fade-up", className: "text-3xl font-bold text-black mb-2 text-center" }, "Vlogs & Project Progress"),
            React.createElement("p", { "data-animate": "fade-up", className: "text-center text-gray-600 mb-10 max-w-2xl mx-auto" }, "Explore my creative process! Here I share vlogs and progress updates showing how I bring projects to life, from initial ideas to finished designs."),
            React.createElement("div", { "data-animate-stagger": true, className: "grid grid-cols-1 md:grid-cols-2 gap-8" }, vlogs.map(function (vlog, idx) { return (React.createElement("div", { key: idx, className: "bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col" },
                React.createElement("div", { className: "relative w-full h-48 bg-gray-200" },
                    React.createElement(image_1["default"], { src: vlog.image, alt: vlog.title, fill: true, className: "object-cover" })),
                React.createElement("div", { className: "p-6 flex-1 flex flex-col" },
                    React.createElement("h2", { className: "text-xl font-semibold text-black mb-1" }, vlog.title),
                    React.createElement("span", { className: "text-xs text-gray-500 mb-2" }, vlog.date.replace(/-/g, "/")),
                    React.createElement("p", { className: "text-sm text-gray-700 mb-4 flex-1" }, vlog.description),
                    React.createElement("div", { className: "aspect-video w-full rounded-lg overflow-hidden border border-gray-200 bg-black" },
                        React.createElement("iframe", { src: vlog.video, title: vlog.title, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "w-full h-full" }))))); }))),
        React.createElement(Separator_1["default"], { className: "mt-12" })));
}
exports["default"] = VlogsPage;
