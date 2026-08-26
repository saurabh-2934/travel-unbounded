import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCompass,
  FaPlay,
  FaStar,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}

      <Image
        src="/Images/hero.jpg"
        alt="Beautiful travel destination"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10">

        <div className="max-w-3xl">

          {/* Small badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">

            <FaCompass className="text-orange-400" />

            <span>Discover • Explore • Experience</span>

          </div>


          {/* Main Heading */}

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

            India's Most Trusted

            <span className="block text-orange-400">
              Experiential
            </span>

            Travel Experts

          </h1>


          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl">

            We don't just plan holidays. We create unforgettable
            experiences built around you — from the peaceful backwaters
            of Kerala to the wild landscapes of Kenya.

          </p>


          {/* ================= BUTTONS ================= */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#destinations"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
            >

              <FaPlay className="text-xs" />

              Explore Destinations

            </Link>

          </div>


          {/* ================= TRUST INFORMATION ================= */}

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">

            <div className="flex items-center gap-3">

              <div className="flex -space-x-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-orange-400 text-xs font-bold text-white">
                  A
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs font-bold text-white">
                  R
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-xs font-bold text-white">
                  S
                </div>

              </div>

              <div>

                <p className="text-sm font-bold text-white">
                  5,000+ Happy Travelers
                </p>

                <div className="flex items-center gap-1 text-xs text-white/70">

                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />

                  <span className="ml-1">
                    4.9/5
                  </span>

                </div>

              </div>

            </div>


            {/* Divider */}

            <div className="hidden h-10 w-px bg-white/30 sm:block" />


            {/* Experience */}

            <div>

              <p className="text-2xl font-black text-white">
                12+
              </p>

              <p className="text-xs text-white/70">
                Years of Experience
              </p>

            </div>


            {/* Divider */}

            <div className="hidden h-10 w-px bg-white/30 sm:block" />


            {/* Destinations */}

            <div>

              <p className="text-2xl font-black text-white">
                30+
              </p>

              <p className="text-xs text-white/70">
                Destinations
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SCROLL INDICATOR ================= */}

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-white/70 sm:flex">

        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <div className="h-10 w-6 rounded-full border border-white/40 p-1">

          <div className="mx-auto h-2 w-1 rounded-full bg-white animate-bounce" />

        </div>

      </div>

    </section>
  );
}