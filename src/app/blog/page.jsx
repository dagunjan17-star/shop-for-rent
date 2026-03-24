import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {

  const domain = "www.shopforrentingurgaon.com"; // ✅ FIXED DOMAIN

  return {

    title: "Shop for Rent in Gurgaon Blog | Commercial Property Guides",

    description:
      "Read expert guides on shop for rent in Gurgaon, best commercial locations, investment tips, rental trends and Gurgaon commercial real estate insights.",

    keywords: [
      "shop for rent in Gurgaon",
      "Gurgaon commercial property blog",
      "commercial property in Gurgaon",
      "best locations for shop in Gurgaon",
      "Gurgaon retail space rent",
      "Gurgaon commercial investment"
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