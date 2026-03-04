"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates all children with [data-animate] inside the returned containerRef.
 * Add data-animate="fade-up" | "fade-left" | "fade-right" | "scale" | "stagger"
 * to any element you want animated.
 */
export function useGsapAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up elements
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
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
      });

      // Fade-left elements
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-left"]').forEach((el) => {
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
      });

      // Fade-right elements
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-right"]').forEach((el) => {
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
      });

      // Scale-in elements
      gsap.utils.toArray<HTMLElement>('[data-animate="scale"]').forEach((el) => {
        gsap.from(el, {
          scale: 0.85,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stagger group — find all [data-animate-stagger] containers
      gsap.utils.toArray<HTMLElement>('[data-animate-stagger]').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Hero immediate fade-in (no scroll trigger, plays on mount)
      gsap.utils.toArray<HTMLElement>('[data-animate="hero"]').forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
