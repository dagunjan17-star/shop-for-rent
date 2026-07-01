"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the average rent for a retail shop in Gurgaon?",
    answer:
      "Shop rentals in Gurgaon range from ₹30,000/month for small shops in residential sector markets to ₹3-5 lakh/month for prime retail frontage on MG Road or Cyber Hub. Average mid-market shop rentals are ₹60,000-1,50,000/month.",
  },
  {
    question: "Which are the best areas to rent a shop in Gurgaon?",
    answer:
      "Top areas for retail shops include MG Road, Cyber Hub (DLF Cyber City), Ardee City Market, DLF Phase 4 Galleria, Sector 14 and 29 markets, Sohna Road commercial zones, and the Golf Course Extension Road commercial high streets.",
  },
  {
    question:
      "What types of businesses perform well in rented Gurgaon shops?",
    answer:
      "High-performing businesses in Gurgaon shops include food and beverage (QSR, cafes, cloud kitchens), salons and wellness centres, pharmacies, diagnostics labs, boutique retail, electronics, and professional service offices.",
  },
  {
    question:
      "What is the typical lease period for a commercial shop in Gurgaon?",
    answer:
      "Commercial shop leases in Gurgaon are typically 3-5 years with a lock-in period of 1-3 years. Annual rent escalation of 5-15% is standard and should be negotiated upfront in the lease agreement.",
  },
  {
    question:
      "What is CAM charge and how does it apply to Gurgaon retail shops?",
    answer:
      "CAM (Common Area Maintenance) charges cover upkeep of lobbies, parking, lifts, and common facilities. In managed commercial complexes in Gurgaon, CAM is charged separately at ₹15-60 per sq ft per month over the base rent.",
  },
  {
    question:
      "Can I negotiate rent on a commercial shop in Gurgaon?",
    answer:
      "Yes, especially for longer lease terms, upfront rent payment, or during market slowdowns. Getting a rent-free period (typically 1-3 months) for fitout is also common practice in Gurgaon's commercial rental market.",
  },
  {
    question:
      "What legal documents are required to rent a shop in Gurgaon?",
    answer:
      "Requirements include: GST registration, business PAN, proprietor/director ID proof, business registration certificate, rent agreement registered or notarised, and bank statements or IT returns to demonstrate financial capacity.",
  },
  {
    question:
      "Is there parking availability with commercial shops in Gurgaon?",
    answer:
      "Parking is a critical factor for retail shops in Gurgaon. Most planned commercial complexes offer designated parking. Ensure adequate customer and employee parking is available, as inadequate parking can significantly impact footfall.",
  },
  {
    question:
      "Are ground floor shops more valuable than upper floor shops in Gurgaon?",
    answer:
      "Yes, significantly. Ground floor shops in Gurgaon command 30-60% premium rent over upper floors due to much higher visibility, walk-in traffic, and accessibility. Upper floors suit professional services, gyms, or F&B restaurants with destination appeal.",
  },
  {
    question:
      "What approvals are needed to set up a food business in a rented Gurgaon shop?",
    answer:
      "For a food business, you need FSSAI registration/licence, fire NOC, MCG trade licence, health trade licence, and GST registration. Some locations also require a liquor licence from the Haryana Excise Department for alcohol service.",
  },
];

export default function GurgaonRealEstateSection() {
  const [openIndex, setOpenIndex] = useState(0);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
  return (
    <>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
   
   <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6">

  {/* Background Lights */}
  <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#DD7BDF]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#DD7BDF]/10 blur-3xl" />

  {/* Border Circles */}
  <div className="absolute top-16 left-10 h-24 w-24 rounded-full border border-[#DD7BDF]/20" />

  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#DD7BDF]/10" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Main Content Box */}
    <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,70,255,0.08)]">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900 max-w-5xl">
        About
        <span className="text-[#DD7BDF]">
          {" "}Gurgaon Real Estate
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="mt-8 space-y-7">

        <p className="text-lg leading-9 text-gray-600">
Gurgaon's commercial retail landscape is one of the most lucrative and diverse in the entire NCR corridor. The city's unique demographic — a young, affluent, brand-conscious population with high disposable incomes and strong consumption patterns — makes it an ideal market for retail shops across virtually every business category. Commercial shop rentals in Gurgaon span multiple formats: independent ground-floor shops in residential sector markets, high-street retail units in planned commercial complexes, shops in mixed-use commercial towers, and kiosks within premium shopping malls. Rental values for shops in Gurgaon vary enormously based on location, size, and visibility — from ₹30,000/month for a modest shop in a sector market to ₹5 lakh/month for a prime frontage retail unit on MG Road or in Cyber Hub. Key commercial rental hotspots include sectors 14, 15, 29 (Leisure Valley area), MG Road, South City 1 market, DLF Phase 4 Galleria, Sohna Road commercial strips, and emerging commercial high streets in New Gurgaon sectors. Gurgaon's high footfall, excellent road connectivity, and a consumer base that genuinely values quality services and retail experience make shop rentals here a high-ROI proposition. The city's expanding residential population ensures growing catchment areas, particularly in newer sectors.        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-14">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <p className="mt-2 text-gray-500">
          Everything you need to know before renting a flat in Gurgaon.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#DD7BDF]/30 shadow-[0_10px_40px_rgba(0,70,255,0.10)]"
                  : "border-gray-200 hover:border-[#DD7BDF]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h4
                  className={`text-base md:text-lg font-semibold transition ${
                    isOpen
                      ? "text-[#DD7BDF]"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h4>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#DD7BDF] rotate-180"
                      : "bg-[#DD7BDF]/10"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`${
                      isOpen
                        ? "text-white"
                        : "text-[#DD7BDF]"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-7 bg-gradient-to-b from-[#DD7BDF]/[0.03] to-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
</>
  );
}