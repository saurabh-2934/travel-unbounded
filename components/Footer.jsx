import Link from "next/link";
import {
  GiCommercialAirplane,
  GiPalmTree,
} from "react-icons/gi";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">


      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">

            <Link
              href="/"
              className="group inline-flex items-center"
            >

              <span className="text-2xl font-black tracking-tight text-indigo-400">
                Travel
              </span>

              <GiCommercialAirplane className="mx-1 rotate-[-8deg] text-3xl text-orange-500 transition duration-300 group-hover:translate-x-1" />

              <span className="text-2xl font-black tracking-tight text-orange-500">
                Unbounded
              </span>

            </Link>


            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              We create meaningful journeys designed around you. From
              breathtaking landscapes to authentic local experiences,
              discover a world beyond ordinary travel.
            </p>


            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter />
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-lg font-bold">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href="/"
                className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/destinations"
                className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/booking"
                className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
              >
                Plan Your Trip
              </Link>

              <Link
                href="/contact"
                className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* ================= DESTINATIONS ================= */}
          <div>

            <h3 className="text-lg font-bold">
              Popular Destinations
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href="/destinations/kerala"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-400"
              >
                <GiPalmTree />
                Kerala
              </Link>

              <Link
                href="/destinations/ladakh"
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                Ladakh
              </Link>

              <Link
                href="/destinations/goa"
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                Goa
              </Link>

              <Link
                href="/destinations/kenya"
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                Kenya Safari
              </Link>

              <Link
                href="/destinations/vietnam"
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                Ha Long Bay
              </Link>

              <Link
                href="/destinations/iceland"
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                Iceland
              </Link>

            </div>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-lg font-bold">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Address */}
              <div className="flex gap-4">

                <FaMapMarkerAlt className="mt-1 shrink-0 text-emerald-400" />

                <p className="text-sm leading-6 text-slate-400">
                  541, 7th Main Rd,
                  <br />
                  HAL 2nd Stage,
                  <br />
                  Indiranagar,
                  <br />
                  Bengaluru – 560008
                </p>

              </div>


              {/* Phone */}
              <div className="flex items-center gap-4">

                <FaPhoneAlt className="shrink-0 text-emerald-400" />

                <a
                  href="tel:+919876543210"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  +91 98765 43210
                </a>

              </div>


              {/* Email */}
              <div className="flex items-center gap-4">

                <FaEnvelope className="shrink-0 text-emerald-400" />

                <a
                  href="mailto:hello@travelunbounded.com"
                  className="break-all text-sm text-slate-400 transition hover:text-white"
                >
                  hello@travelunbounded.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-10">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="text-xs text-slate-500 transition hover:text-white sm:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-slate-500 transition hover:text-white sm:text-sm"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}