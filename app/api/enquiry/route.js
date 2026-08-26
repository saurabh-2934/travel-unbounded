import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import EnquiryData from "@/models/Enquiry";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    // Basic request validation
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request data",
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      contactNumber,
      countryCode,
      email,
      dateOfTravel,
      numberOfPeople,
      hotelCategory,
      numberOfChildren,
    } = body;

    // Check required fields
    if (
      !fullName ||
      !contactNumber ||
      !countryCode ||
      !email ||
      !dateOfTravel ||
      numberOfPeople === undefined ||
      !hotelCategory
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide all required fields",
        },
        { status: 400 }
      );
    }

    // Validate travel date
    const travelDate = new Date(dateOfTravel);

    if (isNaN(travelDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid travel date",
        },
        { status: 400 }
      );
    }

    if (travelDate <= new Date()) {
      return NextResponse.json(
        {
          success: false,
          message: "Date of travel must be a future date",
        },
        { status: 400 }
      );
    }

    // Validate number of people
    if (Number(numberOfPeople) < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Number of people must be at least 1",
        },
        { status: 400 }
      );
    }

    // Validate children
    if (
      numberOfChildren !== undefined &&
      Number(numberOfChildren) < 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Number of children cannot be negative",
        },
        { status: 400 }
      );
    }

    // Create enquiry
    const enquiry = await EnquiryData.create({
      fullName: fullName.trim(),
      contactNumber: contactNumber.trim(),
      countryCode: countryCode.trim(),
      email: email.trim().toLowerCase(),
      dateOfTravel: travelDate,
      numberOfPeople: Number(numberOfPeople),
      hotelCategory,
      numberOfChildren:
        numberOfChildren !== undefined
          ? Number(numberOfChildren)
          : 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
        data: enquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry Error:", error);

    // Mongoose validation errors
    if (error.name === "ValidationError") {
      const errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting the enquiry",
      },
      { status: 500 }
    );
  }
}