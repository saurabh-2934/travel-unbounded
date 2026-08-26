import HeroSection from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import { destinations } from "@/data/destination";

export default function Home() {
  const indiaDestinations = destinations.filter(
    (destination) => destination.category === "India"
  );

  const internationalDestinations = destinations.filter(
    (destination) => destination.category !== "India"
  );

  return (
    <main>
      {/* HERO */}
      <HeroSection />

      {/* INDIA DESTINATIONS */}
      <div id="destinations">
        <DestinationSection
          subtitle="Explore India"
          title="Journeys Across India"
          description="Discover India's most beautiful destinations, from tropical beaches and peaceful backwaters to dramatic Himalayan peaks."
          destinations={indiaDestinations}
          showViewAll={true}
        />
      </div>

      {/* INTERNATIONAL DESTINATIONS */}
      <div className="bg-slate-50">
        <DestinationSection
          subtitle="Go Beyond Borders"
          title="Extraordinary International Escapes"
          description="Explore incredible landscapes, cultures and experiences across the world."
          destinations={internationalDestinations}
        />
      </div>
    </main>
  );
}