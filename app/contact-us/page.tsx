"use client";

import { Footer } from "@/components/organisms/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuArrowLeft,
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuSend,
} from "react-icons/lu";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')",
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
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-gray-100 leading-relaxed max-w-3xl">
              Get in touch with us. We're here to help you find your perfect
              property or answer any questions you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-gray-700 mb-8 leading-relaxed">
                  We'd love to hear from you. Reach out to us through any of the
                  following channels.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg shrink-0">
                      <LuPhone className="w-6 h-6 text-glaucous-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-gray-900 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+2349033261767"
                        className="text-slate-gray-600 hover:text-glaucous-600 transition-colors"
                      >
                        +234 903 326 1767
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg shrink-0">
                      <LuMail className="w-6 h-6 text-glaucous-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:rivierahomesltd@gmail.com"
                        className="text-slate-gray-600 hover:text-glaucous-600 transition-colors break-all"
                      >
                        rivierahomesltd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg shrink-0">
                      <LuMapPin className="w-6 h-6 text-glaucous-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-gray-900 mb-1">
                        Office Address
                      </h3>
                      <p className="text-slate-gray-600">
                        12, Awonaike Crescent, Yaba, Lagos
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg shrink-0">
                      <LuClock className="w-6 h-6 text-glaucous-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-gray-900 mb-1">
                        Working Hours
                      </h3>
                      <p className="text-slate-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-slate-gray-900 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/2349033261767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 p-3 rounded-lg text-white hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/Rivierahomes_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-linear-to-br from-purple-600 to-pink-500 p-3 rounded-lg text-white hover:from-purple-700 hover:to-pink-600 transition-colors"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@rivierahomes9ja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                    >
                      <FaTiktok className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-gray-900 mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-gray-900 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glaucous-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-gray-900 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glaucous-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-gray-900 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glaucous-500 focus:border-transparent outline-none transition-all"
                        placeholder="+234 123 456 7890"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-gray-900 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glaucous-500 focus:border-transparent outline-none transition-all"
                        placeholder="Property Inquiry"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-gray-900 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-glaucous-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us more about what you're looking for..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-glaucous-600 hover:bg-glaucous-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <LuSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-slate-gray-100">
        <div className="w-full h-[400px] bg-slate-gray-200 relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295!3d6.516667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMDAuMCJOIDPCsDIyJzMxLjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Riviera Homes Office Location"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
