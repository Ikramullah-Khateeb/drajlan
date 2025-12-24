import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../assets/Aboutimg.webp";
import AboutSmallimg from "../assets/AboutSmallimg.webp";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* SAME CONTAINER AS HERO */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          className="order-2 lg:order-1 overflow-hidden rounded-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-120px" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={Aboutimg}
            alt="About"
            className="w-full h-[460px] sm:h-[560px] lg:h-[720px] object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="order-1 lg:order-2 space-y-4 sm:space-y-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-120px" }}
        >
          {/* HEADING */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-700 leading-tight"
            variants={fadeUp}
          >
            A Lifelong Commitment to Cancer Research and Treatment
          </motion.h1>

{/* TEXT */}
<motion.p
  className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-[#475569]"
  variants={fadeUp}
>
  Dr. Ajlan’s career journey from chemical engineering to oncology was inspired by his grandfather's battle with cancer, leading him to become a pioneer in the UAE’s medical field.
</motion.p>

<motion.p
  className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569]"
  variants={fadeUp}
>
  Driven by a commitment to innovation, Dr. Ajlan bridges groundbreaking cancer research with clinical care, advancing life-saving treatments and improving patient outcomes globally.
</motion.p>


          {/* BUTTON */}
          <motion.button
            className="bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-md"
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 12px 30px rgba(67, 56, 202, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            More About Me
          </motion.button>

          {/* TESTIMONIAL */}
          <motion.div
            className="pt-8 space-y-4 border-t border-[#E5E7EB]"
            variants={fadeUp}
            whileHover={{ y: -4 }}
          >
            <blockquote className="text-[#111827] text-lg sm:text-xl italic leading-relaxed">
              “Dr. Ajlan’s dedication to advancing cancer treatment has been truly transformative. His expertise in oncology and research has redefined care, making a lasting impact on patients’ lives.”
            </blockquote>

            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={AboutSmallimg}
                alt="Ajlan"
                className="w-16 h-16 rounded-full object-cover border border-[#E5E7EB]"
                whileHover={{
                  boxShadow: "0px 0px 0px 4px rgba(67, 56, 202, 0.25)",
                }}
              />

              <div>
                <p className="font-semibold text-blue-700 text-lg">
                  Ajlan Al Zaki
                </p>
                <p className="text-[#475569] text-sm">
                  Oncology Specialist
                </p>
                <p className="text-[#64748B] text-sm">
                  Abu Dhabi, UAE
                </p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
