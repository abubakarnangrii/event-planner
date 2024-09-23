import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventCard from "@/components/EventCard";
import { getFilteredEvents } from "@/data/DummyData";
import Link from "next/link";

const EventsFilterPage = () => {
  const [filterEvents, setFilterEvents] = useState([]);
  const router = useRouter();
  const filterData = router.query.slug
  const  year = filterData[0];
  const month = filterData[1];
  console.log(year, month);


  const numYear = Number(year);
  const numMonth = Number(month);


  const isValidYear = !isNaN(numYear) && numYear >= 2000 && numYear <= new Date().getFullYear();
  const isValidMonth = !isNaN(numMonth) && numMonth >= 1 && numMonth <= 12;


  useEffect(() => {
    if (isValidYear && isValidMonth) {
      const events = getFilteredEvents({ year: numYear, month: numMonth });
      setFilterEvents(events);
    } else {
      setFilterEvents([]); 
    }
  }, [year, month, isValidYear, isValidMonth, numYear, numMonth]);

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 py-20">
      <h1 className="text-2xl text-cool font-semibold">
        Events in {month} {year}
      </h1>
      <Link href={'/events'}  className="bg-cool text-white py-2 px-4 flex items-center rounded hover:text-white/80 transition">
        Show all events
      </Link>
      {isValidYear && isValidMonth ? (
        filterEvents.length > 0 ? (
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
        )
      ) : (
        <p className="text-cool font-semibold text-lg">
          Please select a valid year and month.
        </p>
      )}
    </div>
  );
};

export default EventsFilterPage;
