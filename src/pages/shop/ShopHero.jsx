import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ShopHero() {
  return (
    <section className="relative py-10 md:py-15 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
            Transform Your Growth Journey
          </span>{" "}
          ,Inside and Out.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
        >
          Explore powerful{" "}
          <span className="text-[#00337C] font-semibold">ebooks</span> and
          inspiring{" "}
          <span className="text-[#B76E79] font-semibold">merch</span> designed
          to help you build your best self, every day, in every way.
        </motion.p>

       
      </div>

      {/* Optional background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern-light.svg')] bg-cover bg-center"></div>
    </section>
  );
}
