import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 title: "Shop for Rent in Gurgaon | Commercial Retail Space for Rent in Gurugram",

description:
"Looking for a shop for rent in Gurgaon? Explore premium commercial retail spaces, showrooms & business shops for rent in DLF Phase, MG Road, Golf Course Road & 50+ locations in Gurgaon. Contact our experts for free consultation.",

keywords: [
"shop for rent in Gurgaon", "shops for rent in Gurgaon", "commercial shop for rent Gurgaon", "retail space for rent Gurgaon", "shop for rent Gurugram", "commercial property for rent Gurgaon", "showroom for rent Gurgaon", "office space for rent Gurgaon", "shop for rent MG Road Gurgaon", "shop for rent Golf Course Road Gurgaon", "shop for rent DLF Phase Gurgaon", "small shop for rent Gurgaon", "shop for rent near metro Gurgaon", "affordable shop for rent Gurgaon", "commercial space for rent Gurgaon", "retail shop Gurgaon", "shop for rent Cyber City Gurgaon", "shop for rent Palam Vihar Gurgaon", "shop for rent Manesar Gurgaon", "business space for rent Gurgaon"
],

  alternates: {
    canonical: "https://www.shopforrentingurgaon.com/",
  },
  verification: {
    google: "vyf3FEnSVLgMNCbul3J0eumyobmb77Rj8D48aoFTGBg",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W2WZ4NNM');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2NCFHM4P1J"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2NCFHM4P1J');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2WZ4NNM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}