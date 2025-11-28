import React from "react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center py-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-white mb-5"
      >
        📍{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Windermere, Winter Garden, Dr.Phillps Area
        </span>
      </motion.h2>

      {/* Map Row */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">

        {/* Image Map container */}
        <div
          className="rounded-xl overflow-hidden border-2 border-slate-700/50 shadow-lg shadow-cyan-500/10"
          style={{
            height: "280px",
            width: "90%",
            maxWidth: "600px",
          }}
        >
          <img
            src="https://assets.zyrosite.com/AGBzeKNP14u7gny5/chatgpt-image-nov-24-2025-01_14_39-am-NIi9Krkwr0z7J64c.png"
            alt="Service Area Map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Map;
