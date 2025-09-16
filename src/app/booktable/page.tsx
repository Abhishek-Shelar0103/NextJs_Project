// src/app/booktable/page.tsx
"use client";

import BookTableForm from "../components/BookTableForm";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <BookTableForm />
      </div>
    </main>
  );
}
