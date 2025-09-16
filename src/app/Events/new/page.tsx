"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewEventPage() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    guests: "",
    contact: "",
  });
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Event booked successfully ✅");
        setForm({ name: "", date: "", guests: "", contact: "" });
        setTimeout(() => router.push("/Events"), 1000);
      } else {
        setStatus("Failed to book ❌");
      }
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🎉 Book an Event</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Event Name"
            className="w-full border rounded-lg p-3 text-black"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 text-black"
            required
          />
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            className="w-full border rounded-lg p-3 text-black"
            required
          />
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Email / Phone"
            className="w-full border rounded-lg p-3 text-black"
            required
          />

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Book Event
            </button>
        </form>

        {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
      </div>
    </div>
  );
}
