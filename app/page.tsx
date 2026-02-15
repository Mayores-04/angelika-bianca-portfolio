"use client";
import AnimatedSeparatorWave from "./components/AnimatedSeparatorWave";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-gray-800">
			<main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
				{/* Hero */}
				<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="relative flex justify-center">
						<div className="parent">
							<div className="card">
								<div className="logo">
									<span className="circle circle1"></span>
									<span className="circle circle2"></span>
									<span className="circle circle3"></span>
									<span className="circle circle4"></span>
								</div>
								<div className="glass"></div>
								<div className="content">
									<div className="w-36 h-36 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
										<Image 
											src="/image/Bianca.PNG" 
											alt="Angelika Bianca L. Upao" 
											width={150}
											height={150}
											className="object-fill w-full h-full" 
											priority 
										/>
									</div>
									<span className="block mt-4 text-lg font-bold text-black">Angelika Bianca L. Upao</span>
									<span className="block text-xs text-gray-700">Multimedia Artist & Entrepreneur</span>
									<span className="block text-xs text-gray-500 mt-2 text-center px-2">Passionate about bringing ideas to life through design, business, and innovation.</span>
									<div className="flex items-center gap-2 mt-4">
										<a href="/Contact" className="px-3 py-1 rounded-md bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors">Message me</a>
										<a href="#projects" className="px-3 py-1 rounded-md border border-gray-400 text-xs text-gray-800 hover:bg-gray-50 transition-colors">View My Work</a>
									</div>
									<div className="social-buttons-container">
										<a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="social-button">
											<svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
										</a>
										<a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="social-button">
											<svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 5.75Zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 7.25Zm5.25 1.25a1 1 0 1 1-1 1a1 1 0 0 1 1-1Z"/></svg>
										</a>
										<a href="mailto:hello@example.com" aria-label="Email" className="social-button">
											<svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h1 className="text-3xl md:text-4xl font-bold text-black">Welcome to My Portfolio!</h1>
						<p className="mt-4 text-gray-600">
							Hi there! I'm Angelika Bianca — an aspiring designer and creative student passionate about bringing ideas to life through design, business, and innovation. Explore my works, projects, and the things I love creating!
						</p>

						<div className="mt-6 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
							<div className="flex items-start justify-between">
								<div>
									<div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
										Uniquely Made
									</div>

									<h3 className="mt-3 text-base font-semibold text-black">YOUR PARTNER IN SMART AND CREATIVE SOLUTIONS</h3>
									<p className="mt-2 text-sm text-gray-600">We are accepting customized orders! Your ideas, our designs! We offer personalized and high-quality services for all your creative needs.</p>
								</div>

								<div className="hidden sm:flex flex-col items-end">
									<div className="text-sm text-gray-700">2+ <span className="text-xs text-gray-500">Years of Excellence</span></div>
									<div className="mt-2 text-sm text-gray-700">2+ <span className="text-xs text-gray-500">Happy Clients</span></div>
									<div className="mt-2 text-sm text-gray-700">2+ <span className="text-xs text-gray-500">Projects Completed</span></div>
								</div>
							</div>

							<div className="mt-6 flex space-x-3">
								<button className="px-4 py-2 bg-black text-white rounded-md">Customized Now</button>
								<button className="px-4 py-2 border border-gray-300 rounded-md text-gray-800">Message</button>
							</div>
						</div>
					</div>
				</section>

				<AnimatedSeparatorWave className="mt-12" />

				<section id="projects" className="mt-8">
					<h2 className="text-2xl font-semibold text-black text-center">My Designs</h2>
					<p className="text-center text-sm text-gray-600 mt-2">A showcase of my creative work and design projects</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1, 2, 3].map((i) => (
							<div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
								<div className="h-40 bg-gray-200 rounded-md" />
								<div className="mt-4">
									<div className="text-xs text-gray-500">Branding</div>
									<h3 className="mt-1 text-sm font-semibold text-black">Modern Business Logo</h3>
									<p className="mt-2 text-xs text-gray-600">Professional logo design for a tech startup with modern aesthetics</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<a href="/Projects" className="inline-block px-6 py-2 rounded-md bg-gray-800 text-white">View More</a>
					</div>
				</section>

				<AnimatedSeparatorWave className="mt-12 transform rotate-180" />

				<section className="mt-8">
					<div className="rounded-xl bg-gradient-to-r from-gray-700 to-gray-400 text-white py-12 px-6 text-center shadow-md">
						<h2 className="text-2xl font-semibold">Let's Create Something Beautiful Together!</h2>
						<p className="mt-2 text-sm text-gray-100">Message me now to inquire or place your order. Your ideas, my designs.</p>

						<div className="mt-6 flex items-center justify-center space-x-4">
							<a href="/Contact" className="px-4 py-2 bg-white text-gray-800 rounded-md">Get in Touch</a>
							<a href="/Vlogs" className="px-4 py-2 border border-white rounded-md text-white">View Vlogs</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}