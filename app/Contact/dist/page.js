"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var Separator_1 = require("../components/Separator");
var SendMessage_1 = require("../components/SendMessage");
var useGsapAnimation_1 = require("../hooks/useGsapAnimation");
function ContactPage() {
    var containerRef = useGsapAnimation_1.useGsapAnimation();
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var nameRef = react_1.useRef(null);
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var form, formData, data, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        setLoading(true);
                        setError(null);
                        form = e.currentTarget;
                        formData = new FormData(form);
                        data = {
                            name: formData.get("name"),
                            email: formData.get("email"),
                            subject: formData.get("subject"),
                            message: formData.get("message")
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fetch("/api/contact", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(data)
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res.ok)
                            throw new Error("Failed to send message");
                        setOpen(true);
                        form.reset();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        setError("Failed to send message. Please try again later.");
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    var faqs = [
        {
            q: "How long does a typical project take?",
            a: "Most projects are completed within 3-7 days, depending on complexity. Rush orders are available."
        },
        { q: "Do you offer revisions?", a: "Yes! I offer unlimited revisions until you're completely satisfied with the design." },
        { q: "What file formats do you provide?", a: "I provide designs in PNG, JPG, PDF, and source files (AI/PSD) upon request." },
        { q: "What are your payment terms?", a: "50% deposit to start, 50% upon completion. Payment methods include bank transfer and e-wallets." },
    ];
    return (React.createElement("main", { ref: containerRef, className: "min-h-screen bg-white text-gray-800" },
        React.createElement("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-12" },
            React.createElement("h1", { "data-animate": "fade-up", className: "text-3xl font-semibold text-center text-black" }, "Get In Touch"),
            React.createElement("p", { "data-animate": "fade-up", className: "text-center text-sm text-gray-600 mt-2" }, "Have a project in mind? Let's talk about how we can bring your ideas to life!"),
            React.createElement("div", { className: "mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8" },
                React.createElement("div", { className: "lg:col-span-2" },
                    React.createElement("div", { "data-animate-stagger": true, className: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
                        React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4" },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg" },
                                React.createElement(lucide_react_1.MessageSquare, { size: 20, className: "text-gray-800" })),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-black" }, "Message"),
                                React.createElement("p", { className: "text-xs text-gray-600 mt-1" }, "Send me a direct message for quick inquiries"),
                                React.createElement("div", { className: "mt-3" },
                                    React.createElement("button", { onClick: function () {
                                            var _a, _b;
                                            // scroll to and focus the inline form
                                            (_a = nameRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "center" });
                                            (_b = nameRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                                        }, className: "inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200" }, "Chat Now")))),
                        React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4" },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg" },
                                React.createElement(lucide_react_1.Send, { size: 20, className: "text-gray-800" })),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-black" }, "Telegram"),
                                React.createElement("p", { className: "text-xs text-gray-600 mt-1" }, "Message me instantly on Telegram for quick responses"),
                                React.createElement("div", { className: "mt-3" },
                                    React.createElement("a", { className: "inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200", href: "https://t.me/yourtelegramusername", target: "_blank", rel: "noopener noreferrer" }, "Open Telegram")))),
                        React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4" },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg" },
                                React.createElement(lucide_react_1.Facebook, { size: 20, className: "text-gray-800" })),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-black" }, "Facebook"),
                                React.createElement("p", { className: "text-xs text-gray-600 mt-1" }, "Send me a direct message for quick inquiries"),
                                React.createElement("div", { className: "mt-3" },
                                    React.createElement("a", { className: "inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200", href: "#" }, "Visit Account")))),
                        React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4" },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg" },
                                React.createElement(lucide_react_1.Instagram, { size: 20, className: "text-gray-800" })),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-black" }, "Instagram"),
                                React.createElement("p", { className: "text-xs text-gray-600 mt-1" }, "Send me a direct message for quick inquiries"),
                                React.createElement("div", { className: "mt-3" },
                                    React.createElement("a", { className: "inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200", href: "#" }, "Follow"))))),
                    React.createElement("div", { className: "mt-10" },
                        React.createElement("h3", { className: "text-lg font-semibold" }, "Other way to reach me out"),
                        React.createElement("div", { className: "mt-4 space-y-3" }, faqs.map(function (f, idx) { return (React.createElement("div", { key: idx, className: "bg-white rounded-lg p-4 border border-gray-100 shadow-sm" },
                            React.createElement("div", { className: "font-semibold text-sm text-gray-800" }, f.q),
                            React.createElement("div", { className: "mt-2 text-xs text-gray-600" }, f.a))); })))),
                React.createElement("div", { "data-animate": "fade-right" },
                    React.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100" },
                        React.createElement("h3", { className: "text-lg font-semibold" }, "Send a Message"),
                        React.createElement("form", { onSubmit: handleSubmit, className: "mt-4 space-y-4" },
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-xs text-gray-600" }, "Name"),
                                React.createElement("input", { name: "name", ref: nameRef, required: true, className: "mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm", placeholder: "Your Name" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-xs text-gray-600" }, "Email"),
                                React.createElement("input", { name: "email", required: true, type: "email", className: "mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm", placeholder: "Your Email" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-xs text-gray-600" }, "Subject"),
                                React.createElement("input", { name: "subject", className: "mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm", placeholder: "Subject" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-xs text-gray-600" }, "Message"),
                                React.createElement("textarea", { name: "message", required: true, rows: 5, className: "mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm", placeholder: "Tell me about your project..." })),
                            error && React.createElement("div", { className: "text-xs text-red-500 text-left" }, error),
                            React.createElement("div", { className: "text-right" },
                                React.createElement("button", { type: "submit", className: "px-4 py-2 bg-black text-white rounded-md", disabled: loading }, loading ? "Sending..." : "Send a Message"))))))),
        React.createElement(Separator_1["default"], { className: "mt-12" }),
        React.createElement(SendMessage_1["default"], { open: open, onClose: function () { return setOpen(false); } })));
}
exports["default"] = ContactPage;
