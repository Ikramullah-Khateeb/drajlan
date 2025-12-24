import React from "react";
import { motion } from "framer-motion";
import contact from "../assets/contact.jpg";


export default function Contact() {
  return (
    <section className="bg-[#e5eaed] py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {/* TEXT */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-700 font-bold leading-tight mb-4 sm:mb-6">
                From Research to Care: Advancing Oncology Together
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 max-w-xl">
                Reach out to discuss research collaboration, clinical
                innovation, or advisory opportunities in oncology. Each
                conversation begins with understanding your goals and exploring
                meaningful next steps.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="mt-10 sm:mt-12 lg:mt-16 flex justify-center lg:justify-start"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center justify-center
                           w-48 h-48 sm:w-56 sm:h-56 bg-white border border-gray-300
                           rounded-lg shadow-md"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={contact}
                  alt="Contact"
                  className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-md"
                />

              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-sm shadow-lg mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-6 sm:space-y-8">

              {[
                { label: "Full Name", type: "text" },
                { label: "Address", type: "text" },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full border-b border-black focus:outline-none focus:border-blue-700 py-2 transition-colors"
                  />
                </motion.div>
              ))}

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {["Phone", "Email*"].map((label, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      {label}
                    </label>
                    <input
                      type={label.includes("Email") ? "email" : "text"}
                      className="w-full border-b border-black focus:outline-none focus:border-blue-700 py-2 transition-colors"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border-b border-black focus:outline-none focus:border-blue-700 py-2 resize-none transition-colors"
                />
              </motion.div>

              {/* SUBMIT */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full bg-blue-700 text-white py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base
                           transition-all duration-300
                           hover:bg-blue-800 hover:shadow-lg
                           hover:shadow-blue-500/30"
              >
                Send inquiry
              </motion.button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}