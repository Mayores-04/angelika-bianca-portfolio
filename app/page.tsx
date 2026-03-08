"use client";
import AnimatedSeparatorWave from "./components/AnimatedSeparatorWave";
import Image from "next/image";
import { useGsapAnimation } from "./hooks/useGsapAnimation";

export default function Home() {
  const containerRef = useGsapAnimation();
  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-animate="hero" className="relative flex justify-center">
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
                      src="/images/AngelikaBianca.jpg"
                      alt="Angelika Bianca L. Upao"
                      width={150}
                      height={150}
                      className="object-fill w-full h-full"
                      priority
                    />
                  </div>
                  <span className="block mt-4 text-lg font-bold text-black">
                    Angelika Bianca L. Upao
                  </span>
                  <span className="block text-xs text-gray-700">
                    Multimedia Artist & Entrepreneur
                  </span>
                  <span className="block text-xs text-gray-500 mt-2 text-center px-2">
                    Passionate about bringing ideas to life through design,
                    business, and innovation.
                  </span>
                  <div className="flex items-center gap-2 mt-4">
                    <a
                      href="/Contact"
                      className="px-3 py-1 rounded-md bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                      Message me
                    </a>
                    <a
                      href="#projects"
                      className="px-3 py-1 rounded-md border border-gray-400 text-xs text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      View My Work
                    </a>
                  </div>
                  <div className="social-buttons-container">
                    <a
                      href="https://www.facebook.com/angelicabianca.upao"
                      target="_blank"
                      rel="noopener"
                      aria-label="Facebook"
                      className="social-button"
                    >
                      <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/iyancah_prtty/"
                      target="_blank"
                      rel="noopener"
                      aria-label="Instagram"
                      className="social-button"
                    >
                      <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 5.75Zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 7.25Zm5.25 1.25a1 1 0 1 1-1 1a1 1 0 0 1 1-1Z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:angelikaupao@gmail.com"
                      target="_blank"
                      rel="noopener"
                      aria-label="Email"
                      className="social-button"
                    >
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v16H4z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-animate="hero">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Welcome to My Portfolio!
            </h1>
            <p className="mt-4 text-gray-600">
              Hi there! I'm Angelika Bianca — a multimedia artist that is
              passionate about bringing ideas to life through design, business,
              and innovation. Explore my works, projects, and the things I love
              creating!
            </p>

            <div className="mt-6 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
                    Uniquely Made
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-black">
                    YOUR PARTNER IN SMART AND CREATIVE SOLUTIONS
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    We are accepting customized orders! Your ideas, our designs!
                    We offer personalized and high-quality services for all your
                    creative needs.
                  </p>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <div className="text-sm text-gray-700">
                    2+{" "}
                    <span className="text-xs text-gray-500">
                      Years of Excellence
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    2+{" "}
                    <span className="text-xs text-gray-500">Happy Clients</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    2+{" "}
                    <span className="text-xs text-gray-500">
                      Projects Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <a
                  href="https://facebook.com/yourfacebookpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded-md"
                >
                  Visit Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSeparatorWave className="mt-12" />

        <section id="projects" className="mt-8">
          {/* Header — mirrors the Projects page style */}
          <div className="text-center mb-10" data-animate="fade-up">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold text-gray-900">My Designs</h2>
            <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
              A showcase of my creative work and design projects
            </p>
            <div className="mt-4 mx-auto w-12 h-px bg-gray-300" />
          </div>

          {/* 6-card grid — one from each category, color-coded to match Projects page */}
          <div
            data-animate-stagger
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {[
              {
                title: "Velvet Drip",
                category: "Social Media",
                badge: "bg-violet-100 text-violet-600",
                img: "/images/SocialMediaGraphics/Velvet Drip.png",
              },
              {
                title: "Gloss Matte Lipstick",
                category: "Social Media",
                badge: "bg-violet-100 text-violet-600",
                img: "/images/SocialMediaGraphics/GlossMatte.png",
              },
              {
                title: "Peeling Lotion Instant White",
                category: "Social Media",
                badge: "bg-violet-100 text-violet-600",
                img: "/images/SocialMediaGraphics/Peeling Lotion Instant White.png",
              },
              {
                title: "Movie Munch",
                category: "Branding",
                badge: "bg-rose-100 text-rose-600",
                img: "/images/UM/Movie Munch .png",
              },
              {
                title: "School Flyer",
                category: "Layout Design",
                badge: "bg-emerald-100 text-emerald-600",
                img: "/images/LayoutDesigns/Flyer/Salazar_Flyer.png",
              },
              {
                title: "UM Medal",
                category: "Freelancing",
                badge: "bg-amber-100 text-amber-600",
                img: "/images/Branding/MEDAL.png",
              },
            ].map((item, i) => (
              <a
                key={i}
                href="/Projects"
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <div className="p-3">
                  <span
                    className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.badge}`}
                  >
                    {item.category}
                  </span>
                  {/* <h3 className="mt-1 text-sm font-semibold text-gray-800 leading-tight">
                    {item.title}
                  </h3> */}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/Projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Explore All Designs
            </a>
          </div>
        </section>

        <AnimatedSeparatorWave className="mt-12 transform rotate-180" />

        <section className="mt-8">
          <div
            data-animate="scale"
            className="rounded-xl bg-gradient-to-r from-gray-700 to-gray-400 text-white py-12 px-6 text-center shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              Let's Create Something Beautiful Together!
            </h2>
            <p className="mt-2 text-sm text-gray-100">
              Message me now to inquire or place your order. Your ideas, my
              designs.
            </p>

            <div className="mt-6 flex items-center justify-center space-x-4">
              <a
                href="/Contact"
                className="px-4 py-2 bg-white text-gray-800 rounded-md"
              >
                Get in Touch
              </a>
              <a
                href="/Vlogs"
                className="px-4 py-2 border border-white rounded-md text-white"
              >
                View Vlogs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
