"use client";

import Separator from "../components/Separator";
import { Eye } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

export default function ProjectsPage() {
  // Add much more data
  const allItems = [
    {
      id: 1,
      category: "Branding",
      title: "Modern Business Logo",
      desc: "Professional logo design for a tech startup with modern aesthetics",
    },
    {
      id: 2,
      category: "Web Design",
      title: "Portfolio Website",
      desc: "Personal portfolio website for a creative professional.",
    },
    {
      id: 3,
      category: "Illustration",
      title: "Children's Book Art",
      desc: "Whimsical illustrations for a children's book project.",
    },
    {
      id: 4,
      category: "Branding",
      title: "Coffee Shop Logo",
      desc: "Logo and branding for a local coffee shop.",
    },
    {
      id: 5,
      category: "Social Media",
      title: "Instagram Post Set",
      desc: "A set of engaging Instagram posts for a small business.",
    },
    {
      id: 6,
      category: "Packaging",
      title: "Product Packaging Mockup",
      desc: "Mockup design for a new product launch.",
    },
    {
      id: 7,
      category: "Branding",
      title: "Event Poster",
      desc: "Poster design for a community event.",
    },
    {
      id: 8,
      category: "Web Design",
      title: "E-commerce UI",
      desc: "User interface design for an online store.",
    },
    {
      id: 9,
      category: "Illustration",
      title: "Mascot Character",
      desc: "Custom mascot illustration for a brand.",
    },
    {
      id: 10,
      category: "Branding",
      title: "Business Card",
      desc: "Minimalist business card design.",
    },
    {
      id: 11,
      category: "Packaging",
      title: "Gift Box Design",
      desc: "Festive gift box packaging for a holiday campaign.",
    },
    {
      id: 12,
      category: "Social Media",
      title: "Facebook Banner",
      desc: "Banner design for a Facebook business page.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const items = showAll ? allItems : allItems.slice(0, 6);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-semibold text-center text-black">
          My Designs
        </h1>
        <p className="text-center text-sm text-gray-600 mt-2">
          A showcase of my creative work and design projects
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative group">
                <div className="h-48 bg-gray-200 w-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/image/Bianca.png"
                    alt="Project preview"
                    width={192}
                    height={192}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-md">
                    <Eye size={16} className="mr-2" /> View Details
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.category}</span>
                  <span>Canva, Photoshop</span>
                </div>

                <h3 className="mt-2 text-sm font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          {!showAll && allItems.length > 6 && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-block px-6 py-2 rounded-md bg-gray-800 text-white"
            >
              View More
            </button>
          )}
        </div>
      </section>

      <Separator className="mt-12" />
    </main>
  );
}
