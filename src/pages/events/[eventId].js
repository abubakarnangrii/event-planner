import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/data/DummyData";
import Header from "@/components/Header";
import Link from "next/link";
import { icons } from "@/data/icon";
import { formatDate } from "@/Helpers/FormatDate";
import DetailCard from "@/components/DetailCard";

const EventsDetailsPage = () => {
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const { eventId } = router.query;
  useEffect(() => {
    const event = getEventById(eventId);
    setEvent(event);
  }, [eventId]);

  if (!event) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header />
      <div className="relative flex flex-col justify-center items-center">
        <div className="w-full h-60  bg-gradient-khaki flex justify-center">
          <h1 className=" text-2xl md:text-4xl lg:text-6xl text-cool font-semibold text-center pt-12">
            {event.title}
          </h1>
        </div>
        <DetailCard event={event} />
      </div>
    </>
  );
};

export default EventsDetailsPage;
