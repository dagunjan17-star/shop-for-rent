import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop for Rent Gurgaon",
  description: "Find verified Shop for rent in Gurgaon with best deals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PropertyProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </PropertyProvider>
      </body>
    </html>
  );
}