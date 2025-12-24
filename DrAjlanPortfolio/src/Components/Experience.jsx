import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experienceData = [
    {
      year: "Aug 2025 - Present",
      company: "Khalifa University",
      position: "Adjunct Associate Professor",
      link: "www.kustar.ac.ae",
    },
    {
      year: "Aug 2025 - Present",
      company: "Cleveland Clinic Abu Dhabi",
      position: "Staff Physician",
      link: "www.clevelandclinicabudhabi.ae",
    },
    {
      year: "Apr 2025 - Present",
      company: "MD Anderson Cancer Center",
      position:
        "Clinical Specialist – Department of Lymphoma & Myeloma",
      link: "www.mdanderson.org",
    },
    {
      year: "Jul 2023 - Apr 2025",
      company: "MD Anderson Cancer Center",
      position:
        "Instructor – Department of Lymphoma/Myeloma and Cancer Systems Imaging",
      link: "www.mdanderson.org",
    },
    {
      year: "Jul 2020 - Jun 2023",
      company: "MD Anderson Cancer Center",
      position: "Hematology & Oncology Fellow",
      link: "www.mdanderson.org",
    },
    {
      year: "Apr 2025 - Jul 2025",
      company: "Burjeel Hospital",
      position:
        "Director of Hematology Oncology & Cellular Therapy Center",
      link: "www.burjeelhospital.com",
    },
    {
      year: "2018 - Jun 2020",
      company: "Stanford Health Care",
      position: "Resident Physician",
      link: "www.stanfordhealthcare.org",
    },
  ];

  /* Container animation */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* Item animation */
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl shadow-lg p-6 sm:p-10 lg:p-14">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10 sm:mb-14"
          >
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-blue-700 mb-6">
              Experience
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
              A career spanning advanced medical training, academic instruction,
              and senior clinical leadership, with sustained contributions to{" "}
              <span className="font-semibold text-blue-700">
                hematology and oncology
              </span>{" "}
              across leading global healthcare institutions.
            </p>
          </motion.div>

          {/* Experience Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{
                  y: -6,
                  transition: {
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  },
                }}
                className="relative space-y-3"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {item.year}
                </h3>

                <div className="space-y-1">
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">
                    {item.company}
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    {item.position}
                  </p>
                </div>

                <motion.a
                  href={`https://${item.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-700 text-sm font-semibold"
                  whileHover={{
                    x: 6,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                >
                  {item.link}
                </motion.a>

                {/* Vertical line – desktop only */}
                {index !== experienceData.length - 1 && (
                  <div className="hidden md:block pt-6">
                    <div className="w-[2px] h-12 bg-blue-700"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
