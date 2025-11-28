import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";         // ✅ Correct path
import Map from "./Map";                           // ✅ Correct path
import { redirectToCheckout } from "../lib/stripeCheckout"; // ✅ Correct path

const Pricing = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // PRICE IDs (replace with yours if needed)
  const PRICES = {
    AMAZON_ONE_TIME: "price_1SSv372E8UrZzRbdvB2HJ4VA",
    AMAZON_ONE_TIME_COUPON: "promo_1SXn5y2E8UrZzRbd9Hmr2Ri8",

    STANDARD: "price_1SP72n2E8UrZzRbdz5FncYGG",
    STANDARD_COUPON: "promo_1SXn0h2E8UrZzRbdsy0JGJT8",

    RUSH: "price_1SP73c2E8UrZzRbdVEqSv5SM",

    MONTHLY_SUB: "price_YOUR_MONTHLY_SUB_PRICE",
    ANNUAL_SUB: "price_YOUR_ANNUAL_SUB_PRICE",
  };

  // ************************************************
  // 🔥 MAIN CHECKOUT LOGIC
  // ************************************************
  const handleCheckout = async () => {
    if (!selectedService) {
      toast({
        title: "No Service Selected",
        description: "Please choose a service before checking out.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // ⭐ AMAZON Pay-Per-Pickup
      if (selectedService === "payPerPickup") {
        await redirectToCheckout({
          mode: "payment",
          lineItems: [{ price: PRICES.AMAZON_ONE_TIME, quantity: 1 }],
          discounts: [{ coupon: PRICES.AMAZON_ONE_TIME_COUPON }],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }

      // ⭐ STANDARD
      if (selectedService === "standard") {
        await redirectToCheckout({
          mode: "payment",
          lineItems: [{ price: PRICES.STANDARD, quantity: 1 }],
          discounts: [{ coupon: PRICES.STANDARD_COUPON }],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }

      // ⭐ RUSH
      if (selectedService === "rush") {
        await redirectToCheckout({
          mode: "payment",
          lineItems: [{ price: PRICES.RUSH, quantity: 1 }],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }

      // ⭐ SUBSCRIPTION
      if (selectedService === "subscription") {
        await redirectToCheckout({
          mode: "subscription",
          lineItems: [
            {
              price:
                billingPeriod === "annual"
                  ? PRICES.ANNUAL_SUB
                  : PRICES.MONTHLY_SUB,
              quantity: 1,
            },
          ],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }
    } catch (err) {
      console.error("Stripe error:", err);
      toast({
        title: "Checkout Error",
        description: "We couldn't start the payment process.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tealBlend =
    "linear-gradient(to bottom, #03798B 0%, #03586A 45%, #07101E 100%)";
  const glowSelected =
    "ring-2 ring-yellow-300 shadow-[0_0_20px_6px_rgba(255,255,255,0.30)]";

  return (
    <section
      id="pricing"
      className="py-14 sm:py-16"
      style={{ background: tealBlend }}
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-3">Choose Your Service</h2>
        </motion.div>

        {/* ====================== MAIN OPTIONS ====================== */}
        <h3 className="text-2xl text-cyan-300 font-semibold mb-6 text-center">
          Main Options
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          {/* SUBSCRIPTION */}
          <motion.div
            onClick={() => setSelectedService("subscription")}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl p-6 bg-slate-800/40 border border-yellow-500/60 cursor-pointer transition-all text-center ${
              selectedService === "subscription" ? glowSelected : ""
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-4">Subscribe & Save</h3>

            {/* Subscription Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-3 rounded-lg font-semibold text-lg bg-yellow-500 text-black hover:bg-yellow-400"
            >
              Start Subscription
            </button>
          </motion.div>

          {/* PAY-PER-PICKUP */}
          <motion.div
            onClick={() => setSelectedService("payPerPickup")}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl p-6 bg-slate-800/40 border border-yellow-500/60 cursor-pointer transition-all text-center ${
              selectedService === "payPerPickup" ? glowSelected : ""
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-4">Pay-Per Pickup</h3>

            {/* Pay Per Pickup Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-3 rounded-lg font-semibold text-lg bg-yellow-500 text-black hover:bg-yellow-400"
            >
              Continue
            </button>
          </motion.div>
        </div>

        {/* ====================== ONE-TIME PICKUP ====================== */}

        <h3 className="text-2xl text-cyan-300 font-semibold mb-6 text-center">
          One-Time Pickup Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* STANDARD */}
          <motion.div
            onClick={() => setSelectedService("standard")}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl p-6 bg-slate-800/40 border cursor-pointer text-center ${
              selectedService === "standard" ? glowSelected : "border-slate-700/50"
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Standard Pickup — $9
            </h3>

            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400"
            >
              Continue
            </button>
          </motion.div>

          {/* RUSH */}
          <motion.div
            onClick={() => setSelectedService("rush")}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl p-6 bg-slate-800/40 border cursor-pointer text-center ${
              selectedService === "rush" ? glowSelected : "border-slate-700/50"
            }`}
          >
            <h3 className="text-xl text-white font-semibold mb-4">
              Rush Delivery — $19
            </h3>

            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400"
            >
              Continue
            </button>
          </motion.div>
        </div>

        {/* MAP */}
        <div className="mt-16">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
