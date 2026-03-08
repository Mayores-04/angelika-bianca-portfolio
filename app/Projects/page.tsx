"use client";

import Separator from "../components/Separator";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { Eye, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { useState } from "react";

const folders: {
  name: string;
  images: string[];
  color: string;
  tab: string;
  label: string;
}[] = [
  {
    name: "Social Media Graphics",
    label: "Social Media Graphics",
    images: [
      "/images/SocialMediaGraphics/CentellaCleanser.png",
      "/images/SocialMediaGraphics/CentellaCleanser1.png",
      "/images/SocialMediaGraphics/CentellaCleanser2.png",
      "/images/SocialMediaGraphics/CookingSpoon.png",
      "/images/SocialMediaGraphics/CookingSpoon1.png",
      "/images/SocialMediaGraphics/GlossMatte.png",
      "/images/SocialMediaGraphics/GlossMatte1.png",
      "/images/SocialMediaGraphics/KeratinSakura.png",
      "/images/SocialMediaGraphics/KeratinSakura1.png",
      "/images/SocialMediaGraphics/Peeling Lotion Instant White.png",
      "/images/SocialMediaGraphics/Peeling Lotion Instant White1.png",
      "/images/SocialMediaGraphics/Velvet Drip.png",
      "/images/SocialMediaGraphics/Velvet Drip1.png",
    ],
    color: "bg-violet-400",
    tab: "bg-violet-300",
  },
  {
    name: "Branding",
    label: "Branding",
    images: [
      "/images/Branding/UMLogo.png",
      "/images/Branding/MEDAL.png",
      "/images/Branding/MEDAL1.png",
    ],
    color: "bg-rose-400",
    tab: "bg-rose-300",
  },
  {
    name: "Layout Designs",
    label: "Layout Designs",
    images: ["/images/LayoutDesigns/Flyer/Salazar_Flyer.png"],
    color: "bg-emerald-400",
    tab: "bg-emerald-300",
  },
  {
    name: "Freelancing Projects",
    label: "Freelancing Projects",
    images: ["/images/UM/Movie Munch .png"],
    color: "bg-amber-400",
    tab: "bg-amber-300",
  },
];

export default function ProjectsPage() {
  const containerRef = useGsapAnimation();
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeFolder = folders.find((f) => f.name === openFolder);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fafafa] text-gray-800"
    >
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-14" data-animate="fade-up">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-gray-900">My Designs</h1>
          <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
            Browse through my creative work organized by category
          </p>
          <div className="mt-5 mx-auto w-12 h-px bg-gray-300" />
        </div>

        {/* Folder Grid */}
        {!openFolder && (
          <div
            data-animate-stagger
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {folders.map((folder) => (
              <button
                key={folder.name}
                onClick={() => setOpenFolder(folder.name)}
                className="group focus:outline-none"
              >
                {/* Folder shape */}
                <div className="relative">
                  {/* Tab */}
                  <div
                    className={`${folder.tab} absolute -top-3 left-0 w-1/2 h-5 rounded-t-lg`}
                  />

                  {/* Body */}
                  <div
                    className={`${folder.color} relative rounded-b-2xl rounded-tr-2xl pt-5 pb-4 px-3 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}
                  >
                    {/* Image previews stacked */}
                    <div className="relative h-28 flex items-end justify-center mb-2">
                      {folder.images.slice(0, 3).map((img, i) => {
                        const rotations = ["-rotate-6", "rotate-3", "rotate-0"];
                        const zIndex = ["z-0", "z-10", "z-20"];
                        const offset = [
                          "-translate-x-3",
                          "translate-x-1",
                          "translate-x-0",
                        ];
                        return (
                          <div
                            key={i}
                            className={`absolute w-16 h-20 rounded-md overflow-hidden shadow-md border-2 border-white/60
                              ${rotations[i] ?? "rotate-0"} ${zIndex[i] ?? "z-0"} ${offset[i] ?? ""}`}
                            style={{ bottom: 0 }}
                          >
                            <Image
                              src={img}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Label below folder */}
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {folder.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {folder.images.length}{" "}
                    {folder.images.length === 1 ? "item" : "items"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Open Folder View */}
        {activeFolder && (
          <div>
            {/* Breadcrumb / Back */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => setOpenFolder(null)}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <ChevronLeft
                  size={16}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
                All Folders
              </button>
              <span className="text-gray-300">/</span>
              <span className="text-sm font-semibold text-gray-800">
                {activeFolder.name}
              </span>
              <span
                className={`ml-auto text-xs px-2.5 py-1 rounded-full text-white font-medium ${activeFolder.color}`}
              >
                {activeFolder.images.length}{" "}
                {activeFolder.images.length === 1 ? "item" : "items"}
              </span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeFolder.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden bg-gray-200 aspect-square shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(image);
                    setIsModalOpen(true);
                  }}
                >
                  <Image
                    src={image}
                    alt={`${activeFolder.name} item ${idx + 1}`}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full p-3">
                      <Eye size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={
          selectedImage
            ? {
                title: "",
                category: openFolder ?? "",
                image: selectedImage,
                desc: "",
              }
            : null
        }
      />
    </main>
  );
}
