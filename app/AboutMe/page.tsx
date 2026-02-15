"use client";

import Image from "next/image";
import AnimatedSeparator from "../components/AnimatedSeparator";
import { Star, Heart, Award, Zap } from "lucide-react";
import Separator from "../components/Separator";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="pt-12 pb-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold text-center text-black">
              About Me
            </h1>
            <p className="text-center text-sm text-gray-600 mt-2">
              Get to know the creative mind behind the designs
            </p>
          </div>

          <div className="mt-8 bg-gray-100 rounded-lg py-12 px-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full mx-auto">
              <div className="flex justify-center">
                <div className="relative w-80 h-90">
                  <div className="absolute left-[-55] top-15 w-60 h-72 rounded-2xl overflow-hidden z-0 ">
                    <Image
                      src="/image/AboutMePic.png"
                      alt="Angelika Bianca L. Upao"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="absolute left-34 top-0 w-60 h-76 rounded-2xl overflow-hidden z-10">
                    <Image
                      src="/image/AboutMePic.png"
                      alt="Angelika Bianca L. Upao"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-black">
                  Angelika Bianca L. Upao
                </h2>
                <p className="mt-4 text-sm text-gray-700">
                  Hi there! I'm Angelika Bianca, a creative designer and
                  aspiring entrepreneur with a passion for transforming ideas
                  into beautiful, meaningful designs.
                </p>

                <p className="mt-4 text-sm text-gray-700">
                  As a student and business owner, I've discovered the perfect
                  blend of learning and creating. My journey in design started
                  with a simple love for colors, shapes, and the power of visual
                  storytelling. Today, I run Uniquely Made FLEXHIVE Edits, where
                  I help individuals and businesses bring their visions to life.
                </p>

                <p className="mt-4 text-sm text-gray-700">
                  Whether it's crafting the perfect logo, designing eye-catching
                  social media graphics, or creating personalized invitations, I
                  approach each project with creativity, dedication, and
                  attention to detail.
                </p>

                <p className="mt-4 text-sm text-gray-700 font-semibold">
                  My motto is simple: YOUR PARTNER IN SMART AND CREATIVE
                  SOLUTIONS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSeparator className="mt-12" />

        <section className="mt-8 py-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-black">
              My Values
            </h3>
            <p className="text-center text-sm text-gray-600 mt-2">
              Principles that guide my creative work
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
                <Star size={20} className="text-gray-800" />
              </div>
              <h4 className="mt-4 font-semibold text-black">Creativity</h4>
              <p className="mt-2 text-xs text-gray-600">
                Bringing unique and innovative ideas to every project
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
                <Heart size={20} className="text-gray-800" />
              </div>
              <h4 className="mt-4 font-semibold text-black">Passion</h4>
              <p className="mt-2 text-xs text-gray-600">
                Loving what I do and putting heart into every design
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
                <Award size={20} className="text-gray-800" />
              </div>
              <h4 className="mt-4 font-semibold text-black">Excellence</h4>
              <p className="mt-2 text-xs text-gray-600">
                Committed to delivering high-quality work every time
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
                <Zap size={20} className="text-gray-800" />
              </div>
              <h4 className="mt-4 font-semibold text-black">Innovation</h4>
              <p className="mt-2 text-xs text-gray-600">
                Always exploring new techniques and creative solutions
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-black">
              My Journey
            </h3>
            <p className="text-center text-sm text-gray-600 mt-2">
              A brief look at how my passion turned into purpose
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <p className="text-sm text-gray-700">
              My design journey began as a creative exploration during my
              student years. What started as a hobby quickly evolved into a
              passion and eventually into a thriving business.
            </p>

            <p className="mt-4 text-sm text-gray-700">
              Through Uniquely Made FLEXHIVE Edits, I've had the privilege of
              working with clients to create custom designs that help them
              celebrate special moments, build their brands, and express their
              unique identities.
            </p>

            <p className="mt-4 text-sm text-gray-700">
              Every project is an opportunity to learn, grow, and push creative
              boundaries. I'm constantly exploring new design trends,
              techniques, and tools to ensure my work remains fresh, innovative,
              and aligned with my clients' visions.
            </p>

            <p className="mt-6 text-center font-semibold">
              Let's create something amazing together!
            </p>
          </div>
        </section>
        
      </main>
              <Separator className="mt-12" />

    </div>
  );
}