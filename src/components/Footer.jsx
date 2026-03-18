"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  'Ashok Vihar',           'DLF Phase 1', 'DLF Phase 2',
  'DLF Phase 4',           'DLF phase 3', 'Golf Course Road',
  'MG Road',               'Manesar',     'Palam Vihar',
  'Palam Vihar Extension', 'Sadar Bazar', 'Sector 102',
  'Sector 103',            'Sector 105',  'Sector 106',
  'Sector 107',            'Sector 108',  'Sector 109',
  'Sector 10A',            'Sector 110',  'Sector 112',
  'Sector 113',            'Sector 114',  'Sector 14',
  'Sector 2',              'Sector 23',   'Sector 25',
  'Sector 28',             'Sector 3',    'Sector 30',
  'Sector 31',             'Sector 33',   'Sector 37D',
  'Sector 38',             'Sector 39',   'Sector 43',
  'Sector 45',             'Sector 46',   'Sector 47',
  'Sector 48',             'Sector 49',   'Sector 50',
  'Sector 51',             'Sector 53',   'Sector 56',
  'Sector 57',             'Sector 58',   'Sector 59',
  'Sector 60',             'Sector 61',   'Sector 62',
  'Sector 63',             'Sector 63A',  'Sector 65',
  'Sector 66',             'Sector 67',   'Sector 67A',
  'Sector 68',             'Sector 69',   'Sector 7',
  'Sector 76',             'Sector 77',   'Sector 8',
  'Sector 80',             'Sector 81',   'Sector 82',
  'Sector 83',             'Sector 84',   'Sector 85',
  'Sector 86',             'Sector 88',   'Sector 89',
  'Sector 90',             'Sector 92',   'Sector 93',
  'Sector 99',             'Sohna Road',  'South City 2',
  'Sushant Lok Phase 1'
];

const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {

  const [showAll, setShowAll] = useState(false);

  const initialCount = 50;

  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (

    <footer className="bg-[#0b1120] pt-16 pb-8 px-4 border-t border-[#1a2238]">

      <div className="max-w-7xl mx-auto">

        {/* LOCATIONS */}

        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-400 hover:text-[#FFBBE1] transition duration-300"
                >
                  Shop For Rent in {loc}
                </Link>

                {/* TOOLTIP */}

                <div className="
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200 whitespace-nowrap
                bg-[#111827] text-white text-xs
                px-3 py-1.5 rounded-md shadow-lg
                border border-[#DD7BDF]/40 z-[9999]
                pointer-events-none">

                  Shop For Rent in {loc}

                </div>

              </div>

            ))}

            {/* VIEW MORE */}

            {!showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#DD7BDF] hover:underline"
                >
                  View More...
                </span>

              </div>

            )}

            {/* VIEW LESS */}

            {showAll && locations.length > initialCount && (

              <div>

                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#DD7BDF] hover:underline"
                >
                  View Less...
                </span>

              </div>

            )}

          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="border-t border-[#1a2238] pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} ShopForRentInGurgaon.com - All rights reserved
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By - {" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DD7BDF] hover:underline"
            >
              Parchar Manch
            </Link>
          </p>

        </div>

      </div>

    </footer>

  );

}