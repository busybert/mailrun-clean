import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Map from "@/components/Map";
import { redirectToCheckout } from "@/lib/stripeCheckout.js";

const Pricing = () => {
  const [selectedService, setSelectedService] = useState("standard");
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    altAddress: "",
    useAlt: false,
    notes: "",
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const prices = {
    standard: 9,
    rush: 19,
    payPerPickup: 9.99,
  };

  const basePrice = prices[selectedService] || 0;

  const tealBlend =
    "linear-gradient(to bottom, #03798B 0%, #03586A 45%, #07101E 100%)";

  const glowSelected =
    "ring-2 ring-yellow-300 shadow-[0_0_20px_6px_rgba(255,255,255,0.30)]";

  const softYellowGlow =
    "ring-2 ring-yellow-300 shadow-[0_0_12px_3px_rgba(255,255,0,0.35)]";

  const softCyanGlow =
    "ring-2 ring-cyan-300 shadow-[0_0_12px_3px_rgba(0,255,255,0.35)]";

  // ⭐ NEW: Stripe Checkout Handler
  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ⭐ AMAZON ONE-TIME PICKUP → $4.99 (COUPON APPLIED)
      if (selectedService === "payPerPickup") {
        await redirectToCheckout({
          mode: "payment",
          lineItems: [
            { price: "price_1SSv372E8UrZzRbdvB2HJ4VA", quantity: 1 }, // Amazon price
          ],
          discounts: [
            { coupon: "promo_1SXn5y2E8UrZzRbd9Hmr2Ri8" }, // Amazon coupon
          ],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }

      // ⭐ STANDARD PICKUP → $4.99 (COUPON APPLIED)
      if (selectedService === "standard") {
        await redirectToCheckout({
          mode: "payment",
          lineItems: [
            { price: "price_1SP72n2E8UrZzRbdz5FncYGG", quantity: 1 }, // Standard price
          ],
          discounts: [
            { coupon: "promo_1SXn0h2E8UrZzRbdsy0JGJT8" }, // Standard coupon
          ],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }

      // ⭐ RUSH PICKUP → NO DISCOUNT
      if (selectedService === "rush") {
        await redirectToCheckout({
          mode: "payment",
          lineItems: [
            { price: "price_1SP73c2E8UrZzRbdVEqSv5SM", quantity: 1 }, // Rush price
          ],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }

      // ⭐ SUBSCRIPTION (use your Stripe subscription price IDs)
      if (selectedService === "subscription") {
        await redirectToCheckout({
          mode: "subscription",
          lineItems: [
            {
              price:
                billingPeriod === "annual"
                  ? "price_YOUR_ANNUAL_SUB_PRICE"
                  : "price_YOUR_MONTHLY_SUB_PRICE",
              quantity: 1,
            },
          ],
          successUrl: window.location.origin + "/success",
          cancelUrl: window.location.origin + "/cancel",
        });
        return;
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      toast({
        title: "Payment Error",
        description: "Unable to process booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="pricing"
      className="py-14 sm:py-16 relative"
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
          <h2 className="text-4xl font-bold mb-3 text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Service
            </span>
          </h2>

          <motion.p
            animate={{
              rotate: [-8, 8, -8],
              scale: [1, 1.35, 1],
            }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="text-yellow-300 font-extrabold text-3xl mb-1 tracking-wide"
          >
            First time pickup just{" "}
            <span className="text-7xl text-yellow-300 font-black inline-block">
              $4.99
            </span>
          </motion.p>

          <p className="text-yellow-200 text-lg mb-4">Use code: LOCAL55</p>

          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Pick a subscription or a one-time pickup.
          </p>
        </motion.div>

        {/* MAIN OPTIONS */}
        <h3 className="text-2xl text-cyan-300 font-semibold mb-6 text-center">
          Main Options
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* SUBSCRIBE & SAVE */}
          <motion.div
            onClick={() => setSelectedService("subscription")}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl p-6 bg-slate-800/40 border border-yellow-500/60 cursor-pointer transition-all flex flex-col text-center ${
              selectedService === "subscription" ? glowSelected : ""
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-yellow-500 text-xs font-semibold text-black shadow-md">
              Best Value – 2 Months FREE (Annual)
            </div>

            {/* TOP CONTENT */}
            <div className="flex-grow flex flex-col mt-4">
              <h4 className="text-2xl font-extrabold text-yellow-400 tracking-wide mb-1">
                AMAZON Returns
              </h4>

              <h3 className="text-xl font-bold text-white mb-4">
                Subscribe & Save
              </h3>

              {/* BILLING TOGGLE */}
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setBillingPeriod("monthly");
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    billingPeriod === "monthly"
                      ? "bg-yellow-500 text-black"
                      : "bg-slate-700 text-gray-200 hover:bg-slate-600"
                  }`}
                >
                  Monthly
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setBillingPeriod("annual");
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    billingPeriod === "annual"
                      ? "bg-yellow-500 text-black"
                      : "bg-slate-700 text-gray-200 hover:bg-slate-600"
                  }`}
                >
                  Annual
                </button>
              </div>

              {/* PRICING */}
              <div className="text-center mb-4">
                {billingPeriod === "annual" ? (
                  <p className="text-4xl font-extrabold text-yellow-400">
                    $199.00
                    <span className="text-sm text-gray-300 ml-2">/ year</span>
                  </p>
                ) : (
                  <p className="text-4xl font-extrabold text-yellow-400">
                    $19.99
                    <span className="text-sm text-gray-300 ml-2">/ month</span>
                  </p>
                )}
              </div>

              <ul className="text-sm text-gray-200 mb-6 leading-relaxed">
                <li>3 free pickups per month • Up to 10 items included</li>
                <li>$1 for each extra item • Next day scheduling (Mon–Fri)</li>
              </ul>
            </div>

            {/* BUTTON */}
            <button
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                selectedService === "subscription"
                  ? `bg-yellow-500 text-black ${softYellowGlow}`
                  : "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
            >
              Start Subscription
            </button>
          </motion.div>

          {/* PAY-PER-PICKUP */}
          <motion.div
            onClick={() => setSelectedService("payPerPickup")}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl p-6 bg-slate-800/40 border border-yellow-500/60 cursor-pointer transition-all flex flex-col text-center ${
              selectedService === "payPerPickup" ? glowSelected : ""
            }`}
          >
            <div className="flex-grow flex flex-col mt-4">
              <h4 className="text-2xl font-extrabold text-yellow-400 tracking-wide mb-1">
                AMAZON Returns
              </h4>

              <h3 className="text-xl font-bold text-white mb-4">
                Pay-Per Pickup
              </h3>

              <span className="text-4xl font-extrabold text-yellow-500 mb-4">
                $9.99
              </span>

              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Up to 10 items included <br />
                $1 for each extra item • Next day scheduling (Mon–Fri)
              </p>
            </div>

            {/* BUTTON */}
            <button
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                selectedService === "payPerPickup"
                  ? `bg-yellow-500 text-black ${softYellowGlow}`
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {selectedService === "payPerPickup" ? "Selected" : "Select"}
            </button>
          </motion.div>
        </div>

        {/* ONE-TIME OPTIONS */}
        <h3 className="text-2xl text-cyan-300 font-semibold mb-6 text-center">
          One-Time Pickup Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* STANDARD */}
          <motion.div
            onClick={() => setSelectedService("standard")}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl p-6 bg-slate-800/40 border transition-all text-center cursor-pointer ${
              selectedService === "standard"
                ? "border-cyan-300 ring-2 ring-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
                : "border-slate-700/50 hover:border-cyan-400/40"
            }`}
          >
            <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Standard Pickup
            </h3>

            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              Economy 48-hour pickup & delivery. Up to 2 boxes included.
              <br />
              Boxes 25 lbs and up will have a $4 surcharge added.
            </p>

            <span className="text-3xl font-bold text-cyan-300 block mb-4">
              $9.00
            </span>

            <button
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                selectedService === "standard"
                  ? `bg-cyan-500 text-white ${softCyanGlow}`
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {selectedService === "standard" ? "Selected" : "Select"}
            </button>
          </motion.div>

          {/* RUSH */}
          <motion.div
            onClick={() => setSelectedService("rush")}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl p-6 bg-slate-800/40 border transition-all text-center cursor-pointer ${
              selectedService === "rush"
                ? "border-cyan-300 ring-2 ring-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
                : "border-slate-700/50 hover:border-cyan-400/40"
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Rush Delivery
            </h3>

            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              Priority same-day pickup & delivery. Up to 2 boxes included.
              <br />
              Boxes 25 lbs and up will have a $4 surcharge added.
            </p>

            <span className="text-3xl font-bold text-cyan-300 block mb-4">
              $19.00
            </span>

            <button
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                selectedService === "rush"
                  ? `bg-cyan-500 text-white ${softCyanGlow}`
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {selectedService === "rush" ? "Selected" : "Select"}
            </button>
          </motion.div>
        </div>

        {/* CHECKOUT FORM */}
        <form
          onSubmit={handleCheckout}
          className="max-w-2xl mx-auto bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-6">
            Checkout (One-Time Pickup)
          </h3>

          <div className="grid gap-4">
            <input
              required
              name="name"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white"
            />

            <input
              required
              name="phone"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white"
            />

            <input
              required
              name="address"
              placeholder="Pickup Address"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white"
            />

            <textarea
              name="notes"
              placeholder="Pickup Notes (gate code, special instructions...)"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white h-28 resize-none"
            />

            <div className="text-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-white font-semibold text-lg disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </form>

        {/* MAP */}
        <div className="mt-16">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Service Areas
            </span>
          </h2>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
