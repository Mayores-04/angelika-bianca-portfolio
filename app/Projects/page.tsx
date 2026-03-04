"use client";

import Separator from "../components/Separator";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useGsapAnimation } from "../hooks/useGsapAnimation";

import { useState } from "react";

export default function ProjectsPage() {
  const containerRef = useGsapAnimation();
  // Collections of images discovered in public/images
  const imagesByCategory: Record<string, string[]> = {
    "Social Media": [
      "/images/SocialMediaGraphics/CentellaCleanser.png",
      "/images/SocialMediaGraphics/CentellaCleanser1.png",
      "/images/SocialMediaGraphics/CentellaCleanser2.png",
      "/images/SocialMediaGraphics/CookingSpoon.png",
      "/images/SocialMediaGraphics/CookingSpoon1.png",
      "/images/SocialMediaGraphics/GlossMatte.PNG",
      "/images/SocialMediaGraphics/GlossMatte1.PNG",
      "/images/SocialMediaGraphics/KeratinSakura.png",
      "/images/SocialMediaGraphics/KeratinSakura1.png",
      "/images/SocialMediaGraphics/Peeling lotion Instant White.png",
      "/images/SocialMediaGraphics/Peeling lotion Instant White1.png",
      "/images/SocialMediaGraphics/Velvet Drip.png",
      "/images/SocialMediaGraphics/Velvet Drip1.png",
    ],
    Flyer: ["/images/LayoutDesigns/Flyer/Salazar_Flyer.png"],
    "Uniquely Made": [
      "/images/UM/Medal/MEDAL.png",
      "/images/UM/Medal/MEDAL1.png",
    ],
    Branding: ["/images/Branding/Logo/Movie Munch .png"],
  };

  // Helper function to extract readable title from image path
  const getTitleFromImage = (imagePath: string): string => {
    const filename = imagePath.split("/").pop() || "";
    return filename
      .replace(/\.[^/.]+$/, "") // Remove extension
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/(\d+)$/, "") // Remove trailing numbers
      .trim();
  };

  // Generate allItems dynamically from images
  const allItems = Object.entries(imagesByCategory).flatMap(
    ([category, images]) =>
      images.map((image, index) => ({
        id: Math.random(), // Unique ID
        category,
        title: getTitleFromImage(image),
        desc: "Description placeholder",
        image,
      })),
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = showAll ? allItems : allItems.slice(0, 6);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1
          data-animate="fade-up"
          className="text-3xl font-semibold text-center text-black"
        >
          My Designs
        </h1>
        <p
          data-animate="fade-up"
          className="text-center text-sm text-gray-600 mt-2"
        >
          A showcase of my creative work and design projects
        </p>

        <div
          data-animate-stagger
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative group">
                <div className="h-48 bg-gray-200 w-full flex items-center justify-center overflow-hidden rounded-t-xl">
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-t-xl">
                  <button
                    onClick={() => {
                      setSelectedProject(item);
                      setIsModalOpen(true);
                    }}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100"
                  >
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

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </main>
  );
}
