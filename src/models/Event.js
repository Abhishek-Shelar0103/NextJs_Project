import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },      // Event Name
  date: { type: Date, required: true },
  guests: { type: Number, required: true },
  contact: { type: String, required: true },   // Phone or Email
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
