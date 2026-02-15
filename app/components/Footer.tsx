
"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gray-100 border-t border-gray-300 text-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
					{/* Left: Name & Description */}
					<div className="md:w-1/3">
						<h3 className="text-xl font-bold text-black">Angelika Bianca L. Upao</h3>
						<p className="mt-2 text-sm text-gray-800">
							Creative designer and entrepreneur passionate about bringing ideas to life through design and innovation.
						</p>
						<p className="mt-4 text-xs font-semibold text-black uppercase">
							YOUR PARTNER IN SMART AND CREATIVE SOLUTIONS
						</p>
					</div>

					{/* Center: Quick Links */}
					<div className="md:w-1/3 flex flex-col items-start md:items-center">
						<h4 className="text-base font-semibold mb-2">Quick Links</h4>
						<ul className="space-y-1 text-sm">
							<li>
								<Link href="/AboutMe" className="hover:underline hover:text-black transition-colors">About Me</Link>
							</li>
							<li>
								<Link href="/MyDesigns" className="hover:underline hover:text-black transition-colors">My Designs</Link>
							</li>
							<li>
								<a href="https://facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-black transition-colors">My Business</a>
							</li>
							<li>
								<Link href="/Contact" className="hover:underline hover:text-black transition-colors">Contact</Link>
							</li>
						</ul>
					</div>

					{/* Right: Social Icons */}
					<div className="md:w-1/3 flex flex-col items-start md:items-end">
						<h4 className="text-base font-semibold mb-2">Connect</h4>
						<div className="flex items-center gap-2 mt-1">
							<a href="https://facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-black transition-colors">
								<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z" /></svg>
							</a>
							<a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-black transition-colors">
								<Instagram size={16} />
							</a>
							<a href="mailto:hello@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-black transition-colors">
								<Mail size={16} />
							</a>
							<a href="sms:09701275112" target="_blank" rel="noopener noreferrer" aria-label="Message" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-black transition-colors">
								<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
							</a>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-300" />
				<div className="text-center text-sm text-gray-700">
					© 2026 Angelika Bianca L. Upao. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

