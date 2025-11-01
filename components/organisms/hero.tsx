"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 bg-slate-100 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 lg:py-0 order-2 lg:order-1">
        <div className="max-w-lg mx-auto lg:mx-0">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-black">
              Riviera Homes
            </h1>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 lg:mb-6 leading-tight">
            We help you find your{" "}
            <span className="italic relative">
              perfect
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-gold-500"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C50 5 100 10 150 8C170 7 190 12 195 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            shortlet
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
            We're a trusted digital platform that connects you with premium
            shortlet rentals and land investments to make your property journey
            seamless and rewarding.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
            <Link href="/about-us" className="w-full sm:w-auto">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold w-full">
                About us
              </Button>
            </Link>
            <div className="flex items-center justify-center sm:justify-start text-black font-semibold cursor-pointer hover:text-gray-600 transition-colors">
              Book a Call
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">
                  ✓
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-black">Verified</p>
                <p className="text-xs text-gray-600">Platform</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              This platform meets high standards of security and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-linear-to-br from-navy-900 via-navy-800 to-navy-700 min-h-[35vh] lg:min-h-screen order-1 lg:order-2">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url('/luxury-modern-apartment.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <nav className="relative z-10 p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-end gap-4 sm:gap-8">
            <Link
              href="/about-us"
              className="text-white hover:text-gold-400 font-medium transition-colors text-sm sm:text-base"
            >
              About us
            </Link>
            <button className="lg:hidden bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <LuMenu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
        </nav>

        <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 flex-col items-center gap-2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <div className="flex flex-col gap-1">
            {[1, 2, 3, 4, 5].map((dot, index) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
