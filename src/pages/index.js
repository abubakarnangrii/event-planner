import localFont from "next/font/local";
import EventCard from "@/components/EventCard";
import { getFeaturedEvents } from "@/data/DummyData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 py-20">
        <h1 className="text-2xl text-cool font-semibold">Featured Events</h1>
        {featuredEvents.length > 0 ? (
          featuredEvents.map((featuredEvent) => (
            <EventCard
              key={featuredEvent.id}
              id={featuredEvent.id}
              title={featuredEvent.title}
              image={featuredEvent.image}
              date={featuredEvent.date}
              location={featuredEvent.location}
            />
          ))
        ) : (
          <p className="text-cool font-semibold text-lg">
            No events available at the moment.
          </p>
        )}
      </div>
    </>
  );
}
