"use client";

import { Footer } from "@/components/organisms/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuArrowLeft,
  LuSearch,
  LuFilter,
  LuMapPin,
  LuBed,
  LuBath,
  LuMaximize,
  LuHeart,
  LuX,
} from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";

// Sample properties data
const propertiesData = [
  {
    id: 1,
    title: "Luxury 3 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "₦85,000,000",
    type: "For Sale",
    category: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: "150 sqm",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Modern 2 Bedroom Shortlet",
    location: "Victoria Island, Lagos",
    price: "₦50,000/night",
    type: "Short Let",
    category: "Short Lets",
    bedrooms: 2,
    bathrooms: 2,
    area: "100 sqm",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "5 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    price: "₦5,500,000/year",
    type: "For Rent",
    category: "Rentals",
    bedrooms: 5,
    bathrooms: 4,
    area: "320 sqm",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Commercial Office Space",
    location: "Ikeja GRA, Lagos",
    price: "₦120,000,000",
    type: "For Sale",
    category: "Commercial",
    bedrooms: null,
    bathrooms: 4,
    area: "500 sqm",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Land for Sale",
    location: "Ibeju-Lekki, Lagos",
    price: "₦15,000,000",
    type: "For Sale",
    category: "Land",
    bedrooms: null,
    bathrooms: null,
    area: "600 sqm",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "4 Bedroom Terrace",
    location: "Ajah, Lagos",
    price: "₦65,000,000",
    type: "For Sale",
    category: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    area: "200 sqm",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Land",
    "Short Lets",
    "Rentals",
  ];
  const types = ["All", "For Sale", "For Rent", "Short Let"];

  const filteredProperties = propertiesData.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || property.category === selectedCategory;
    const matchesType =
      selectedType === "All" || property.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-gray-900 via-glaucous-900 to-slate-gray-800 text-white py-20 sm:py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black/75 via-slate-gray-900/85 to-black/70"></div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')",
          }}
          aria-hidden="true"
        ></div>

        {/* Back to Home Button */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-earth-yellow-400 transition-colors group"
          >
            <LuArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
              Properties
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-gray-100 leading-relaxed max-w-3xl">
              Discover your dream property from our curated selection of homes,
              apartments, and commercial spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glaucous-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 bg-glaucous-600 text-white rounded-lg hover:bg-glaucous-700 transition-colors"
            >
              <LuFilter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filters (Desktop) */}
          <div className="hidden sm:flex gap-4 mt-4">
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-glaucous-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter (Desktop) */}
          <div className="hidden sm:flex gap-2 mt-3">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedType === type
                    ? "bg-earth-yellow-500 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 z-50 sm:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowFilters(false)}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-gray-900">
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <LuX className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-gray-900 mb-3">
                    Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-glaucous-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-gray-900 mb-3">
                    Type
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedType === type
                            ? "bg-earth-yellow-500 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full mt-6 bg-glaucous-600 text-white py-3 rounded-lg font-semibold hover:bg-glaucous-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Properties Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">
                No properties found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedType("All");
                }}
                className="text-glaucous-600 hover:text-glaucous-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Property Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-earth-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <LuHeart
                        className={`w-5 h-5 ${
                          favorites.includes(property.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                    <div className="absolute bottom-4 left-4 bg-glaucous-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      {property.type}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-gray-900 mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <LuMapPin className="w-4 h-4 shrink-0" />
                      <span className="text-sm line-clamp-1">
                        {property.location}
                      </span>
                    </div>

                    {/* Property Features */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      {property.bedrooms && (
                        <div className="flex items-center gap-1">
                          <LuBed className="w-4 h-4" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center gap-1">
                          <LuBath className="w-4 h-4" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <LuMaximize className="w-4 h-4" />
                        <span>{property.area}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-2xl font-bold text-glaucous-600">
                          {property.price}
                        </p>
                      </div>
                      <button className="bg-glaucous-600 hover:bg-glaucous-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-linear-to-br from-glaucous-600 to-glaucous-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg sm:text-xl text-slate-gray-100 mb-8">
            Let us help you find your perfect property. Get in touch with our
            team today.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-glaucous-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
