import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
      trim: true,
    },

    countryCode: {
      type: String,
      required: [true, "Country code is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    dateOfTravel: {
      type: Date,
      required: [true, "Date of travel is required"],
      validate: {
        validator: function (value) {
          return value > new Date();
        },
        message: "Date of travel must be a future date",
      },
    },

    numberOfPeople: {
      type: Number,
      required: [true, "Number of people is required"],
      min: [1, "Number of people must be at least 1"],
    },

    hotelCategory: {
      type: String,
      required: [true, "Hotel category is required"],
      enum: {
        values: ["Standard", "Deluxe", "Luxury"],
        message: "Hotel category must be Standard, Deluxe, or Luxury",
      },
    },

    numberOfChildren: {
      type: Number,
      default: 0,
      min: [0, "Number of children cannot be negative"],
    },
  },
  {
    timestamps: true,
  }
);

const EnquiryData =
  mongoose.models.EnquiryData ||
  mongoose.model("EnquiryData", enquirySchema);

export default EnquiryData;