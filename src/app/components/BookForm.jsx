import React from "react";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

const BookForm = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // can be "success" | "error" | "warning" | "info"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 2,
    date: new Date(),
  });
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSnackbar({
          open: true,
          message: "✅ Table booked successfully!",
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: 2,
          date: "",
        });
        setTimeout(() => router.push("/"), 1000);
      } else {
        setSnackbar({
          open: true,
          message: data.error || "❌ Failed to book table",
          severity: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "❌ Something went wrong!",
        severity: "error",
      });
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Background Blur */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)} // close on background click
        ></div>

        {/* Popup Form */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md z-10 animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Book a Table
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              pattern="[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              minLength={10}
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="number"
              placeholder="Number of Guests"
              min={1}
              max={20}
              value={formData.guests}
              onChange={(e) =>
                handleChange("guests", parseInt(e.target.value, 10))
              }
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="date"
              placeholder="Date"
              value={
                formData.date ? formData.date.toISOString().split("T")[0] : ""
              }
              onChange={(e) => handleChange("date", new Date(e.target.value))}
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <button
              type="submit"
              //   onClick={() => setIsOpen(false)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Submit
            </button>
          </form>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={4000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={() => setSnackbar({ ...snackbar, open: false })}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>

          {/* Close Button */}
        </div>
      </div>
    </div>
  );
};

export default BookForm;
