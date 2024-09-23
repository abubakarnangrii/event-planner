import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/data/DummyData";
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
    return <p>No event found!</p>;
  }
  return (
    <>
      <div className="relative flex flex-col justify-center items-center">
        <div className="w-full h-60  bg-gradient-khaki flex justify-center">
          <h1 className=" text-2xl md:text-4xl lg:text-6xl text-cool font-semibold text-center pt-12">
            {event.title}
          </h1>
        </div>
        <DetailCard
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
          description={event.description}
        />
      </div>
    </>
  );
};

export default EventsDetailsPage;
