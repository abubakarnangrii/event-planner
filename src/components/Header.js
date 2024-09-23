import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-cool px-4 py-4">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div>
          <Link
            replace
            href={"/"}
            className="text-white font-semibold hover:text-white/90 transition"
          >
            NextEvents
          </Link>
        </div>
        <div>
          <Link
            href={"/events"}
            className="text-white font-semibold hover:text-white/90 transition"
          >
            Browse All Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
