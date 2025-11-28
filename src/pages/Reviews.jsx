import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp, User } from "lucide-react";
import { Helmet } from "react-helmet";

const reviews = [
  {
    id: 1,
    name: "Sarah Miller",
    role: "Small Business Owner",
    rating: 5,
    text: "MailRun has completely changed how I handle my Etsy shop shipments. I used to spend hours a week driving to the post office. Now, I just schedule a pickup and get back to creating. It's a game changer!",
    date: "October 12, 2023",
  },
  {
    id: 2,
    name: "James Peterson",
    role: "Resident, Winter Garden",
    rating: 5,
    text: "Super reliable service. Living in Winter Garden, having a local courier service that actually cares about your package is rare. The drivers are always polite and punctual.",
    date: "November 5, 2023",
  },
  {
    id: 3,
    name: "Jessica Lee",
    role: "Resident, Windermere",
    rating: 4,
    text: "Great concept and execution. Had a small issue with one pickup time being slightly delayed due to traffic, but support resolved it immediately and kept me updated. Will definitely use again for my Amazon returns.",
    date: "December 1, 2023",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Freelancer",
    rating: 5,
    text: "I send a lot of documents for work and MailRun is faster and cheaper than my previous solution. The tracking is accurate and the peace of mind is worth every penny.",
    date: "January 15, 2024",
  },
  {
    id: 5,
    name: "Amanda Rodriguez",
    role: "Busy Mom",
    rating: 5,
    text: "Fast, friendly, and local. I love that they cover Windermere. It's the best way to handle returns when you have kids and can't easily run errands.",
    date: "February 20, 2024",
  },
  {
    id: 6,
    name: "Robert Baker",
    role: "Tech Enthusiast",
    rating: 5,
    text: "Simple interface, effective service. The website is easy to navigate and scheduling a pickup takes less than a minute. 5 stars all the way for efficiency.",
    date: "March 10, 2024",
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pt-24 pb-20">
      <Helmet>
        <title>Customer Reviews | MailRun</title>
        <meta
          name="description"
          content="See what our customers in Winter Garden and Windermere are saying about MailRun's courier and package pickup services."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Loved by Locals
            </h1>
            <p className="text-lg text-slate-400">
              Don't just take our word for it. Here's what our community in
              Winter Garden and Windermere has to say about their MailRun experience.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-slate-800 py-8"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-slate-400">Happy Customers</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="flex items-center gap-1 text-yellow-400 mb-1">
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
            </div>
            <div className="text-slate-400">Average Rating</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Delivery Success Rate</div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/80 transition-colors duration-300 relative group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-slate-700 transition-colors">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-current" : "text-slate-700"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
                <div className="ml-auto text-xs text-slate-600">
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 border border-slate-800"
        >
          <ThumbsUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to experience the convenience?
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied neighbors in Winter Garden and Windermere who
            trust MailRun for their package needs.
          </p>
          <a
            href="/#store"
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Book a Pickup
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;