import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [winterMode] = useState(true);

  // Banner parallax
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section
      id="hero"
      className="relative w-full bg-slate-900 overflow-hidden pt-0 pb-24"
    >

      {/* ----------------------------------------------------
          🎄 RED HOLIDAY RIBBON — FLUSH TO TOP
      ----------------------------------------------------- */}
      <div className="relative w-full bg-red-600 text-white text-center py-2 font-bold tracking-wide shadow-md z-[100]">
        Holiday Season Special — Let MailRun Stand in Line for You!

        {/* ⚡ EXPECT HOLIDAY LINE-UPS (mobile under banner) */}
        <motion.div
          className="
            absolute left-1/2 -translate-x-1/2 
            bg-yellow-300 text-black font-bold px-3 py-1.5 rounded-xl shadow-lg 
            whitespace-nowrap text-xs md:text-sm
            top-full mt-1
            z-[150] md:z-[200]
          "
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ⚡ Expect Holiday Line-Ups!
        </motion.div>
      </div>

      {/* ----------------------------------------------------
          🔶 AMAZON RETURNS + COUPON (OVERLAPS BADGE)
      ----------------------------------------------------- */}
      <div
        className="
          absolute left-4 
          top-[70px] md:top-[90px]
          z-[300] md:z-[200]
        "
      >

        {/* Amazon Returns Stamp — reduced angle */}
        <motion.div
          animate={{
            rotate: [-4, 1, -4],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-white font-extrabold tracking-wide select-none
                     text-[1.5rem] md:text-3xl drop-shadow-lg"
          style={{ transformOrigin: "left center" }}
        >
          Amazon Returns
        </motion.div>

        {/* Coupon Text */}
        <motion.div
          animate={{
            rotate: [-2, 1, -2],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1 font-extrabold leading-tight select-none 
                     text-sm md:text-lg text-yellow-300 drop-shadow-md"
          style={{ transformOrigin: "left center" }}
        >
          New Customer Special! <br />

          <span className="text-yellow-200 text-sm md:text-lg">
            First pickup is just{" "}
          </span>

          {/* HUGE ANIMATED $4.99 */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-yellow-200 font-black
                       text-3xl md:text-5xl lg:text-6xl drop-shadow-lg"
          >
            $4.99
          </motion.span>

          <br />
          <span className="text-yellow-400">Use code: LOCAL55</span>
        </motion.div>
      </div>

      {/* ----------------------------------------------------
          ❄ SNOWFALL
      ----------------------------------------------------- */}
      {winterMode && (
        <div className="absolute inset-0 pointer-events-none z-[40]">
          {[...Array(45)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white"
              style={{
                fontSize: "8px",
                top: Math.random() * -40 + "vh",
                left: Math.random() * 100 + "vw",
              }}
              animate={{ y: ["0vh", "120vh"] }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 4,
              }}
            >
              •
            </motion.div>
          ))}
        </div>
      )}

      {/* ----------------------------------------------------
          LOGO + SUBTITLE
      ----------------------------------------------------- */}
      <div className="relative z-[50] container mx-auto px-4 text-center mt-24 md:mt-10">
        <img
          src="https://assets.zyrosite.com/AGBzeKNP14u7gny5/logo-2-m2WqXW9WJDUQEOR5.png"
          alt="MailRun Logo"
          className="mx-auto h-20 md:h-28 lg:h-32 object-contain mb-4"
        />

        <div className="text-lg md:text-2xl text-gray-200 font-semibold leading-tight mb-5">
          <p>We Pick Up Your Packages & Amazon Returns</p>
          <p>And Drop Them Off For You.</p>
        </div>
      </div>

      {/* ----------------------------------------------------
          ⭐ ANIMATED BANNER + CTA
      ----------------------------------------------------- */}
      <div className="relative w-full h-[18vh] md:h-[22vh] overflow-hidden mt-4 z-[20] shadow-2xl shadow-black/50 rounded-lg">
        <motion.img
          src="https://assets.zyrosite.com/AGBzeKNP14u7gny5/crowd-m89fhIvreODElL9h.png"
          alt="MailRun Banner"
          style={{ y: yParallax }}
          animate={{ y: [-10, 10, -10], x: [-6, 6, -6], scale: [1, 1.03, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-full h-full object-cover"
        />

        {/* CTA BUTTON */}
        <div className="absolute top-2 w-full flex justify-center z-[30]">
          <motion.div whileHover={{ scale: 1.06 }}>
            <a
              href="https://mailrun-orlando.com/#pricing"
              className="inline-block bg-yellow-400 text-black font-bold
                         text-base md:text-xl px-8 py-2.5 md:px-10 md:py-3
                         rounded-2xl shadow-xl hover:bg-yellow-300
                         transition-all duration-300"
            >
              Schedule My Pickup
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
      </div>

      {/* ----------------------------------------------------
          TEXT + ICONS
      ----------------------------------------------------- */}
      <div className="relative z-[50] text-center mt-3">

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <h1 className="text-[8vw] md:text-[4.5vw] lg:text-[2.7rem] font-black text-yellow-400">
            Avoid the Rush
          </h1>
        </motion.div>

        <p className="text-sm md:text-xl lg:text-2xl font-semibold text-gray-100">
          Skip the Line, Save Your Time!
        </p>

        {/* ICONS — Smaller on mobile */}
        <div className="flex justify-center gap-8 text-white mt-3">

          <div className="text-center">
            <div className="text-xl md:text-3xl">📦</div>
            <p className="text-xs md:text-sm mt-1">Package Drop-Off</p>
          </div>

          <div className="text-center">
            <div className="text-xl md:text-3xl">🔄</div>
            <p className="text-xs md:text-sm mt-1">Amazon Returns</p>
          </div>

          <div className="text-center">
            <div className="text-xl md:text-3xl">⚡</div>
            <p className="text-xs md:text-sm mt-1">Fast Pickup</p>
          </div>

        </div>

        <p className="text-blue-300 text-xs md:text-lg font-medium tracking-wide mt-2">
          Serving Windermere • Winter Garden • Dr. Phillips • Horizon West
        </p>
      </div>
    </section>
  );
};

export default Hero;