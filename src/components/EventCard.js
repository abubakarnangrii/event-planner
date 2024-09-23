import React from "react";
import { icons } from "@/data/icon";
import Link from "next/link";
import { formatDate } from "@/Helpers/FormatDate";

const EventCard = ({ featuredEvents }) => {

  return featuredEvents.map((event) => (
    <div
      key={event.id}
      className="flex justify-start items-center w-5/6 md:w-[600px] bg-white shadow-lg rounded-lg overflow-hidden flex-col md:flex-row gap-4 "
    >
      <div className="w-full md:w-[200px] h-[200px]">
        <img
          src={`/${event.image}`}
          alt={event.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-xl text-black font-bold mb-4 ">{event.title}</h2>
        <div className="text-sm text-gray-500 flex items-center mb-2">
          {icons.calendar}
          <p className="ml-1">{formatDate(event.date)}</p>
        </div>
        <div className="text-sm text-gray-500 flex items-center mb-2">
          {icons.location}
          <p className="ml-1">{event.location}</p>
        </div>
        <div className="flex justify-end items-center pt-4">
          <Link
            href={{
              pathname: "/events/[id]",
              query: { id: event.id },
            }}
            className="bg-cool text-white py-2 px-4 flex items-center rounded hover:text-white/80 transition"
          >
            <p className="mr-2">Explore Event</p>
            {icons.arrow}
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default EventCard;
