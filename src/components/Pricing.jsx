import { useState } from "react";
import redirectToCheckout from "../lib/stripeCheckout";

// Prices with optional coupons
const COUPON_ALLOWED = [
  "price_1SP72n2E8UrZzRbdz5FncYGG",   // Standard 48h Pickup
  "price_1SSv372E8UrZzRbdvB2HJ4VA"    // Amazon Pay-Per-Pickup
];

// PRICE IDs (you provided)
const PRICES = {
  standard: "price_1SP72n2E8UrZzRbdz5FncYGG",
  amazonPayPer: "price_1SSv372E8UrZzRbdvB2HJ4VA",

  subscribeMonthly: "price_1SSv5K2E8UrZzRbdVdPlsu9T",
  subscribeYearly: "price_1SSv6e2E8UrZzRbdVqkqKeFi"
};

export default function Pricing() {
  const [coupon, setCoupon] = useState("");

  return (
    <div className="pricing-container grid gap-6">

      {/* ----------------------------- */}
      {/* STANDARD PICKUP CARD ($9.00) */}
      {/* ----------------------------- */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg">Standard Pickup (48 hours)</h2>
        <p className="text-gray-600">$9.00</p>

        {COUPON_ALLOWED.includes(PRICES.standard) && (
          <input
            className="w-full bg-white px-3 py-2 border rounded-md mt-3"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        )}

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          onClick={() =>
            redirectToCheckout({
              priceId: PRICES.standard,
              mode: "payment",
              allowDiscount: COUPON_ALLOWED.includes(PRICES.standard)
            })
          }
        >
          Start Checkout
        </button>
      </div>

      {/* ---------------------------------- */}
      {/* AMAZON PAY-PER-PICKUP ($9.99) */}
      {/* ---------------------------------- */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg">Amazon Return – Pay-Per-Pickup</h2>
        <p className="text-gray-600">$9.99</p>

        {COUPON_ALLOWED.includes(PRICES.amazonPayPer) && (
          <input
            className="w-full bg-white px-3 py-2 border rounded-md mt-3"
            placeholder="Enter coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        )}

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          onClick={() =>
            redirectToCheckout({
              priceId: PRICES.amazonPayPer,
              mode: "payment",
              allowDiscount: COUPON_ALLOWED.includes(PRICES.amazonPayPer)
            })
          }
        >
          Start Checkout
        </button>
      </div>

      {/* ----------------------------- */}
      {/* SUBSCRIPTION MONTHLY */}
      {/* ----------------------------- */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg">Amazon Returns – Subscribe Monthly</h2>
        <p className="text-gray-600">$19.99 / month</p>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          onClick={() =>
            redirectToCheckout({
              priceId: PRICES.subscribeMonthly,
              mode: "subscription",
              allowDiscount: false
            })
          }
        >
          Start Subscription
        </button>
      </div>

      {/* ----------------------------- */}
      {/* SUBSCRIPTION YEARLY */}
      {/* ----------------------------- */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg">Amazon Returns – Subscribe Yearly</h2>
        <p className="text-gray-600">$199.99 / year</p>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          onClick={() =>
            redirectToCheckout({
              priceId: PRICES.subscribeYearly,
              mode: "subscription",
              allowDiscount: false
            })
          }
        >
          Start Subscription
        </button>
      </div>
    </div>
  );
}
