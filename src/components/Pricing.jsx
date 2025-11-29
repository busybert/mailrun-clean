import { useState } from "react";
import { redirectToCheckout } from "../lib/stripeCheckout";

// ⭐ Allowed coupon price IDs
const COUPON_ALLOWED = [
  "price_1SP72n2E8UrZzRbdz5FncYGG",   // Standard Pickup ($9)
  "price_1SSv372E8UrZzRbdvB2HJ4VA"    // Amazon Pay-Per-Pickup ($9.99)
];

// ⭐ Price IDs
const PRICES = {
  standard: "price_1SP72n2E8UrZzRbdz5FncYGG",
  payPer: "price_1SSv372E8UrZzRbdvB2HJ4VA",
  monthly: "price_1SSv5K2E8UrZzRbdVdPlsu9T",
  annual: "price_1SSv6e2E8UrZzRbdVqkqKeFi"
};

export default function Pricing() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [coupon, setCoupon] = useState("");

  const cards = [
    {
      title: "Standard Pickup (48 hrs)",
      price: "$9.00",
      priceId: PRICES.standard
    },
    {
      title: "Amazon Return – Pay Per Pickup",
      price: "$9.99",
      priceId: PRICES.payPer
    },
    {
      title: "Amazon Returns – Subscribe Monthly",
      price: "$19.99 / month",
      priceId: PRICES.monthly
    },
    {
      title: "Amazon Returns – Subscribe Yearly",
      price: "$199.99 / year",
      priceId: PRICES.annual
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.priceId}
            className={`border rounded-lg p-6 shadow-md cursor-pointer hover:shadow-xl transition ${
              selectedPrice === card.priceId ? "border-yellow-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedPrice(card.priceId)}
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-700">{card.price}</p>
          </div>
        ))}
      </div>

      {/* If user has selected a pricing card */}
      {selectedPrice && (
        <div className="mt-8">
          {/* Coupon box only for 2 services */}
          {COUPON_ALLOWED.includes(selectedPrice) && (
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full bg-white px-3 py-2 border rounded-md"
            />
          )}

          {/* Checkout button */}
          <button
            onClick={() =>
              redirectToCheckout({
                priceId: selectedPrice,
                coupon:
                  COUPON_ALLOWED.includes(selectedPrice) && coupon.trim() !== ""
                    ? coupon.trim()
                    : null
              })
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-md w-full mt-4"
          >
            Continue to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
