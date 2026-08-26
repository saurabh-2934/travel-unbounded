
export default function AboutUs() {
  return (
    <main className="bg-white text-zinc-900">
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/Images/kerala.jpg')",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            About Travel Unbounded
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Travel Beyond
            <span className="block text-emerald-300">
              The Ordinary
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            We don't just plan holidays. We create meaningful journeys,
            unforgettable experiences, and stories that stay with you long
            after you return home.
          </p>

        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Our Story
            </p>

            <h2 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
              India's Most Trusted Experiential Travel Experts.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-zinc-600 sm:text-lg">

              <p>
                Travel Unbounded was born from a simple belief — that the
                best journeys aren't sold from a catalogue. They're built
                around the people taking them.
              </p>

              <p>
                Headquartered in Bangalore with offices in Kerala and Nairobi,
                we design trips that blend comfort, culture, and raw nature.
                Every destination, resort, and activity we recommend has been
                personally experienced or carefully vetted by our team.
              </p>

              <p>
                From spotting the Big Five at dawn in the Masai Mara to
                cruising Ha Long Bay at sunset, we go where real stories are
                written — and we bring you along.
              </p>

            </div>
          </div>


          {/* Story Card */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/Images/goaBeach.jpg"
                alt="Travel Unbounded destination"
                className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 left-4 rounded-2xl bg-white p-6 shadow-xl sm:left-8">
              <p className="text-3xl font-bold text-emerald-600">
                10+
              </p>

              <p className="mt-1 text-sm text-zinc-600">
                Extraordinary destinations
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= OFFICES ================= */}
      <section className="bg-zinc-950 px-6 py-20 text-white sm:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Find Us
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Our Offices Around The World
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Our local teams bring firsthand knowledge, genuine connections,
              and on-the-ground expertise to every journey we create.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* Bangalore */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                🇮🇳
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Headquarters
              </p>

              <h3 className="text-2xl font-bold">
                Bengaluru
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                541, 7th Main Rd, HAL 2nd Stage
                <br />
                Indiranagar
                <br />
                Bengaluru – 560008
                <br />
                India
              </p>

            </div>


            {/* Kerala */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                🌴
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Kerala Office
              </p>

              <h3 className="text-2xl font-bold">
                Kochi
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                LR Towers, S Janatha Road
                <br />
                Palavivatton
                <br />
                Kochi – 682025
                <br />
                India
              </p>

            </div>


            {/* Nairobi */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                🦁
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Kenya Office
              </p>

              <h3 className="text-2xl font-bold">
                Nairobi
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                Westpark Towers, Muthithi Road
                <br />
                Nairobi, P.O. Box 6950
                <br />
                Postal Code 00100
                <br />
                Kenya
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-20 sm:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Why Travel Unbounded
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Travel planned by people who actually travel.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              We believe great travel comes from experience, attention to
              detail, and genuine local knowledge.
            </p>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Point 1 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 text-4xl">
                ✈️
              </div>

              <h3 className="text-xl font-bold">
                Personally Vetted
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                We personally experience and carefully evaluate destinations,
                hotels, activities, and experiences before recommending them.
              </p>

            </div>


            {/* Point 2 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 text-4xl">
                🧭
              </div>

              <h3 className="text-xl font-bold">
                Local Experts
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Our trusted local guides help you discover authentic places,
                hidden gems, and experiences beyond typical tourist routes.
              </p>

            </div>


            {/* Point 3 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 text-4xl">
                🗺️
              </div>

              <h3 className="text-xl font-bold">
                Custom Itineraries
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Every journey is designed around you, from your interests and
                travel style to your preferred pace and budget.
              </p>

            </div>


            {/* Point 4 */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 text-4xl">
                📞
              </div>

              <h3 className="text-xl font-bold">
                24/7 Support
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                From the moment you book until you return home, our team is
                available whenever you need help during your journey.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 sm:px-10 md:pb-28">

        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(5,30,25,0.75), rgba(5,30,25,0.75)), url('/Images/goa.jpg')",
          }}
        >

          <div className="px-6 py-20 text-center text-white sm:px-10 md:py-24">

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Your next story starts here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Tell us where you want to go, and we'll help you turn that
              dream into an unforgettable journey.
            </p>

            <a
              href="/"
              className="mt-8 inline-block rounded-full bg-emerald-400 px-8 py-4 font-semibold text-zinc-950 transition hover:bg-emerald-300 hover:shadow-lg"
            >
              Plan My Journey
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}