"use client"; // Only if you are using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import BookForm from "../components/BookForm";
import Help from "../components/Help";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false); // 👈 for help drawer

  return (
    <section className="flex items-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Enjoy Your Healthy
              <br />
              Delicious Food
            </h1>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              We are a team of talented designers creating beautiful and
              responsive websites using Tailwind CSS.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Book a Table
              </button>

              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg transition"
              >
                <i className="bi bi-play-circle mr-2"></i> Watch Video
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="text-center">
            <div className="mx-auto max-w-md sm:max-w-lg">
              <Image
                src="/chef.png"
                width={800}
                height={800}
                alt="Delicious Food"
                className="rounded-xl w-full h-auto"
                style={{ animation: "float 3s ease-in-out infinite" }}
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%,
              100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
          `}</style>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <BookForm isOpen={isOpen} setIsOpen={setIsOpen} />}

      {/* Help Button (Fixed Bottom Right) */}
      <button
        onClick={() => setIsHelpOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition transform hover:scale-105 z-50"
      >
        Help ?
      </button>

      {/* Help Drawer */}
      {isHelpOpen && (
        <Help isHelpOpen={isHelpOpen} setIsHelpOpen={setIsHelpOpen} />
      )}
    </section>
  );
}
