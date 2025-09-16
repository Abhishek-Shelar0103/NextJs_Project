// components/BookTableForm.tsx
"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


export default function BookTableForm() {
  // -------------------- STATE --------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 2,
    date: new Date(),
    time: new Date(),
    requests: "",
  });

  // -------------------- HANDLERS --------------------
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
        alert("✅ Table booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: 2,
          requests: "",
          date: "",
          time: "",
        });
      } else {
        alert("❌ " + (data.error || "Failed to book table"));
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong!");
    }
  };

  // -------------------- JSX --------------------
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: 4,
          bgcolor: "white",
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        {/* ---------- Title ---------- */}
        <Typography
          variant="h5"
          mb={3}
          fontWeight="bold"
          textAlign="center"
          color="primary"
        >
          Book a Table
        </Typography>

        {/* ---------- Form Fields ---------- */}
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              fullWidth
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              type="tel"
              fullWidth
              required
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </Grid>

          {/* Guests */}
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Guests"
              fullWidth
              value={formData.guests}
              onChange={(e) =>
                handleChange("guests", parseInt(e.target.value, 10))
              }
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Date */}
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Date"  
              value={formData.date}
              onChange={(newValue) => handleChange("date", newValue)}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Grid>

          {/* Time */}
          <Grid item xs={12} sm={6}>
            <TimePicker
              label="Time"
              value={formData.time}
              onChange={(newValue) => handleChange("time", newValue)}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Grid>

          {/* Special Requests */}
          <Grid item xs={12}>
            <TextField
              label="Special Requests"
              fullWidth
              multiline
              rows={3}
              value={formData.requests}
              onChange={(e) => handleChange("requests", e.target.value)}
            />
          </Grid>
        </Grid>

        {/* ---------- Submit Button ---------- */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, py: 1.2, fontSize: "16px" }}
        >
          Book Now
        </Button>
      </Box>
    </LocalizationProvider>
  );
}
