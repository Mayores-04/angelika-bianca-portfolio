"use client";

import Image from "next/image";
import { Award, Calendar, MapPin, Trophy } from "lucide-react";
import Separator from "../components/Separator";

const achievements = [
  {
    id: 1,
    title: "Poster Design Winner",
    category: "Graphic Design",
    description:
      "Won 1st place in a local poster-making contest for creative use of color and typography.",
    date: "August 2025",
    location: "Barangay Art Fair",
    image: "/image/certificate1.jpg",
    issuer: "Barangay Art Council",
  },
  {
    id: 2,
    title: "Logo Design Finalist",
    category: "Branding",
    description:
      "Selected as a finalist in a university-wide logo design competition.",
    date: "February 2025",
    location: "University Design Week",
    image: "/image/certificate2.jpg",
    issuer: "University Art Club",
  },
  {
    id: 3,
    title: "Certificate of Participation",
    category: "Digital Illustration",
    description:
      "Participated in an online digital illustration workshop for young graphic designers.",
    date: "November 2024",
    location: "Online Workshop",
    image: "/image/certificate3.jpg",
    issuer: "Creative Youth PH",
  },
];

export default function AchievementsPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-gray-800" />
          </div>
          <h1 className="text-4xl font-bold text-black">My Achievements</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Simple awards and recognitions I've received as a graphic designer.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">3+</div>
            <div className="text-sm text-gray-600 mt-1">Awards Received</div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">5+</div>
            <div className="text-sm text-gray-600 mt-1">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">2+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
        </section>

        {/* Achievements List */}
        <section className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div
                  className={`relative h-64 lg:h-auto bg-gray-100 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-md mx-auto">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  {/* Decorative Corner Badge */}
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    {achievement.category}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                      <Award className="w-5 h-5 text-gray-800" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black leading-tight">
                        {achievement.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {achievement.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{achievement.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{achievement.location}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-sm font-medium text-gray-800 hover:text-black flex items-center gap-2 group">
                      View Certificate
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Let's Create Something Award-Worthy Together!
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            With a proven track record of excellence, I'm ready to bring your
            vision to life with the same dedication and creativity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Contact"
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/Projects"
              className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </section>
      </main>
      <Separator className="mt-12" />
    </div>
  );
}
