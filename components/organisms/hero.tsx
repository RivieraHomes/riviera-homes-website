"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuMenu, LuX, LuChevronDown } from "react-icons/lu";
import Image from "next/image";
import Logo from "@/assets/images/riviera-logo.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();

  // Slider images
  const sliderImages = [
    "/luxury-modern-apartment.png",
    "/modern-luxury-apartment-interior-with-city-view.jpg",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80",
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/properties", label: "Properties", hasSubmenu: true },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div className="absolute inset-y-0 left-0 w-full bg-white shadow-xl">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Image
                  src={Logo}
                  alt="Riviera Homes"
                  width={70}
                  height={70}
                  className="w-16 h-16"
                />
                <span className="font-bold text-lg text-slate-gray-900">
                  Riviera Homes
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-slate-gray-900 rounded-lg hover:bg-slate-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <LuX className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "text-slate-gray-900 bg-earth-yellow-100 border-l-4 border-earth-yellow-500"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasSubmenu && (
                        <LuChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Header (visible on mobile only) */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 order-1 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Riviera Homes"
              width={100}
              height={100}
              className="w-24 h-24 sm:w-24 sm:h-20"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 bg-slate-gray-500 rounded-lg hover:bg-slate-gray-800 transition-colors"
            aria-label="Open menu"
          >
            <LuMenu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 lg:py-0 order-3 lg:order-1">
        <div className="max-w-lg mx-auto lg:mx-0">
          <div className="mb-6 lg:mb-8 hidden lg:block">
            <Image
              src={Logo}
              alt="Riviera Homes"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
              priority
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6 leading-tight">
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

      <div className="flex-1 relative bg-linear-to-br from-navy-900 via-navy-800 to-navy-700 min-h-[40vh] lg:min-h-screen order-2 lg:order-2 overflow-hidden">
        {/* Slider Images */}
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-80" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Desktop Navigation */}
        <nav className="hidden lg:block relative z-10 p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-end gap-8">
            <Link
              href="/"
              className={`text-white hover:text-gold-400 font-medium transition-colors ${
                pathname === "/" ? "text-gold-400" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-white hover:text-gold-400 font-medium transition-colors ${
                pathname === "/about-us" ? "text-gold-400" : ""
              }`}
            >
              About us
            </Link>
            <Link
              href="/properties"
              className={`text-white hover:text-gold-400 font-medium transition-colors ${
                pathname === "/properties" ? "text-gold-400" : ""
              }`}
            >
              Properties
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:text-gold-400 font-medium transition-colors ${
                pathname === "/contact" ? "text-gold-400" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Slider Navigation */}
        <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 flex-col items-center gap-2 z-20">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous slide"
          >
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
          </button>
          <div className="flex flex-col gap-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next slide"
          >
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
          </button>
        </div>

        {/* Mobile Slider Dots */}
        <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
