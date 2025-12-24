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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h3
          className="text-center text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] mb-12 sm:mb-16 md:mb-20"
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
                className="mx-6 sm:mx-10 md:mx-12 lg:mx-16 flex-shrink-0"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={logo}
                  alt="Brand"
                  className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain
             hover:opacity-100 hover:grayscale-0
             transition-all duration-300"
                />

              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes slider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slider {
          animation: slider 30s linear infinite;
        }

        .animate-slider:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-slider {
            animation-duration: 20s;
          }
        }

        @media (min-width: 1024px) {
          .animate-slider {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
}