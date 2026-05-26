"use client";

import { CheckCircle2, XCircle, X } from "lucide-react";

export default function AlertPopup({
  open,
  type = "success",
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#140018]/70 backdrop-blur-xl px-4">

      {/* Popup */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[42px] border border-white/10 bg-white shadow-[0_35px_120px_rgba(221,123,223,0.35)] animate-popup">

        {/* Top Gradient */}
        <div className="h-2 w-full bg-gradient-to-r from-[#DD7BDF] via-[#e8a6ea] to-[#f6d4f7]" />

        {/* Decorative Background */}
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#DD7BDF]/15 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#c86ad0]/15 blur-3xl"></div>

        {/* Floating Shine */}
        <div className="absolute top-0 left-[-120%] h-full w-[75%] rotate-12 bg-white/20 blur-2xl animate-shine"></div>

        <div className="relative p-8">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#DD7BDF]/10 bg-[#DD7BDF]/10 text-[#c55ec8] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#DD7BDF] hover:to-[#c86ad0] hover:text-white hover:rotate-90 hover:scale-110 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Icon Box */}
          <div className="flex justify-center">
            <div
              className={`relative flex h-32 w-32 items-center justify-center rounded-[34px] rotate-6 shadow-2xl ${
                type === "success"
                  ? "bg-gradient-to-br from-[#fff5ff] via-[#f7d8f8] to-[#eab0ec]"
                  : "bg-gradient-to-br from-red-100 to-red-200"
              }`}
            >

              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-[34px] border-[5px] border-[#DD7BDF]/20 animate-ping"></div>

              {/* Glow */}
              <div
                className={`absolute inset-4 rounded-[28px] blur-3xl opacity-40 ${
                  type === "success"
                    ? "bg-[#DD7BDF]"
                    : "bg-red-500"
                }`}
              />

              {/* Glass Layer */}
              <div className="absolute inset-[10px] rounded-[26px] border border-white/50 bg-white/20 backdrop-blur-lg"></div>

              {type === "success" ? (
                <CheckCircle2
                  size={66}
                  className="relative z-10 text-[#c55ec8] drop-shadow-lg"
                />
              ) : (
                <XCircle
                  size={66}
                  className="relative z-10 text-red-600"
                />
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-center text-4xl font-black tracking-tight bg-gradient-to-r from-[#c55ec8] via-[#DD7BDF] to-[#f0b7f2] bg-clip-text text-transparent">
            {type === "success" ? "Success!" : "Error!"}
          </h2>

          {/* Message */}
          <p className="mt-4 text-center text-[16px] leading-7 text-gray-600">
            {message}
          </p>

          {/* Divider */}
          <div className="mt-7 flex items-center justify-center">
            <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent to-[#DD7BDF]/40"></div>

            <div className="mx-3 h-3 w-3 rounded-full bg-[#DD7BDF] shadow-[0_0_18px_#DD7BDF]"></div>

            <div className="h-[2px] w-20 rounded-full bg-gradient-to-l from-transparent to-[#DD7BDF]/40"></div>
          </div>

          {/* Button */}
          <button
            onClick={onClose}
            className={`group relative mt-8 w-full overflow-hidden rounded-2xl py-4 text-[16px] font-black tracking-[2px] text-white shadow-[0_15px_45px_rgba(221,123,223,0.35)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] cursor-pointer ${
              type === "success"
                ? "bg-gradient-to-r from-[#c55ec8] via-[#DD7BDF] to-[#f0b7f2]"
                : "bg-gradient-to-r from-red-600 to-red-700"
            }`}
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

            <span className="relative z-10">OK, GOT IT</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-popup {
          animation: popupAnimation 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes popupAnimation {
          0% {
            opacity: 0;
            transform: scale(0.55) rotate(-8deg) translateY(70px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 130%;
          }
        }

        .animate-shine {
          animation: shine 3.5s linear infinite;
        }
      `}</style>
    </div>
  );
}