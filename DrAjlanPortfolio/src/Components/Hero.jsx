import heroImg from "../assets/hero.jfif";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center overflow-hidden">
      <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* H2 */}
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-6"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Advancing Precision Oncology Through Science and Care
          </motion.h2>

          {/* H1 + UNDERLINE WRAPPER */}
          <div className="relative inline-block">

            {/* H1 */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Where Translational Research Meets Clinical Impact
            </motion.h1>

            {/* UNDERLINE */}
            <motion.div
              className="mt-2 h-[4px] w-40 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>


          {/* DESCRIPTION */}
          <motion.p
            className="mt-8 text-lg text-gray-600 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            Emirati Physician-Scientist and Consultant Hematologist-Oncologist,
            advancing cellular therapies, precision medicine, and next-generation
            cancer care through research-driven clinical excellence.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 12px 30px rgba(37, 99, 235, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 text-white px-7 py-3 rounded-full font-medium
                         transition-all duration-300 hover:bg-blue-800"
            >
              Explore My Research
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          <motion.img
            src={heroImg}
            alt="Hero"
            className="max-w-md md:max-w-lg rounded-xl shadow-2xl"
            animate={{ y: [0, -16, 0] }} // stays alive always
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
