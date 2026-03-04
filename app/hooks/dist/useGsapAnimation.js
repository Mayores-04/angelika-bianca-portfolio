"use client";
"use strict";
exports.__esModule = true;
exports.useGsapAnimation = void 0;
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1["default"].registerPlugin(ScrollTrigger_1.ScrollTrigger);
/**
 * Drop this hook in any page component.
 * Returns a ref to attach to the page root element.
 *
 * Tag any child element with one of these attributes:
 *   data-animate="hero"        → immediate fade-up on mount (no scroll)
 *   data-animate="fade-up"     → scroll-triggered fade from bottom
 *   data-animate="fade-left"   → scroll-triggered slide from left
 *   data-animate="fade-right"  → scroll-triggered slide from right
 *   data-animate="scale"       → scroll-triggered scale-in
 *   data-animate-stagger       → stagger-animates all direct children on scroll
 */
function useGsapAnimation() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var containerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!containerRef.current)
            return;
        var ctx = gsap_1["default"].context(function (self) {
            // Immediate hero animations (staggered by DOM order)
            var heroEls = self.selector('[data-animate="hero"]');
            heroEls.forEach(function (el, i) {
                gsap_1["default"].from(el, {
                    y: 35,
                    opacity: 0,
                    duration: 0.75,
                    delay: i * 0.14,
                    ease: "power3.out"
                });
            });
            // Scroll-triggered: fade-up
            self.selector('[data-animate="fade-up"]').forEach(function (el) {
                gsap_1["default"].from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                });
            });
            // Scroll-triggered: fade-left
            self.selector('[data-animate="fade-left"]').forEach(function (el) {
                gsap_1["default"].from(el, {
                    x: -60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                });
            });
            // Scroll-triggered: fade-right
            self.selector('[data-animate="fade-right"]').forEach(function (el) {
                gsap_1["default"].from(el, {
                    x: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                });
            });
            // Scroll-triggered: scale-in
            self.selector('[data-animate="scale"]').forEach(function (el) {
                gsap_1["default"].from(el, {
                    scale: 0.88,
                    opacity: 0,
                    duration: 0.7,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                });
            });
            // Scroll-triggered stagger groups
            self.selector("[data-animate-stagger]").forEach(function (container) {
                var children = Array.from(container.children);
                gsap_1["default"].from(children, {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, containerRef);
        return function () { return ctx.revert(); };
    }, []);
    return containerRef;
}
exports.useGsapAnimation = useGsapAnimation;
