"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }

    } catch (err) {

      toast.error("Server error. Please try later.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="px-4 sm:px-6 py-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div className="md:col-span-7 lg:col-span-8 text-white">

          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">

            Premium{" "}
            <span className="text-[#DD7BDF] bg-white px-3 py-1 rounded-lg shadow-sm">
              Shop for Rent
            </span>{" "}
            in Gurgaon

          </h1>

          <p className="text-lg max-w-2xl text-white/90 leading-relaxed">

            Looking for the perfect **shop for rent in Gurgaon**? Gurgaon is
            one of the fastest growing commercial hubs in India, offering
            premium retail spaces in high-footfall locations.

            <br /><br />

            Renting a shop in Gurgaon gives your business access to corporate
            offices, residential societies, malls, and daily commuters. These
            commercial spaces are ideal for retail stores, cafes, offices,
            and startups looking for prime visibility.

            <br /><br />

            With excellent connectivity, modern infrastructure, and strong
            customer demand, Gurgaon is one of the best places to start or
            expand your business.

          </p>
          <Link href="/how-it-works">
  <button className="relative overflow-hidden bg-white text-[#DD7BDF] px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>

        </div>

        {/* RIGHT FORM */}

        <div className="md:col-span-5 lg:col-span-4">

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-white/40 backdrop-blur-sm">

            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Free Consultation
            </h2>

            <p className="text-sm mb-6 text-gray-500">
              Fill your details and our expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg
                border border-gray-300
                text-gray-900 placeholder-gray-400
                focus:ring-2 focus:ring-[#DD7BDF]
                focus:border-[#DD7BDF]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg
                border border-gray-300
                text-gray-900 placeholder-gray-400
                focus:ring-2 focus:ring-[#DD7BDF]
                focus:border-[#DD7BDF]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg
                border border-gray-300
                text-gray-900 placeholder-gray-400
                focus:ring-2 focus:ring-[#DD7BDF]
                focus:border-[#DD7BDF]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold
                bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]
                hover:opacity-90
                text-white transition duration-300
                disabled:opacity-70 shadow-md cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

};

export default HeroSection;