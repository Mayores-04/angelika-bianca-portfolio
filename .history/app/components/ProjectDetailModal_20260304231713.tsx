"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
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

  if (!isOpen || !project) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div ref={cardRef} className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-100 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-semibold text-black">{project.title}</h2>
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
          <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 h-96">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Category
              </p>
              <p className="text-sm text-gray-700 mt-1">{project.category}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Description
              </p>
              <p className="text-sm text-gray-700 mt-1">{project.desc}</p>
            </div>

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
            <Link href="/Contact" className="flex-1 text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
