import FilterProperties from "./FilterProperties";
import Proprtes from "./Proprtes";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";

export default function Listing({ slug }) {

 const rawArea = slug

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("shop-for-rent-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (

    <div className="bg-gradient-to-b from-white to-[#FFF5FB] min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
        {/* HEADING */}

        <div className="mb-12">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">

           <span className="text-[#DD7BDF]">Shops</span> for Rent in{" "}

            <span className="text-[#DD7BDF]">
              {formattedArea || "Gurgaon"}
            </span>

          </h1>

          <p className="text-gray-600 mt-4 text-base">
            Discover premium commercial shops for rent in prime and high-footfall locations with excellent connectivity and business potential.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] mt-6 rounded-full"></div>

        </div>


        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT */}

          <div className="lg:col-span-8 space-y-8">

            <FilterProperties area={area} />

          </div>


          {/* RIGHT SIDEBAR */}

          <div className="lg:col-span-4">

            <div className="sticky top-28">
              <SidebarEnquiryForm />
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}