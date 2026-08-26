"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./LoadingSpinner";

export default function BookingForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    countryCode: "+91",
    email: "",
    dateOfTravel: "",
    numberOfPeople: 1,
    hotelCategory: "Standard",
    numberOfChildren: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry");
      }

      // Success message
      setSuccess(
        "Your enquiry has been submitted successfully!"
      );

      // Redirect to home after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (error) {
      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 mt-18">

      {/* Success Message */}
      {success && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-5 text-center mt-32">
          <div className="mb-2 text-3xl">
            ✓
          </div>

          <h3 className="text-lg font-semibold text-green-800">
            Enquiry Submitted!
          </h3>

          <p className="mt-1 text-sm text-green-700">
            {success}
          </p>

          <p className="mt-2 text-xs text-green-600">
            Redirecting you to the home page...
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-center text-sm font-medium text-red-700">
            {error}
          </p>
        </div>
      )}
      {loading ? <Loader /> : (
        !success && 
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
      >

        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Book Your Trip
        </h1>

        {/* Full Name */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Contact */}
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Country Code
            </label>

            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
            >
              <option value="+91">India (+91)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+61">Australia (+61)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Contact Number
            </label>

            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="Enter contact number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />
        </div>

        {/* Trip Details */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Date of Travel
            </label>

            <input
              type="date"
              name="dateOfTravel"
              value={formData.dateOfTravel}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Number of People
            </label>

            <input
              type="number"
              name="numberOfPeople"
              min="1"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Children
            </label>

            <input
              type="number"
              name="numberOfChildren"
              min="0"
              value={formData.numberOfChildren}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Hotel Category
            </label>

            <select
              name="hotelCategory"
              value={formData.hotelCategory}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

      </form>

    )}
    </div>
  );
}