"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navItems: { href: string; label: string }[] = [
	{ href: "/AboutMe", label: "About Me" },
	{ href: "/Projects", label: "Projects" },
	// { href: "/Vlogs", label: "Vlogs" },
	{ href: "/Contact", label: "Contact" },
	// { href: "/Achievements", label: "Achievements" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!headerRef.current) return;

		// Initial slide-down entrance
		gsap.from(headerRef.current, {
			y: -60,
			opacity: 0,
			duration: 0.6,
			ease: "power3.out",
		});

		// Hide on scroll down, show on scroll up
		let lastScrollY = window.scrollY;
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;
					const header = headerRef.current;
					if (!header) return;

					if (currentScrollY > lastScrollY && currentScrollY > 80) {
						// Scrolling down — hide
						gsap.to(header, {
							y: -header.offsetHeight,
							duration: 0.35,
							ease: "power2.inOut",
						});
					} else {
						// Scrolling up — show
						gsap.to(header, {
							y: 0,
							duration: 0.35,
							ease: "power2.out",
						});
					}

					lastScrollY = currentScrollY;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (href: string) => pathname === href;

	return (
		<header ref={headerRef} className="bg-white border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="text-black text-2xl font-semibold relative group pb-1">
							Angelika Bianca
							<span className={`absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform origin-left duration-300 ${pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
						</Link>
					</div>

					<nav className="hidden md:flex space-x-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`text-sm relative group pb-1 ${
									isActive(item.href) ? "text-black font-medium" : "text-gray-700 hover:text-black"
								}`}
							>
								{item.label}
								<span className={`absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform origin-left duration-300 ${
									isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
								}`} />
							</Link>
						))}
					</nav>

					<div className="md:hidden">
						<button
							aria-label="Toggle menu"
							onClick={() => setOpen((v) => !v)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
						>
							{open ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{open && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className={`block px-3 py-2 rounded-md text-base relative group ${
									isActive(item.href) ? "text-black font-medium bg-gray-50" : "text-gray-700 hover:text-black hover:bg-gray-50"
								}`}
							>
								{item.label}
								<span className={`absolute left-3 bottom-1 w-[calc(100%-1.5rem)] h-0.5 bg-black transition-transform origin-left duration-300 ${
									isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
								}`} />
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
}