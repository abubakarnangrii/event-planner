import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { getFilteredEvents } from "@/data/DummyData";

const EventsFilterPage = () => {
  const [filterEvents, setFilterEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { year, month } = router.query;

  useEffect(() => {
    if (!year || !month) return;

    // Convert year to number
    const numYear = Number(year);
    const numMonth = Number(month);

    // Fetch filtered events
    const events = getFilteredEvents({ year: numYear, month: numMonth });
    setFilterEvents(events);
    setLoading(false);
  }, [year, month]);

  if (loading) {
    return <p>Loading events...</p>;
  }
console.log(filterEvents)
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-y-4 py-20">
        <h1 className="text-2xl text-cool font-semibold">
          Events in {month} {year}
        </h1>
        {filterEvents.length > 0 ? (
          <EventCard featuredEvents={filterEvents} />
        ) : (
          <p className="text-cool font-semibold text-lg">
            No events available on this date.
          </p>
        )}
      </div>
    </>
  );
};

export default EventsFilterPage;