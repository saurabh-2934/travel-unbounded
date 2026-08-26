import DestinationCard from "./DestinationCard";

export default function DestinationSection({
  title,
  subtitle,
  description,
  destinations,
}) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-500">
          {subtitle}
        </p>

        <h2 className="text-4xl font-black text-slate-900">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          {description}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}

        </div>

      </div>
    </section>
  );
}