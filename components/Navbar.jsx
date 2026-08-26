import Link from "next/link";
import { GiCommercialAirplane } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaCompass } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="group flex items-center gap-1"
        >
          {/* Desktop Logo */}
          <div className="hidden items-center md:flex">

            <span className="text-2xl font-black tracking-tight text-indigo-500 transition group-hover:text-indigo-600">
              Travel
            </span>

            <GiCommercialAirplane
              className="mx-1 rotate-[-8deg] text-3xl text-orange-500 transition duration-300 group-hover:translate-x-1 group-hover:rotate-6"
            />

            <span className="text-2xl font-black tracking-tight text-orange-500 transition group-hover:text-orange-600">
              Unbounded
            </span>

          </div>

          {/* Mobile Logo */}
          <div className="flex items-center md:hidden">

            <span className="text-2xl font-black text-indigo-500">
              T
            </span>

            <GiCommercialAirplane
              className="mx-1 text-2xl text-orange-500"
            />

            <span className="text-2xl font-black text-orange-500">
              U
            </span>

          </div>
        </Link>


        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-2 md:flex">

          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <AiFillHome className="text-base transition group-hover:scale-110" />
            Home
          </Link>


          <Link
            href="/about"
            className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <BsInfoCircleFill className="text-base transition group-hover:scale-110" />
            About Us
          </Link>


          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <MdEmail className="text-base transition group-hover:scale-110" />
            Contact Us
          </Link>

        </div>


        {/* ================= MOBILE NAV ================= */}
        <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm md:hidden">

          <Link
            href="/"
            className="group rounded-full p-3 text-slate-600 transition duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <AiFillHome className="text-lg transition group-hover:scale-110" />
          </Link>


          <Link
            href="/about"
            className="group rounded-full p-3 text-slate-600 transition duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <BsInfoCircleFill className="text-lg transition group-hover:scale-110" />
          </Link>


          <Link
            href="/contact"
            className="group rounded-full p-3 text-slate-600 transition duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <MdEmail className="text-lg transition group-hover:scale-110" />
          </Link>

        </div>

      </nav>
    </header>
  );
}