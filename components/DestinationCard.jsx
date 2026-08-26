"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function DestinationCard({ destination }) {
  const router = useRouter();

  const handleBookNow = () => {
     router.push(`/booking/${destination.id}`);
  };

  return (
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

          {/* View Details */}

          <Link
            href={`/destinations/${destination.id}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800 transition duration-300 hover:bg-slate-200"
          >
            Details
          </Link>


          {/* Enquire */}

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
  );
}