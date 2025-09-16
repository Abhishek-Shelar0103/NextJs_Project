import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // make sure a name is always provided
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {   // better to keep lowercase and consistent
      type: String,
      required: true,
    },
    guests: {  // clearer than "no_people"
      type: Number,
      required: true,
      min: 1,
    },
    date: {
      type: Date,
      required: true,
    },
    // time: {
    //   type: String, // keep as string if you only store "18:30", or Date if full timestamp
    //   required: true,
    // },
    // requests: {
    //   type: String,
    //   default: "",
    //   trim: true,
    // },
  },
  // { timestamps: true } // adds createdAt & updatedAt automatically
);
export default mongoose.models.User || mongoose.model("User", BookingSchema);
