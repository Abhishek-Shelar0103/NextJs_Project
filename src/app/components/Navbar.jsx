// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-1">
          <h1 className="text-2xl font-bold text-rose-600">Yummy</h1>
          <span className="text-2xl text-rose-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/Home" className="hover:text-rose-600">Home</Link>
          <Link href="/About" className="hover:text-rose-600">About</Link>
          <Link href="/Events" className="hover:text-rose-600">Events</Link>
          <Link href="/BookingList" className="hover:text-rose-600">Booking List</Link>
          <Link href="/Contact" className="hover:text-rose-600">Contact</Link>
          <Link href="/booktable" className="inline-block bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">Book a Table</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/Home" className="py-2 hover:text-rose-600" onClick={closeMobile}>Home</Link>
            <Link href="/About" className="py-2 hover:text-rose-600" onClick={closeMobile}>About</Link>
            <Link href="/Events" className="py-2 hover:text-rose-600" onClick={closeMobile}>Events</Link>
            <Link href="/BookingList" className="py-2 hover:text-rose-600" onClick={closeMobile}>Booking List</Link>
            <Link href="/Contact" className="py-2 hover:text-rose-600" onClick={closeMobile}>Contact</Link>
            <Link href="/booktable" className="mt-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700" onClick={closeMobile}>Book a Table</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
