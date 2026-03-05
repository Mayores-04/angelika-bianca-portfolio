"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
export function useGsapAnimation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context((self) => {
      // Immediate hero animations (staggered by DOM order)
      const heroEls = self.selector!('[data-animate="hero"]') as HTMLElement[];
      heroEls.forEach((el, i) => {
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          delay: i * 0.14,
          ease: "power3.out",
        });
      });

      // Scroll-triggered: fade-up
      (self.selector!('[data-animate="fade-up"]') as HTMLElement[]).forEach(
        (el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        },
      );

      // Scroll-triggered: fade-left
      (self.selector!('[data-animate="fade-left"]') as HTMLElement[]).forEach(
        (el) => {
          gsap.from(el, {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        },
      );

      // Scroll-triggered: fade-right
      (self.selector!('[data-animate="fade-right"]') as HTMLElement[]).forEach(
        (el) => {
          gsap.from(el, {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        },
      );

      // Scroll-triggered: scale-in
      (self.selector!('[data-animate="scale"]') as HTMLElement[]).forEach(
        (el) => {
          gsap.from(el, {
            scale: 0.88,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        },
      );

      // Scroll-triggered stagger groups
      (self.selector!("[data-animate-stagger]") as HTMLElement[]).forEach(
        (container) => {
          const children = Array.from(container.children) as HTMLElement[];
          gsap.fromTo(
            children,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: container,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            },
          );
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
