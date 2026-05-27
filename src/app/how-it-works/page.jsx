import ShopFAQ from "./ShopFAQ";
import ShopRentHero from "./ShopRentHero";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works | Find Shop for Rent in Gurgaon Easily | ShopForRentInGurgaon",

  description:
    "Discover how to rent a shop in Gurgaon in 3 simple steps. Share your requirement, get matched with verified commercial spaces & book a free site visit. Renting a shop in Gurgaon has never been easier.",

  keywords: [
  "how to rent a shop in Gurgaon", "shop renting process Gurgaon", "find commercial space Gurgaon", "rent shop Gurgaon steps", "book site visit shop Gurgaon", "verified shop for rent Gurgaon", "commercial property consultant Gurgaon", "free shop rental consultation Gurgaon", "how to find shop for rent Gurugram", "rent retail space Gurgaon"
  ],
    alternates: {
    canonical: "https://www.shopforrentingurgaon.com/how-it-works",
  },
};

export default function Page() {
  return (
    <>
      <ShopRentHero />
      <ShopFAQ />
    </>
  );
}