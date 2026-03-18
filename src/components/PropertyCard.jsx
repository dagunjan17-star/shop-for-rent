"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function PropertyCard({ property }) {

  const [open, setOpen] = useState(false);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;

    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();

    return `${formattedNumber} ${formattedUnit}`;
  };

  return (
    <>
      <div className="bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden flex flex-col h-full">

        {/* IMAGE */}

        <div className="relative w-full h-44 overflow-hidden">

          <Image
            src={property?.media?.url || "/no-image.png"}
            alt={property.title}
            width={400}
            height={250}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

          {/* BADGE */}

          <span
            onClick={() => setOpen(true)}
            className="
              absolute top-4 left-0
              bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]
              text-white
              text-xs md:text-sm
              px-3 py-1
              font-semibold
              shadow-lg
              rounded-r-full
              tracking-wide cursor-pointer
            "
          >
            {property.propertyType || "Shop"}
          </span>

        </div>

        {/* CONTENT */}

        <div className="p-3 flex flex-col flex-1">

          <h2 className="text-base font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {property.locality}
          </p>

          {/* STATS */}

          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">

            <div className="bg-gray-50 rounded-lg p-2">

              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Type
              </span>

              <span className="font-semibold text-gray-900 text-sm">
                {property.propertyCategory || "Commercial"}
              </span>

            </div>

            <div className="bg-gray-50 rounded-lg p-2">

              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Status
              </span>

              <span className="font-semibold text-[#DD7BDF] text-sm">
                {property.status || "Available"}
              </span>

            </div>

          </div>

          <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
            {property.description ||
              "Premium commercial shop space located in a high-demand Gurgaon location with strong customer visibility."}
          </p>

          <div className="flex-1" />

          {/* BUTTONS */}

          <div className="mt-4 pt-4 border-t border-gray-100">

            <div className="flex gap-3">

              {/* CONTACT BUTTON */}

              <button
                onClick={() => setOpen(true)}
                className="flex-1
                bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]
                text-white py-1.5 rounded
                text-sm font-medium
                hover:opacity-90
                transition shadow cursor-pointer"
              >
                Price on Call
              </button>

              {/* VIEW DETAILS */}

              <Link
                href={`/properties/${property.slug}`}
                className="flex-1 border border-[#DD7BDF]
                text-[#DD7BDF] py-1.5 rounded
                text-sm font-medium text-center
                hover:bg-[#DD7BDF] hover:text-white
                transition cursor-pointer"
              >
                View Details
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* POPUP */}

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={property.title}
      />
    </>
  );
}