import React from "react";
import Promt from "./Promt";

const Help = ({ isHelpOpen, setIsHelpOpen }) => {
  return (
    <div className={`${isHelpOpen ? "fixed inset-0 z-50" : "hidden"}`}>
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsHelpOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white shadow-lg transform transition-transform duration-300 ${
          isHelpOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Need Help?</h2>
          <button
            onClick={() => setIsHelpOpen(false)}
            className="text-gray-600 hover:text-red-500 text-lg"
          >
            ✖
          </button>
        </div>

        {/* Drawer Content */}
        {isHelpOpen && <Promt />}
      </div>
    </div>
  );
};

export default Help;
