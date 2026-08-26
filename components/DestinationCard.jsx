"use client";

import Image from "next/image";
import { FaArrowRight, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DestinationCard({ destination }) {
  const router = useRouter();

  const [showDetails, setShowDetails] = useState(false);

  const handleBookNow = () => {
    router.push(`/booking/${destination.id}`);
  };

  const handleDetails = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  return (
    <>
      {/* ================= DESTINATION CARD ================= */}
      <article className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* ================= IMAGE ================= */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Category badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 shadow backdrop-blur">
              {destination.category === "India"
                ? "India"
                : "International"}
            </span>
          </div>

          {/* Destination name */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <FaMapMarkerAlt className="text-orange-400" />
              <span>{destination.country}</span>
            </div>

            <h3 className="mt-1 text-2xl font-black text-white">
              {destination.name}
            </h3>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-6">

          <p className="line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-600">
            {destination.description}
          </p>

          {/* ================= PRICE ================= */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Starting from
            </p>

            <p className="mt-1 text-2xl font-black text-slate-900">
              ₹{destination.price.toLocaleString("en-IN")}
            </p>

            <p className="text-xs text-slate-400">
              per person
            </p>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 grid grid-cols-2 gap-3">

            {/* Details */}
            <button
              onClick={handleDetails}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800 transition duration-300 hover:bg-slate-200"
            >
              Details
            </button>

            {/* Enquiry */}
            <button
              onClick={handleBookNow}
              className="group/btn flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-indigo-700"
            >
              Enquiry

              <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>

          </div>
        </div>
      </article>

      {/* ================================================= */}
      {/* ================= DETAILS MODAL ================= */}
      {/* ================================================= */}

      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >

          {/* Modal */}
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ================= MODAL IMAGE ================= */}
            <div className="relative h-56 w-full sm:h-72">

              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 100vw, 672px"
                className="object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              >
                <FaTimes />
              </button>

              {/* Title */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <FaMapMarkerAlt className="text-orange-400" />
                  {destination.country}
                </div>

                <h2 className="mt-1 text-3xl font-black text-white">
                  {destination.name}
                </h2>
              </div>
            </div>

            {/* ================= MODAL CONTENT ================= */}
            <div className="p-6 sm:p-8">

              {/* Category */}
              <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
                {destination.category === "India"
                  ? "India"
                  : "International"}
              </span>

              {/* Description */}
              <div className="mt-5">
                <h3 className="text-lg font-bold text-slate-900">
                  About {destination.name}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {destination.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Starting from
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-black text-slate-900">
                    ₹{destination.price.toLocaleString("en-IN")}
                  </span>

                  <span className="pb-1 text-sm text-slate-500">
                    per person
                  </span>
                </div>
              </div>

              {/* ================= ACTIONS ================= */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                {/* Close */}
                <button
                  onClick={handleClose}
                  className="w-full rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100 sm:w-1/2"
                >
                  Close
                </button>

                {/* Enquiry */}
                <button
                  onClick={handleBookNow}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700 sm:w-1/2"
                >
                  Make an Enquiry
                  <FaArrowRight />
                </button>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}