import Logo from "@/assets/images/riviera-homes-logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import {
  FaChevronRight,
  FaInstagram,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`bg-white pt-24 lg:pt-48 pb-14 lg:pb-12 px-4 md:px-12 lg:px-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 flex flex-col items-center">
            <Image
              src={Logo}
              alt="Riviera Homes Real Estate"
              width={132}
              height={132}
              className="mb-6"
            />
            <div className="flex space-x-4">
              <Link
                href="https://www.tiktok.com/@rivierahomes9ja?_t=ZS-90v6Oo0pewq&_r=1"
                target="_blank"
                className="text-slate-gray-500 transition-colors"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/Rivierahomes_/"
                className="text-slate-gray-500 transition-colors"
                target="_blank"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="mailto:rivierahomesltd@gmail.com"
                className="text-slate-gray-500 transition-colors"
              >
                <MdEmail size={20} />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#006B05] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-[#006B05] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 hover:text-[#006B05] transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#006B05] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#006B05] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Properties
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/properties?propertyType=residential"
                  className="text-gray-600 hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?propertyType=rentals"
                  className="text-gray-600 hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?propertyType=short-lets"
                  className="text-gray-600 hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Short lets
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?propertyType=commercial-properties"
                  className="text-gray-600 hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Commercial properties
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?propertyType=land"
                  className="text-gray-600 hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 flex items-center gap-2 mb-1">
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp</span>
                </p>
                <p className="text-gray-600">+234 903 326 1767</p>
              </div>
              <div>
                <p className="text-gray-700 flex items-center gap-2 mb-1">
                  <CiLocationOn className="text-lg" />
                  Head office:
                </p>
                <p className="text-gray-600">
                  12, Awonaike Crescent, Yaba, Lagos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-600 text-sm">
            All Rights Reserved . Copyright © 2025 Riviera Homes
          </p>
        </div>
      </div>
    </footer>
  );
}
