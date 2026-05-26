"use client";

import React, { useState } from "react";
import AlertPopup from "./AlertPopup";
import Link from "next/link";
const HeroSection = () => {

   const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [popup, setPopup] = useState({
  open: false,
  type: "success",
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
    setPopup({
        open: true,
        type: "error",
        message: "Phone number must be exactly 10 digits",
      });
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
  setPopup({
    open: true,
    type: "success",
    message: "Enquiry submitted successfully!",
  });

  setFormData({
    name: "",
    phone: "",
    message: "",
  });
} else {
  setPopup({
    open: true,
    type: "error",
    message: "Something went wrong. Try again.",
  });
}

    } catch (err) {

      setPopup({
  open: true,
  type: "error",
  message: "Server error. Please try later.",
});

  setFormData({
    name: "",
    phone: "",
    message: "",
  });


    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="px-4 sm:px-6 py-8 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF]">

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

          <p className="text-lg max-w-4xl text-white/90 leading-relaxed">

            Launch your business from the heart of India's corporate capital! Finding the perfect shop for rent in Gurgaon is the most important decision for your retail, F&B, or service business — and we're here to make it the right one. Gurgaon's booming commercial landscape, fuelled by a high-spending population of over 15 lakh residents plus a massive daily floating workforce from Delhi and NCR, creates insatiable demand for retail, dining, salon, clinic, and service businesses. Whether you're looking for a high-footfall ground-floor retail shop in a premium sector market complex, a corner unit in a newly developed commercial high street, or a smaller shop in a residential colony for a neighbourhood business, Gurgaon's commercial rental market has the right fit. Prime commercial shop locations in Gurgaon include MG Road, Ardee City Market, Sector 14 Market, DLF Galleria, Sohna Road commercial hubs, and the buzzing Cyber Hub corridor. Our listings provide honest rental rates, detailed shop specifications, and direct owner contacts — so you can focus on building your business, not searching endlessly. Rent the right shop in Gurgaon today and give your business the address it deserves!

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
<AlertPopup
  open={popup.open}
  type={popup.type}
  message={popup.message}
  onClose={() =>
    setPopup({
      ...popup,
      open: false,
    })
  }
/>
      </div>

    </section>

  );

};

export default HeroSection;