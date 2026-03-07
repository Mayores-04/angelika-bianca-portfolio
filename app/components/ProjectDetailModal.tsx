"use client";

import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    desc: string;
  } | null;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
}: ProjectDetailModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !overlayRef.current || !cardRef.current) return;

    // Fade in overlay
    gsap.from(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Scale + slide up the card
    gsap.from(cardRef.current, {
      y: 40,
      scale: 0.95,
      opacity: 0,
      duration: 0.45,
      ease: "back.out(1.4)",
    });
  }, [isOpen]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 250));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div
        ref={cardRef}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header with close button */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-100 bg-white rounded-t-2xl">
          {project.title ? (
            <h2 className="text-2xl font-semibold text-black">
              {project.title}
            </h2>
          ) : (
            <span className="text-sm text-gray-500">{project.category}</span>
          )}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 relative group w-full">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
            {/* Fullscreen button */}
            <button
              onClick={() => setIsFullscreenImageOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl"
              aria-label="View image fullscreen"
            >
              <Maximize
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                size={32}
              />
            </button>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Category
              </p>
              <p className="text-sm text-gray-700 mt-1">{project.category}</p>
            </div>

            {project.desc && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  Description
                </p>
                <p className="text-sm text-gray-700 mt-1">{project.desc}</p>
              </div>
            )}

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Tools
              </p>
              <p className="text-sm text-gray-700 mt-1">Canva, Photoshop</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Close
            </button>
            <Link
              href="/Contact"
              className="flex-1 text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isFullscreenImageOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => {
              setIsFullscreenImageOpen(false);
              setZoom(100);
            }}
            className="absolute top-6 right-6 p-2 hover:bg-gray-800 rounded-lg transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} className="text-white" />
          </button>

          {/* Zoom controls */}
          <div className="absolute top-6 left-6 flex gap-2 z-10">
            <button
              onClick={handleZoomOut}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut size={24} className="text-white" />
            </button>
            <div className="flex items-center justify-center bg-gray-700 rounded-lg px-4 py-2 min-w-[80px]">
              <span className="text-white font-medium text-sm">{zoom}%</span>
            </div>
            <button
              onClick={handleZoomIn}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn size={24} className="text-white" />
            </button>
          </div>

          {/* Image container with scroll on zoom */}
          <div
            ref={imageContainerRef}
            onWheel={handleWheel}
            className="relative w-full h-full flex items-center justify-center overflow-auto"
          >
            <div
              className="relative"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: "center",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="max-w-4xl h-auto"
              />
            </div>
          </div>

          {/* Scroll hint text */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm pointer-events-none">
            Scroll mouse wheel to zoom
          </div>
        </div>
      )}
    </div>
  );
}
