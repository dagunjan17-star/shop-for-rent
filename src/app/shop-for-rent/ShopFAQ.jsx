"use client";
import { useState } from "react";

export default function ShopFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. How can I find a good shop for rent in Gurgaon?",
      a: "You can use a trusted platform where all listings are verified. Look for location, budget, and footfall. Direct owner contact also helps you make a better decision without confusion.",
    },
    {
      q: "2. What is the average rent for shops in Gurgaon?",
      a: "Rent depends on location and size. Small shops start from ₹10,000, while premium locations can go above ₹1 lakh. Always compare options before finalizing.",
    },
    {
      q: "3. Is it safe to rent a shop without a broker?",
      a: "Yes, if you use a platform with trusted listings. Direct buyer-seller interaction saves money and reduces risk when proper checks are done.",
    },
    {
      q: "4. Which areas are best for shop rental in Gurgaon?",
      a: "Areas like Sector 29, MG Road, and Golf Course Road are popular. They have high footfall and good business opportunities.",
    },
    {
      q: "5. What documents are needed to rent a shop?",
      a: "Basic documents include ID proof, address proof, photos, and rental agreement. Some landlords may ask for business details as well.",
    },
    {
      q: "6. Why should I choose verified listings?",
      a: "Verified listings ensure safety. They provide correct details, real owners, and reduce chances of fraud.",
    },
    {
      q: "7. Can I list my shop for rent for free?",
      a: "Yes, many platforms offer free property listing, allowing owners to upload their shops without paying any charges.",
    },
    {
      q: "8. How does direct owner contact help?",
      a: "It removes middlemen. You can negotiate better, ask questions, and finalize deals faster.",
    },
    {
      q: "9. Is Gurgaon a good place for starting a business?",
      a: "Yes, Gurgaon has strong growth, high demand, and good infrastructure, making it ideal for business.",
    },
    {
      q: "10. What should I check before renting a shop?",
      a: "Check location, rent, documents, and legal approvals. Also ensure the listing is real and trusted before making any payment.",
    },
  ];

  return (
    <section className="bg-[#FFF5FB] py-6 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#DD7BDF]">
          FAQs – Shop for Rent in Gurgaon
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`border border-[#ffd6f0] rounded-xl px-4 py-3 cursor-pointer transition-all duration-300
                ${
                  isOpen
                    ? "bg-[#ffe4f3] shadow-md"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">
                    {faq.q}
                  </span>

                  <span
                    className={`text-black transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}