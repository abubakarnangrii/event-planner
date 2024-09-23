import React, { useEffect, useState } from "react";
import { getAllEvents } from "@/data/DummyData";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import Link from "next/link";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState("01");

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
  

  return (
    <div className="bg-text">
      <Header />
      <div className="flex flex-col justify-center items-center gap-y-4 py-20">
        <div className="flex justify-around  mb-4 bg-white w-[600px] rounded py-3 text-black">
          <div className="flex justify-center items-center gap-3 px-4">
            <p className=" text-lg font-semibold">Year</p>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
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
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
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
            <Link
              href={{
                pathname: `/events/${selectedYear}/${selectedMonth}`,
                query: { year: selectedYear, month: selectedMonth },
              }}
              className="bg-cool text-white py-2 px-4 flex items-center rounded hover:text-white/80 transition"
            >
              <p className="mr-2">Find Event</p>
            </Link>
          </div>
        </div>
        <h1 className="text-2xl text-cool font-semibold">All Events</h1>
        {events.length > 0 ? (
          <EventCard featuredEvents={events} />
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
