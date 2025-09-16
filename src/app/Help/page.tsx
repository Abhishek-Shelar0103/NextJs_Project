"use client";
import { useState } from "react";

export default function HelpDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Help Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
      >
        Help
      </button>

      {/* Overlay (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Help</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            ✖
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <p className="mb-2">
            Here you can add help text, FAQs, or contact info.
          </p>
          <p className="mb-2">You can also place links or even a form here.</p>
        </div>
      </div>
    </div>
  );
}
