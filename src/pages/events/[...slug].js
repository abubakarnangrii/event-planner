import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventCard from "@/components/EventCard";
import { getFilteredEvents } from "@/data/DummyData";

const EventsFilterPage = () => {
  const [filterEvents, setFilterEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { year, month } = router.query;

  useEffect(() => {
    if (!year || !month) return;
    const numYear = Number(year);
    const numMonth = Number(month);
    const events = getFilteredEvents({ year: numYear, month: numMonth });
    setFilterEvents(events);
    setLoading(false);
  }, [year, month]);

  if (loading) {
    return <p>Loading events...</p>;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 py-20">
        <h1 className="text-2xl text-cool font-semibold">
          Events in {month} {year}
        </h1>
        {filterEvents.length > 0 ? (
          filterEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
              date={event.date}
              location={event.location}
            />
          ))
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
