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

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
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
        body: JSON.stringify({
          ...formData,
          numberOfPeople: Number(formData.numberOfPeople),
          numberOfChildren: Number(formData.numberOfChildren),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit enquiry"
        );
      }

      // SUCCESS
      setSuccess(
        "Your enquiry has been submitted successfully!"
      );

      setLoading(false);

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (err) {
      console.error("Enquiry error:", err);

      setLoading(false);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  // =====================================================
  // LOADING / SUCCESS / FORM
  // =====================================================

  return (
    <section className="min-h-[calc(100vh-160px)]">

      {/* =========================
          LOADING STATE
      ========================= */}
      {loading && (
        <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4">
          <Loader />
        </div>
      )}

      {/* =========================
          SUCCESS STATE
      ========================= */}
      {!loading && success && (
        <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4">

          <div className="w-full max-w-md rounded-2xl border border-green-200 bg-green-50 p-6 text-center shadow-xl sm:p-8">

            {/* Success Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <span className="text-4xl font-bold text-green-600">
                ✓
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-bold text-green-800 sm:text-2xl">
              Enquiry Submitted!
            </h2>

            {/* Message */}
            <p className="mt-3 text-sm leading-6 text-green-700 sm:text-base">
              {success}
            </p>

            {/* Redirect */}
            <p className="mt-4 text-xs text-green-600 sm:text-sm">
              Redirecting you to the home page...
            </p>

          </div>
        </div>
      )}

      {/* =========================
          FORM STATE
      ========================= */}
      {!loading && !success && (
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">

          {/* =========================
              ERROR MESSAGE
          ========================= */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">

              <div className="flex items-start gap-3">

                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <span className="text-sm font-bold text-red-600">
                    !
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-red-800">
                    Submission Failed
                  </h3>

                  <p className="mt-1 text-sm text-red-700">
                    {error}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* =========================
              FORM
          ========================= */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-5 shadow-lg sm:p-8"
          >

            {/* TITLE */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Book Your Trip
              </h1>

              <p className="mt-2 text-sm text-gray-600">
                Fill in your details and our travel expert
                will get in touch with you.
              </p>
            </div>

            {/* =========================
                FULL NAME
            ========================= */}
            <div className="mb-5">

              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

            </div>

            {/* =========================
                CONTACT
            ========================= */}
            <div className="mb-5">

              <label className="mb-2 block text-sm font-medium text-gray-900">
                Contact Number
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                {/* Country Code */}
                <div className="sm:col-span-1">

                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="+91">
                      India (+91)
                    </option>

                    <option value="+1">
                      USA (+1)
                    </option>

                    <option value="+44">
                      UK (+44)
                    </option>

                    <option value="+61">
                      Australia (+61)
                    </option>

                    <option value="+971">
                      UAE (+971)
                    </option>
                  </select>

                </div>

                {/* Phone */}
                <div className="sm:col-span-2">

                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter contact number"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

              </div>
            </div>

            {/* =========================
                EMAIL
            ========================= */}
            <div className="mb-5">

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

            </div>

            {/* =========================
                TRIP DETAILS
            ========================= */}
            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Date */}
              <div>

                <label
                  htmlFor="dateOfTravel"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Date of Travel
                </label>

                <input
                  id="dateOfTravel"
                  type="date"
                  name="dateOfTravel"
                  value={formData.dateOfTravel}
                  onChange={handleChange}
                  required
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

              </div>

              {/* People */}
              <div>

                <label
                  htmlFor="numberOfPeople"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Number of People
                </label>

                <input
                  id="numberOfPeople"
                  type="number"
                  name="numberOfPeople"
                  min="1"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

              </div>

              {/* Children */}
              <div>

                <label
                  htmlFor="numberOfChildren"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Number of Children
                </label>

                <input
                  id="numberOfChildren"
                  type="number"
                  name="numberOfChildren"
                  min="0"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

              </div>

              {/* Hotel */}
              <div>

                <label
                  htmlFor="hotelCategory"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Hotel Category
                </label>

                <select
                  id="hotelCategory"
                  name="hotelCategory"
                  value={formData.hotelCategory}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="Standard">
                    Standard
                  </option>

                  <option value="Deluxe">
                    Deluxe
                  </option>

                  <option value="Luxury">
                    Luxury
                  </option>
                </select>

              </div>

            </div>

            {/* =========================
                SUBMIT
            ========================= */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Submit Enquiry
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              By submitting this form, you agree to be
              contacted regarding your travel enquiry.
            </p>

          </form>
        </div>
      )}

    </section>
  );
}