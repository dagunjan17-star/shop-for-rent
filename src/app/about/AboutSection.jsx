"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF5FB] px-4 py-24">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#DD7BDF]">
                Shops for Rent in Gurgaon
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg max-w-xl">
              Gurgaon has become one of India’s fastest-growing commercial
              hubs. From retail outlets and showrooms to office spaces and
              business centers, finding the right shop for rent in Gurgaon
              can be the key to building a successful business.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]
                text-white shadow-lg hover:opacity-90 transition"
              >
                Explore Shops Now
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#DD7BDF] text-[#DD7BDF]
                hover:bg-[#FFF5FB] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <div className="bg-white border border-[#FFBBE1] rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#DD7BDF]">
              1000+
            </h3>
            <p className="text-gray-600 mt-2">
              Verified Commercial Listings
            </p>

            <div className="h-px bg-[#FFBBE1] my-8"></div>

            <h3 className="text-4xl font-bold text-[#DD7BDF]">
              150+
            </h3>
            <p className="text-gray-600 mt-2">
              Prime Business Locations
            </p>

            <div className="h-px bg-[#FFBBE1] my-8"></div>

            <h3 className="text-4xl font-bold text-[#DD7BDF]">
              3000+
            </h3>
            <p className="text-gray-600 mt-2">
              Business Owners Assisted
            </p>

          </div>
        </div>


        {/* OUR MISSION */}
        <div className="text-center max-w-4xl mx-auto mb-28">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Our mission is to make it easier for entrepreneurs,
            retailers, and business owners to find the perfect shop
            for rent in Gurgaon. Whether you are launching a new
            venture or expanding your existing business, we aim to
            connect you with verified commercial spaces in the most
            promising locations.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            From high-footfall markets to premium commercial hubs
            like Golf Course Road, Sohna Road, Cyber City, and
            Dwarka Expressway, we help you explore the best
            opportunities Gurgaon has to offer.
          </p>

        </div>


        {/* WHY CHOOSE US */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-2xl p-10 border border-[#FFBBE1] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prime Commercial Locations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We list shops in Gurgaon’s most popular business
                locations where footfall, visibility, and growth
                potential are high.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-[#FFBBE1] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our platform focuses on verified commercial property
                listings so that business owners can explore genuine
                opportunities without confusion.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-[#FFBBE1] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Business Growth Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help business owners discover commercial spaces
                that align with their goals, target customers, and
                expansion plans.
              </p>
            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Business Journey in Gurgaon
          </h2>

          <p className="text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore premium shops for rent across Gurgaon’s most
            active commercial hubs and take the next step toward
            growing your business.
          </p>

          {/* <Link
            href="/"
            className="bg-white text-[#DD7BDF] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Browse Shops Now
          </Link> */}

        </div>

      </div>
    </section>
  );
}