import React, { useEffect, useRef, useState } from "react";
import { getAllEvents } from "@/data/DummyData";
import EventCard from "@/components/EventCard";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const yearInputRef = useRef();
  const monthInputRef = useRef("01");

  useEffect(() => {
    const eventsData = getAllEvents();
    setEvents(eventsData);
  }, []);

  const years = Array.from({ length: 13 }, (_, i) => 2012 + i).reverse();

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const handleFilter = (e) => {
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    router.push({
      pathname: `/events/${selectedYear}/${selectedMonth}`,
      query: { year: selectedYear, month: selectedMonth },
    });
  };
  return (
    <div className="bg-text">
      <div className="flex flex-col justify-center items-center gap-y-4 py-20">
        <div className="flex justify-around  mb-4 bg-white w-[600px] rounded py-3 text-black">
          <div className="flex justify-center items-center gap-3 px-4">
            <p className=" text-lg font-semibold">Year</p>
            <select
              ref={yearInputRef}
              className="border border-cool  rounded p-1.5 w-[100px]"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p className=" text-lg font-semibold">Month</p>
            <select
              ref={monthInputRef}
              className="border border-cool  rounded p-1.5 w-[140px]"
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end items-center ">
            <button
              type="submit"
              onClick={handleFilter}
              className="bg-cool text-white py-2 px-4 flex items-center rounded hover:text-white/80 transition"
            >
              Find Event
            </button>
          </div>
        </div>
        <h1 className="text-2xl text-cool font-semibold">All Events</h1>
        {events.length > 0 ? (
          events.map((event) => (
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
            No events available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllEventsPage;
