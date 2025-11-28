import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      type: "image",
      imageUrl:
        "https://assets.zyrosite.com/AGBzeKNP14u7gny5/mailrunlogo-A1azXaxBnaFMqqjE.jpg",
      linkUrl: "https://mailrun-orlando.com",
      title: "Book online at MailRun-Orlando.com",
      description: "Schedule a pickup in seconds.",
    },
    {
      type: "video",
      videoUrl: "https://streamable.com/l/1en5id/mp4.mp4",
      title: "We Pick Up",
      description: "We collect your sealed package.",
    },
    {
      type: "video",
      videoUrl: "https://streamable.com/l/djsgsm/mp4-mobile.mp4",
      title: "Drop-Off & Proof",
      description: "You get proof of drop-off.",
    },
  ];

  const perfectFor = [
    { icon: "👨‍👩‍👧", title: "Busy Parents", desc: "Save time — skip the line." },
    { icon: "🖥️", title: "Work-From-Home", desc: "Stay focused. We handle drop-offs." },
    { icon: "📦", title: "Amazon Shoppers", desc: "We pick up your returns." },
  ];

  const reviews = [
    { text: "MailRun saved me so much time!", name: "Emily", location: "Horizon West, FL", stars: 4 },
    { text: "Pickup was fast and convenient.", name: "Rachel", location: "Winter Garden, FL", stars: 5 },
    { text: "Super easy to book!", name: "Jason", location: "Winter Garden, FL", stars: 5 },
    { text: "left my amazon box at the door step, They did the rest!", name: "Alyssa", location: "Windermere, FL", stars: 5 },
    { text: "all returns done from my couch", name: "Ester", location: "Orlando, FL", stars: 5 },
    { text: "Much easier than doing returns myself!", name: "Natalie", location: "Hamlin, FL", stars: 3 },
    { text: "No more line ups for me", name: "Chris", location: "Windermere, FL", stars: 5 },
    { text: "too easy.", name: "Julie", location: "Ocoee, FL", stars: 4 },
    { text: "Local service", name: "Steven", location: "Orlando", stars: 5 },
    { text: "I stayed at work!", name: "Mary Sue", location: "Windermere", stars: 5 },
  ];

  const renderMedia = (feature) => {
    if (feature.type === "video") {
      return (
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900/20">
          <video
            src={feature.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      );
    }

    if (feature.type === "image") {
      return (
        <a
          href={feature.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900/20 group"
        >
          <img
            src={feature.imageUrl}
            alt={feature.title}
            className="rounded-lg w-[90%] h-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      );
    }
  };

  return (
    <section
      id="features"
      className="py-10 sm:py-12 relative"
      style={{
        background:
          "linear-gradient(to bottom, #0A1425 0%, #064F63 40%, #03798B 100%)",
      }}
    >
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 text-white"
        >
          How does it{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work?
          </span>
        </motion.h2>

        <p className="text-sm sm:text-base text-gray-200 text-center max-w-2xl mx-auto mb-2">
          We handle the waiting so you don’t have to — guaranteeing fast,
          reliable delivery while you keep your day moving.
        </p>

        <p className="text-sm sm:text-base text-cyan-200 text-center max-w-2xl mx-auto font-semibold mb-8">
          Local Pickup & Delivery to the Post Office — We Stand in Line So You Don’t Have To
        </p>

        {/* FEATURE BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0A1425]/60 p-5 rounded-2xl border border-slate-600/40 shadow-[0_0_15px_rgba(0,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,255,0.45)] transition-all"
            >
              <div className="flex justify-center mb-3">{renderMedia(feature)}</div>
              <h3 className="text-white text-lg font-bold text-center">{feature.title}</h3>
              <p className="text-gray-300 text-sm text-center mt-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PERFECT FOR */}
        <h3 className="text-white text-2xl font-bold text-center mt-12 mb-6">
          Perfect For…
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {perfectFor.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0A1425]/60 p-5 rounded-2xl border border-slate-700/40 text-center shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.45)] transition-all"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl mb-2 select-none"
              >
                {item.icon}
              </motion.div>

              <h4 className="text-white font-bold text-lg">{item.title}</h4>
              <p className="text-gray-300 mt-1 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-white text-2xl font-bold text-center mt-14 mb-4">
          Reviews
        </h3>

        {/* REVIEWS WITH TEAL FADE EDGES */}
        <div className="relative overflow-hidden w-full bg-slate-900/20 py-5 rounded-xl border border-slate-700/30">

          {/* LEFT FADE (TEAL) */}
          <div className="pointer-events-none absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#03798B] to-transparent z-20"></div>

          {/* RIGHT FADE (TEAL) */}
          <div className="pointer-events-none absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#03798B] to-transparent z-20"></div>

          <motion.div
            className="flex gap-14 px-4 whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center min-w-[260px] max-w-[280px] px-2"
              >
                <p className="text-white text-sm text-center leading-snug">
                  {review.text}
                </p>

                <div className="flex justify-center mt-1">
                  {[...Array(review.stars)].map((_, s) => (
                    <span key={s} className="text-yellow-400 text-[10px] mx-[1px]">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-cyan-200 italic mt-1 text-center">
                  — {review.name}, {review.location}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Features;