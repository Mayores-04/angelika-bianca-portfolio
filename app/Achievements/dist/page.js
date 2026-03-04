"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
var Separator_1 = require("../components/Separator");
var useGsapAnimation_1 = require("../hooks/useGsapAnimation");
var achievements = [
    {
        id: 1,
        title: "Poster Design Winner",
        category: "Graphic Design",
        description: "Won 1st place in a local poster-making contest for creative use of color and typography.",
        date: "August 2025",
        location: "Barangay Art Fair",
        image: "/image/certificate1.jpg",
        issuer: "Barangay Art Council"
    },
    {
        id: 2,
        title: "Logo Design Finalist",
        category: "Branding",
        description: "Selected as a finalist in a university-wide logo design competition.",
        date: "February 2025",
        location: "University Design Week",
        image: "/image/certificate2.jpg",
        issuer: "University Art Club"
    },
    {
        id: 3,
        title: "Certificate of Participation",
        category: "Digital Illustration",
        description: "Participated in an online digital illustration workshop for young graphic designers.",
        date: "November 2024",
        location: "Online Workshop",
        image: "/image/certificate3.jpg",
        issuer: "Creative Youth PH"
    },
];
function AchievementsPage() {
    var containerRef = useGsapAnimation_1.useGsapAnimation();
    return (React.createElement("div", { ref: containerRef, className: "bg-white text-gray-800 min-h-screen" },
        React.createElement("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-12" },
            React.createElement("section", { "data-animate": "fade-up", className: "text-center mb-12" },
                React.createElement("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4" },
                    React.createElement(lucide_react_1.Trophy, { className: "w-8 h-8 text-gray-800" })),
                React.createElement("h1", { className: "text-4xl font-bold text-black" }, "My Achievements"),
                React.createElement("p", { className: "mt-3 text-gray-600 max-w-2xl mx-auto" }, "Simple awards and recognitions I've received as a graphic designer.")),
            React.createElement("section", { "data-animate-stagger": true, className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12" },
                React.createElement("div", { className: "bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200" },
                    React.createElement("div", { className: "text-3xl font-bold text-black" }, "3+"),
                    React.createElement("div", { className: "text-sm text-gray-600 mt-1" }, "Awards Received")),
                React.createElement("div", { className: "bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200" },
                    React.createElement("div", { className: "text-3xl font-bold text-black" }, "5+"),
                    React.createElement("div", { className: "text-sm text-gray-600 mt-1" }, "Certifications")),
                React.createElement("div", { className: "bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200" },
                    React.createElement("div", { className: "text-3xl font-bold text-black" }, "2+"),
                    React.createElement("div", { className: "text-sm text-gray-600 mt-1" }, "Years Experience"))),
            React.createElement("section", { "data-animate-stagger": true, className: "space-y-8" }, achievements.map(function (achievement, index) { return (React.createElement("div", { key: achievement.id, className: "bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0" },
                    React.createElement("div", { className: "relative h-64 lg:h-auto bg-gray-100 " + (index % 2 === 0 ? "lg:order-1" : "lg:order-2") },
                        React.createElement("div", { className: "absolute inset-0 flex items-center justify-center p-8" },
                            React.createElement("div", { className: "relative w-full h-full max-w-md mx-auto" },
                                React.createElement(image_1["default"], { src: achievement.image, alt: achievement.title, fill: true, className: "object-contain", priority: index === 0 }))),
                        React.createElement("div", { className: "absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium" }, achievement.category)),
                    React.createElement("div", { className: "p-8 lg:p-10 flex flex-col justify-center " + (index % 2 === 0 ? "lg:order-2" : "lg:order-1") },
                        React.createElement("div", { className: "flex items-start gap-3 mb-4" },
                            React.createElement("div", { className: "flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mt-1" },
                                React.createElement(lucide_react_1.Award, { className: "w-5 h-5 text-gray-800" })),
                            React.createElement("div", { className: "flex-1" },
                                React.createElement("h2", { className: "text-2xl font-bold text-black leading-tight" }, achievement.title),
                                React.createElement("p", { className: "text-sm text-gray-500 mt-1" }, achievement.issuer))),
                        React.createElement("p", { className: "text-gray-700 leading-relaxed mb-6" }, achievement.description),
                        React.createElement("div", { className: "space-y-3" },
                            React.createElement("div", { className: "flex items-center gap-2 text-sm text-gray-600" },
                                React.createElement(lucide_react_1.Calendar, { className: "w-4 h-4 text-gray-400" }),
                                React.createElement("span", null, achievement.date)),
                            React.createElement("div", { className: "flex items-center gap-2 text-sm text-gray-600" },
                                React.createElement(lucide_react_1.MapPin, { className: "w-4 h-4 text-gray-400" }),
                                React.createElement("span", null, achievement.location))),
                        React.createElement("div", { className: "mt-6 pt-6 border-t border-gray-100" },
                            React.createElement("button", { className: "text-sm font-medium text-gray-800 hover:text-black flex items-center gap-2 group" },
                                "View Certificate",
                                React.createElement("svg", { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))))))); })),
            React.createElement("section", { "data-animate": "scale", className: "mt-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 md:p-12 text-center text-white" },
                React.createElement("h2", { className: "text-2xl md:text-3xl font-bold mb-3" }, "Let's Create Something Award-Worthy Together!"),
                React.createElement("p", { className: "text-gray-200 mb-6 max-w-2xl mx-auto" }, "With a proven track record of excellence, I'm ready to bring your vision to life with the same dedication and creativity."),
                React.createElement("div", { className: "flex flex-wrap items-center justify-center gap-4" },
                    React.createElement("a", { href: "/Contact", className: "px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors" }, "Get in Touch"),
                    React.createElement("a", { href: "/Projects", className: "px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors" }, "View My Work")))),
        React.createElement(Separator_1["default"], { className: "mt-12" })));
}
exports["default"] = AchievementsPage;
