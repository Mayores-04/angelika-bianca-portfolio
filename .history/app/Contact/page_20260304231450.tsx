"use client";

import { FormEvent, useRef, useState } from "react";
import { MessageSquare, Facebook, Instagram, Send } from "lucide-react";
import Separator from "../components/Separator";
import SendMessage from "../components/SendMessage";
import { useGsapAnimation } from "../hooks/useGsapAnimation";

export default function ContactPage() {
	const containerRef = useGsapAnimation();
	const [open, setOpen] = useState(false);

	const nameRef = useRef<HTMLInputElement | null>(null);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setError(null);
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			subject: formData.get("subject"),
			message: formData.get("message"),
		};
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (!res.ok) throw new Error("Failed to send message");
			setOpen(true);
			form.reset();
		} catch (err) {
			setError("Failed to send message. Please try again later.");
		} finally {
			setLoading(false);
		}
	}

	const faqs = [
		{
			q: "How long does a typical project take?",
			a: "Most projects are completed within 3-7 days, depending on complexity. Rush orders are available.",
		},
		{ q: "Do you offer revisions?", a: "Yes! I offer unlimited revisions until you're completely satisfied with the design." },
		{ q: "What file formats do you provide?", a: "I provide designs in PNG, JPG, PDF, and source files (AI/PSD) upon request." },
		{ q: "What are your payment terms?", a: "50% deposit to start, 50% upon completion. Payment methods include bank transfer and e-wallets." },
	];

	return (
		<main ref={containerRef} className="min-h-screen bg-white text-gray-800">
			<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
				<h1 data-animate="fade-up" className="text-3xl font-semibold text-center text-black">Get In Touch</h1>
				<p data-animate="fade-up" className="text-center text-sm text-gray-600 mt-2">Have a project in mind? Let's talk about how we can bring your ideas to life!</p>

				<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<div data-animate-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
								<div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
									<MessageSquare size={20} className="text-gray-800" />
								</div>
								<div>
									<h4 className="font-semibold text-black">Message</h4>
									<p className="text-xs text-gray-600 mt-1">Send me a direct message for quick inquiries</p>
										<div className="mt-3">
											<button
												onClick={() => {
													// scroll to and focus the inline form
													nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
													nameRef.current?.focus();
												}}
												className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200"
											>
												Chat Now
											</button>
										</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
								<div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
									<Send size={20} className="text-gray-800" />
								</div>
								<div>
									<h4 className="font-semibold text-black">Telegram</h4>
									<p className="text-xs text-gray-600 mt-1">Message me instantly on Telegram for quick responses</p>
									<div className="mt-3">
										<a className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200" href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer">Open Telegram</a>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
								<div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
									<Facebook size={20} className="text-gray-800" />
								</div>
								<div>
									<h4 className="font-semibold text-black">Facebook</h4>
									<p className="text-xs text-gray-600 mt-1">Send me a direct message for quick inquiries</p>
									<div className="mt-3">
										<a className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200" href="#">Visit Account</a>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
								<div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
									<Instagram size={20} className="text-gray-800" />
								</div>
								<div>
									<h4 className="font-semibold text-black">Instagram</h4>
									<p className="text-xs text-gray-600 mt-1">Send me a direct message for quick inquiries</p>
									<div className="mt-3">
										<a className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200" href="#">Follow</a>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-10">
							<h3 className="text-lg font-semibold">Other way to reach me out</h3>
							<div className="mt-4 space-y-3">
								{faqs.map((f, idx) => (
									<div key={idx} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
										<div className="font-semibold text-sm text-gray-800">{f.q}</div>
										<div className="mt-2 text-xs text-gray-600">{f.a}</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<h3 className="text-lg font-semibold">Send a Message</h3>
							<form onSubmit={handleSubmit} className="mt-4 space-y-4">
								<div>
									<label className="block text-xs text-gray-600">Name</label>
									<input name="name" ref={nameRef} required className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm" placeholder="Your Name" />
								</div>

								<div>
									<label className="block text-xs text-gray-600">Email</label>
									<input name="email" required type="email" className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm" placeholder="Your Email" />
								</div>

								<div>
									<label className="block text-xs text-gray-600">Subject</label>
									<input name="subject" className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm" placeholder="Subject" />
								</div>

								<div>
									<label className="block text-xs text-gray-600">Message</label>
									<textarea name="message" required rows={5} className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm" placeholder="Tell me about your project..." />
								</div>

								{error && <div className="text-xs text-red-500 text-left">{error}</div>}
								<div className="text-right">
									<button type="submit" className="px-4 py-2 bg-black text-white rounded-md" disabled={loading}>
										{loading ? "Sending..." : "Send a Message"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<Separator className="mt-12" />
			<SendMessage open={open} onClose={() => setOpen(false)} />
		</main>
	);
}

