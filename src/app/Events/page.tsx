"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">📅 Event Bookings</h1>

        <div className="flex justify-end mb-4">
          <Link
            href="/Events/new"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            + New Booking
          </Link>
        </div>

        {events.length === 0 ? (
          <p className="text-center text-gray-600">No events booked yet.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li
                key={event._id}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
                <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
                <p className="text-gray-600">Guests: {event.guests}</p>
                <p className="text-gray-600">Contact: {event.contact}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
