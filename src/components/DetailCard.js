import React from "react";
import { icons } from "@/data/icon";
import { formatDate } from "@/Helpers/FormatDate";

const DetailCard = ({ event }) => {
  return (
    <>
      <div className="absolute top-40 flex justify-center items-center w-5/6 h-[470px] md:w-[700px] md:h-[300px] bg-slate-300 px-10 rounded-lg overflow-hidden flex-col md:flex-row gap-4">
        <div className="w-full  h-full md:w-4/12  md:h-[200px] rounded-full overflow-hidden border-4 border-white my-4">
          <img
            src={`/${event.image}`}
            alt={event.title || "Event image"}
            onError={(e) => {
              e.target.src = "/path/to/fallback/image.jpg";
            }} // Add your fallback image path
            className="object-fit w-full h-full"
          />
        </div>

        <div className="w-full md:w-8/12">
          <div className="text-md text-gray-500 flex items-start gap-y-2 flex-col mb-2">
            {icons.calendar}
            <p>{formatDate(event.date)}</p>
          </div>

          <div className="text-md text-gray-500 flex items-start gap-y-2 flex-col mb-2">
            {icons.location}
            <p>{event.location}</p>
          </div>

          <div
            className="text-sm text-gray-500 flex items-start gap-y-2 flex-col mt-5"
           
          >
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
