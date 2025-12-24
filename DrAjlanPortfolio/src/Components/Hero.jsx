import { motion } from "framer-motion";
import hero from "../assets/hero.jfif";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          {/* H2 */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-4 sm:mb-6"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 leading-tight"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Where Translational Research Meets Clinical Impact
            </motion.h1>

            {/* UNDERLINE */}
            <motion.div
              className="mt-2 h-[3px] sm:h-[4px] w-32 sm:w-40 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 rounded-full mx-auto lg:mx-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>


          {/* DESCRIPTION */}
          <motion.p
            className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
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
            className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap"
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
              className="bg-blue-700 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium
                         transition-all duration-300 hover:bg-blue-800 text-sm sm:text-base"
            >
              Explore My Research
            </motion.button>
          </motion.div>
        </motion.div>

{/* RIGHT IMAGE */}
<motion.div
  className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
>
  <motion.div
    className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
    animate={{ y: [0, -16, 0] }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={hero}
      alt="Hero"
      className="w-full h-auto rounded-xl shadow-2xl"
    />
  </motion.div>
</motion.div>


      </div>
    </section>
  );
}