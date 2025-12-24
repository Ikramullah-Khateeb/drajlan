import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function DrAlZakiFooter() {
  const services = [
    "Hematology & Oncology",
    "CAR-T Cell Therapy",
    "Cellular Immunotherapy",
    "Cancer Treatment",
    "Lymphoma & Myeloma",
    "Nanoparticle Research",
    "Clinical Trials",
  ];

  const quickLinks = [
    "About Dr. Al Zaki",
    "Publications",
    "Research",
    "Patient Care",
    "Clinical Expertise",
    "Contact",
    "Appointments",
    "Education & Training",
    "Professional Affiliations",
  ];

  const expertise = [
    { name: "Cleveland Clinic", category: "Staff Physician" },
    { name: "Khalifa University", category: "Adjunct Professor" },
    { name: "MD Anderson", category: "Clinical Specialist" },
    { name: "Burjeel Hospital", category: "Director" },
    { name: "Stanford Health", category: "Resident Physician" },
    { name: "Immunotherapy", category: "CAR-T Expert" },
  ];

  const locations = [
    {
      city: "Abu Dhabi",
      address: "Cleveland Clinic Abu Dhabi, Al Maryah Island",
      phone: "+971 2 501 9999",
    },
    {
      city: "Abu Dhabi",
      address: "Khalifa University, Abu Dhabi Campus",
      phone: "+971 2 312 3333",
    },
    {
      city: "Houston",
      address: "MD Anderson Cancer Center, 1515 Holcombe Blvd",
      phone: "+1 (713) 792-2121",
    },
    {
      city: "Abu Dhabi",
      address: "Burjeel Hospital, Al Najda Street",
      phone: "+971 2 667 7777",
    },
    {
      city: "Palo Alto",
      address: "Stanford Health Care, 300 Pasteur Drive",
      phone: "+1 (650) 723-4000",
    },
    {
      city: "Research",
      address: "Nanoparticle Drug Delivery & Cancer Imaging Lab",
      phone: "Contact via LinkedIn",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={container}
    >
      <div className="max-w-full mx-auto px-12 py-16">

        {/* Top Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          variants={container}
        >
          {/* Logo */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.08, rotate: 2 }}
              >
                <span className="text-white font-black text-2xl">AZ</span>
              </motion.div>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Physician Scientist specializing in CAR-T Cell Immunotherapy &
              Hematology Oncology, advancing patient-centered care.
            </p>

            <motion.button
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-md"
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 12px 30px rgba(67, 56, 202, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>

          {/* Columns */}
          {[services, quickLinks, expertise].map((col, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h3 className="text-xs font-bold uppercase tracking-wider  text-blue-600 underline ">
                {i === 0 ? "SPECIALIZATIONS" : i === 1 ? "QUICK LINKS" : "AFFILIATIONS"}
              </h3>

              <ul className="space-y-2">
                {col.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {typeof item === "string" ? item : item.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Big Name */}
        <motion.div
          className="text-center translate-y-19 mb-16"
          variants={fadeUp}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl  lg:text-8xl font-black italic tracking-wide">
            AJLAN AL ZAKI
          </h2>
        </motion.div>

        {/* Locations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12"
          variants={container}
        >
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.4)",
              }}
              className="bg-zinc-900 p-4 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-blue-700" />
                <h4 className="font-bold text-lg">{loc.city}</h4>
              </div>
              <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                {loc.address}
              </p>
              <a className="text-sm font-semibold hover:text-blue-700">
                {loc.phone}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-4"
          variants={fadeUp}
        >
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2025, Dr. Ajlan Al Zaki MD, PhD | All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {[{
              Icon: Facebook,
              link: "https://www.facebook.com/yourprofile"
            },
            {
              Icon: Linkedin,
              link: "https://www.linkedin.com/in/ajlan-al-zaki-md-phd-8b290828/"
            },
            {
              Icon: Twitter,
              link: "https://twitter.com/yourprofile"
            },
            {
              Icon: Instagram,
              link: "https://www.instagram.com/yourprofile"
            }].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                target="_blank"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-white" />
              </motion.a>
            ))}
          </div>

        </motion.div>
      </div>
    </motion.footer>
  );
}
