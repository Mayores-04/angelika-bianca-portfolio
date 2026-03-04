"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var AnimatedSeparator_1 = require("../components/AnimatedSeparator");
var lucide_react_1 = require("lucide-react");
var Separator_1 = require("../components/Separator");
var useGsapAnimation_1 = require("../hooks/useGsapAnimation");
function AboutPage() {
    var containerRef = useGsapAnimation_1.useGsapAnimation();
    return (React.createElement("div", { ref: containerRef, className: "bg-white text-gray-800" },
        React.createElement("main", { className: "max-w-7xl mx-auto px-4 sm:px-6" },
            React.createElement("section", { className: "pt-12 pb-8" },
                React.createElement("div", { className: "max-w-2xl mx-auto" },
                    React.createElement("h1", { "data-animate": "fade-up", className: "text-3xl font-semibold text-center text-black" }, "About Me"),
                    React.createElement("p", { "data-animate": "fade-up", className: "text-center text-sm text-gray-600 mt-2" }, "Get to know the creative mind behind the designs")),
                React.createElement("div", { className: "mt-8 bg-gray-100 rounded-lg py-12 px-6 " },
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full mx-auto" },
                        React.createElement("div", { "data-animate": "fade-left", className: "flex justify-center" },
                            React.createElement("div", { className: "relative w-80 h-90" },
                                React.createElement("div", { className: "absolute left-[-55] top-15 w-60 h-72 rounded-2xl overflow-hidden z-0 " },
                                    React.createElement(image_1["default"], { src: "/images/AboutMePic.png", alt: "Angelika Bianca L. Upao", fill: true, className: "object-contain", priority: true })),
                                React.createElement("div", { className: "absolute left-34 top-0 w-60 h-76 rounded-2xl overflow-hidden z-10" },
                                    React.createElement(image_1["default"], { src: "/images/AboutMePic.png", alt: "Angelika Bianca L. Upao", fill: true, className: "object-contain", priority: true })))),
                        React.createElement("div", { "data-animate": "fade-right" },
                            React.createElement("h2", { className: "text-xl font-semibold text-black" }, "Angelika Bianca L. Upao"),
                            React.createElement("p", { className: "mt-4 text-sm text-gray-700" }, "Hi there! I'm Angelika Bianca, a creative designer and aspiring entrepreneur with a passion for transforming ideas into beautiful, meaningful designs."),
                            React.createElement("p", { className: "mt-4 text-sm text-gray-700" }, "As a student and business owner, I've discovered the perfect blend of learning and creating. My journey in design started with a simple love for colors, shapes, and the power of visual storytelling. Today, I run Uniquely Made FLEXHIVE Edits, where I help individuals and businesses bring their visions to life."),
                            React.createElement("p", { className: "mt-4 text-sm text-gray-700" }, "Whether it's crafting the perfect logo, designing eye-catching social media graphics, or creating personalized invitations, I approach each project with creativity, dedication, and attention to detail."),
                            React.createElement("p", { className: "mt-4 text-sm text-gray-700 font-semibold" }, "My motto is simple: YOUR PARTNER IN SMART AND CREATIVE SOLUTIONS."))))),
            React.createElement(AnimatedSeparator_1["default"], { className: "mt-12" }),
            React.createElement("section", { className: "mt-8 py-12" },
                React.createElement("div", { className: "max-w-2xl mx-auto" },
                    React.createElement("h3", { className: "text-2xl font-semibold text-center text-black" }, "My Values"),
                    React.createElement("p", { className: "text-center text-sm text-gray-600 mt-2" }, "Principles that guide my creative work")),
                React.createElement("div", { "data-animate-stagger": true, className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
                    React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100" },
                        React.createElement("div", { className: "flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full" },
                            React.createElement(lucide_react_1.Star, { size: 20, className: "text-gray-800" })),
                        React.createElement("h4", { className: "mt-4 font-semibold text-black" }, "Creativity"),
                        React.createElement("p", { className: "mt-2 text-xs text-gray-600" }, "Bringing unique and innovative ideas to every project")),
                    React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100" },
                        React.createElement("div", { className: "flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full" },
                            React.createElement(lucide_react_1.Heart, { size: 20, className: "text-gray-800" })),
                        React.createElement("h4", { className: "mt-4 font-semibold text-black" }, "Passion"),
                        React.createElement("p", { className: "mt-2 text-xs text-gray-600" }, "Loving what I do and putting heart into every design")),
                    React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100" },
                        React.createElement("div", { className: "flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full" },
                            React.createElement(lucide_react_1.Award, { size: 20, className: "text-gray-800" })),
                        React.createElement("h4", { className: "mt-4 font-semibold text-black" }, "Excellence"),
                        React.createElement("p", { className: "mt-2 text-xs text-gray-600" }, "Committed to delivering high-quality work every time")),
                    React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100" },
                        React.createElement("div", { className: "flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full" },
                            React.createElement(lucide_react_1.Zap, { size: 20, className: "text-gray-800" })),
                        React.createElement("h4", { className: "mt-4 font-semibold text-black" }, "Innovation"),
                        React.createElement("p", { className: "mt-2 text-xs text-gray-600" }, "Always exploring new techniques and creative solutions")))),
            React.createElement("section", { className: "py-12" },
                React.createElement("div", { className: "max-w-2xl mx-auto" },
                    React.createElement("h3", { className: "text-2xl font-semibold text-center text-black" }, "My Journey"),
                    React.createElement("p", { className: "text-center text-sm text-gray-600 mt-2" }, "A brief look at how my passion turned into purpose")),
                React.createElement("div", { "data-animate": "fade-up", className: "mt-8 max-w-3xl mx-auto bg-white border border-gray-100 rounded-xl p-8 shadow-sm" },
                    React.createElement("p", { className: "text-sm text-gray-700" }, "My design journey began as a creative exploration during my student years. What started as a hobby quickly evolved into a passion and eventually into a thriving business."),
                    React.createElement("p", { className: "mt-4 text-sm text-gray-700" }, "Through Uniquely Made FLEXHIVE Edits, I've had the privilege of working with clients to create custom designs that help them celebrate special moments, build their brands, and express their unique identities."),
                    React.createElement("p", { className: "mt-4 text-sm text-gray-700" }, "Every project is an opportunity to learn, grow, and push creative boundaries. I'm constantly exploring new design trends, techniques, and tools to ensure my work remains fresh, innovative, and aligned with my clients' visions."),
                    React.createElement("p", { className: "mt-6 text-center font-semibold" }, "Let's create something amazing together!")))),
        React.createElement(Separator_1["default"], { className: "mt-12" })));
}
exports["default"] = AboutPage;
