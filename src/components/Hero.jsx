import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-20 bg-gradient-to-b from-[#07101E] via-[#053E48] to-[#03798B]"
    >
      <div className="container mx-auto px-4 text-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Skip the Post Office Lines —
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {" "}We Pick Up & Deliver
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Fast, reliable, local pickup and drop-off across Windermere, Winter Garden, and Dr. Phillips.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition text-lg"
          >
            Book a Pickup
          </a>

          <Link
            to="/reviews"
            className="px-8 py-3 border border-cyan-300 text-cyan-300 rounded-lg hover:bg-cyan-300 hover:text-black transition text-lg"
          >
            Read Reviews
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
