"use client";

import { Footer } from "@/components/organisms/footer";
import {
  LuShield,
  LuUsers,
  LuStar,
  LuLeaf,
  LuTrendingUp,
  LuTarget,
  LuEye,
  LuHeart,
  LuBuilding,
  LuShieldCheck,
} from "react-icons/lu";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-linear-to-br from-slate-gray-900 via-glaucous-900 to-slate-gray-800 text-white py-20 sm:py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black/75 via-slate-gray-900/85 to-black/70"></div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')",
          }}
          aria-hidden="true"
        ></div>

        <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-slate-gray-100 leading-relaxed max-w-3xl"
            >
              A people-first real estate brand built on trust, collaboration,
              and the vision of redefining what it means to own or invest in
              property in Nigeria.
            </motion.p>

            {/* Stats Section - adds visual interest */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-earth-yellow-400 mb-1">
                  100+
                </div>
                <div className="text-sm sm:text-base text-slate-gray-200">
                  Happy Clients
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-earth-yellow-400 mb-1">
                  50+
                </div>
                <div className="text-sm sm:text-base text-slate-gray-200">
                  Properties Sold
                </div>
              </div>
              <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-bold text-earth-yellow-400 mb-1">
                  5+
                </div>
                <div className="text-sm sm:text-base text-slate-gray-200">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="bg-linear-to-b from-white via-slate-gray-50/30 to-white">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-gray-900 mb-4">
                Our Foundation
              </h2>
              <p className="text-lg sm:text-xl text-slate-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              <motion.div
                variants={scaleIn}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-gray-100 hover:border-glaucous-300"
              >
                <div className="border border-slate-gray-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuTarget className="w-7 h-7 text-slate-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-gray-900 mb-4">
                  Our Purpose
                </h3>
                <p className="text-slate-gray-700 leading-relaxed">
                  To make property ownership simple, transparent, and accessible
                  — while creating shared opportunities that empower people and
                  strengthen communities.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-gray-100 hover:border-glaucous-300"
              >
                <div className="border border-slate-gray-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuHeart className="w-7 h-7 text-slate-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-gray-700 leading-relaxed">
                  To simplify real estate for every Nigerian through integrity,
                  partnership, and innovation — creating secure property
                  solutions that bring sustainable value to all stakeholders.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-gray-100 hover:border-glaucous-300"
              >
                <div className="border border-slate-gray-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuEye className="w-7 h-7 text-slate-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-gray-700 leading-relaxed">
                  To become a trusted force in Africa's real estate industry —
                  known not just for properties we sell, but for lives we
                  transform through honesty and sustainable development.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-linear-to-b from-glaucous-500 to-earth-yellow-500 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-gray-900">
                  Welcome to Riviera Homes
                </h2>
              </div>

              <div className="space-y-6 text-base sm:text-lg text-slate-gray-700 leading-relaxed">
                <p className="text-xl sm:text-2xl font-medium text-slate-gray-800 leading-relaxed">
                  Riviera Homes is a people-first real estate brand built on
                  trust, collaboration, and the vision of redefining what it
                  means to own or invest in property in Nigeria.
                </p>

                <p>
                  We believe real estate should go beyond buildings — it should
                  represent opportunity, security, and growth. That's why we are
                  dedicated to connecting Nigerians with verified properties,
                  thoughtfully designed homes, and comfortable shortlet
                  apartments that truly feel like home.
                </p>

                <p>
                  We've built our brand on a culture of honesty and partnership.
                  Our growth isn't driven by quick transactions but by strong,
                  long-term relationships — with clients, agents, developers,
                  and local communities. Every project reflects our core values
                  of trust, integrity, and innovation.
                </p>

                <p>
                  At Riviera Homes, we understand that real estate is deeply
                  personal. For some, it's about security; for others, it's
                  about freedom or legacy. That's why we treat every client like
                  a partner, offering guidance, transparency, and genuine care
                  at every stage of their journey.
                </p>

                <p>
                  We also see real estate as a form of nation-building. Our goal
                  isn't just to sell properties but to contribute to the future
                  of Nigerian cities — sustainable, inclusive, and built for
                  generations.
                </p>

                {/* Featured Quote */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative my-10 pl-8 sm:pl-12 py-6 border-l-4 border-glaucous-500 bg-linear-to-r from-glaucous-50 to-transparent rounded-r-xl"
                >
                  <svg
                    className="absolute left-2 top-4 w-8 h-8 text-glaucous-300 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg sm:text-xl font-medium text-glaucous-900 italic">
                    At Riviera Homes, we're not just shaping spaces. We're
                    shaping futures, one home at a time.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-linear-to-b from-earth-yellow-500 to-glaucous-500 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-gray-900">
                  Who We Are
                </h2>
              </div>

              <div className="space-y-6 text-base sm:text-lg text-slate-gray-700 leading-relaxed">
                <p className="text-xl sm:text-2xl font-medium text-slate-gray-800 leading-relaxed">
                  Riviera Homes is more than a company — it's a collective of
                  dreamers, professionals, and innovators who believe that
                  everyone deserves a place they can call home.
                </p>

                <p>
                  We are passionate about helping people make informed property
                  decisions through integrity and genuine care. We see our
                  clients as partners, not just customers. Every conversation,
                  every project, and every decision we make is grounded in
                  empathy and understanding.
                </p>

                <p>
                  Our people-first approach has helped us grow a network of
                  loyal clients and partners who trust us to deliver. We are
                  warm, reliable, and forward-thinking — constantly evolving to
                  meet modern housing needs while keeping our roots in
                  authenticity and community growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg sm:text-xl text-slate-gray-600 max-w-2xl mx-auto">
                The pillars that shape our culture and service
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                {
                  icon: LuShield,
                  title: "Integrity",
                  description:
                    "Every transaction must be clear, honest, and built on trust.",
                  color: "from-glaucous-500 to-glaucous-600",
                },
                {
                  icon: LuUsers,
                  title: "Collaboration",
                  description:
                    "We grow by working with others — from agents and developers to clients and communities.",
                  color: "from-earth-yellow-500 to-earth-yellow-600",
                },
                {
                  icon: LuStar,
                  title: "Excellence",
                  description:
                    "We hold ourselves to the highest standards in everything we do.",
                  color: "from-glaucous-600 to-glaucous-700",
                },
                {
                  icon: LuLeaf,
                  title: "Sustainability",
                  description:
                    "We plan and build with the future in mind, ensuring our impact benefits generations to come.",
                  color: "from-earth-yellow-600 to-earth-yellow-700",
                },
                {
                  icon: LuTrendingUp,
                  title: "Empowerment",
                  description:
                    "We help individuals build financial security and confidence through verified property investments.",
                  color: "from-glaucous-500 to-earth-yellow-600",
                },
                {
                  icon: LuBuilding,
                  title: "Community",
                  description:
                    "Building lasting relationships and contributing to the growth of Nigerian communities.",
                  color: "from-glaucous-700 to-earth-yellow-500",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={scaleIn}
                  className="group bg-white border border-slate-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-glaucous-300 transition-all duration-300"
                >
                  <div
                    className={`border border-slate-gray-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <value.icon className="w-7 h-7 text-slate-gray-600" />
                  </div>
                  <h3 className="font-bold text-slate-gray-900 text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-gray-900 via-glaucous-900 to-slate-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-lg sm:text-xl text-slate-gray-200 max-w-2xl mx-auto">
                Creating meaningful change through sustainable real estate
                development
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12"
            >
              <p className="text-lg sm:text-xl text-slate-gray-100 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                At Riviera Homes, impact is more than a buzzword — it's our
                foundation. We believe that every home sold, every shortlet
                managed, and every partnership formed should contribute
                meaningfully to the lives of real people.
              </p>
              <p className="text-base sm:text-lg text-slate-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                We approach real estate as a catalyst for empowerment,
                sustainability, and inclusion. By creating access to verified
                properties and affordable housing opportunities, we're helping
                more Nigerians experience the stability and pride of ownership.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12"
            >
              {[
                {
                  icon: LuUsers,
                  title: "Empowering Communities",
                  description:
                    "We collaborate with local contractors, agents, artisans, and service providers to ensure our developments create real economic impact. Each new site represents new jobs, new skills, and new possibilities.",
                },
                {
                  icon: LuLeaf,
                  title: "Sustainable Development",
                  description:
                    "We advocate for responsible and environmentally aware construction practices. Our projects are guided by eco-friendly principles — prioritizing land use efficiency, green space inclusion, and materials that minimize waste.",
                },
                {
                  icon: LuShieldCheck,
                  title: "Accessibility & Trust",
                  description:
                    "Real estate should not be complicated or exclusive. We've simplified the process with transparent documentation, due diligence, and client support that prioritizes peace of mind.",
                },
              ].map((impact, index) => (
                <motion.div
                  key={impact.title}
                  variants={scaleIn}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/20">
                    <impact.icon className="w-8 h-8 text-earth-yellow-400" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl mb-3 text-white">
                    {impact.title}
                  </h3>
                  <p className="text-slate-gray-200 leading-relaxed">
                    {impact.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mt-16 pt-12 border-t border-white/20"
            >
              <div className="inline-block">
                <svg
                  className="w-10 h-10 text-earth-yellow-400 opacity-50 mb-4 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl sm:text-2xl font-medium text-white italic max-w-3xl">
                  Real estate is not about land; it's about people. And people
                  are our priority.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
