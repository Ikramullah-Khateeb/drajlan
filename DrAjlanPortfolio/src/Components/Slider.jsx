import React from "react";
import { motion } from "framer-motion";

import slider1 from "../assets/slider1.jfif";
import slider2 from "../assets/slider2.jfif";
import slider3 from "../assets/slider3.jfif";
import slider4 from "../assets/slider4.jfif";
import slider5 from "../assets/slider5.jfif";

const logos = [slider1, slider2, slider3, slider4, slider5];

export default function BrandSlider() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* HEADING */}
        <motion.h3
          className="text-center text-xl md:text-5xl font-semibold tracking-[0.3em] mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Professional Experience
        </motion.h3>

        {/* SLIDER */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex w-max animate-slider">
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="mx-16 flex-shrink-0"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={logo}
                  alt="Brand"
                  className="h-16 md:h-20 object-contain
                             opacity-80 grayscale
                             hover:opacity-100 hover:grayscale-0
                             transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
