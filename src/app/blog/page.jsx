import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {

  const domain = "www.shopforrentingurgaon.com"; // ✅ FIXED DOMAIN

  return {

    title: "Shop for Rent in Gurgaon Blog | Commercial Property Guides",

    description:
      "Read expert guides on shop for rent in Gurgaon, best commercial locations, investment tips, rental trends and Gurgaon commercial real estate insights.",

    keywords: [
      "shop for rent Gurgaon tips", "commercial property blog Gurgaon", "retail space Gurgaon insights", "best area for shop in Gurgaon", "shop rental rates Gurgaon", "commercial property trends Gurgaon", "business setup Gurgaon", "shop for rent news Gurugram", "Gurgaon real estate blog", "commercial market Gurgaon 2026"
    ],

    alternates: {
      canonical: `https://${domain}/blog`, // ✅ FIXED
    },

  };
}

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF5FB]">
      <BlogList />
    </div>
  );
};

export default Page;