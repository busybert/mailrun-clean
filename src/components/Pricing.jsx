import { useState } from "react";
import { redirectToCheckout } from "../lib/stripeCheckout";

// ONLY these price IDs allow coupons
const COUPON_ALLOWED = [
  "price_1SP72n2E8UrZzRbdz5FncYGG",   // Standard Pickup (48 hrs)
  "price_1SSv372E8UrZzRbdvB2HJ4VA"    // Amazon Pay-Per-Pickup
];

function Pricing() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isSubscription, setIsSubscription] = useState(false);
  const [coupon, setCoupon] = useState("");

  // Determine Stripe mode
  const getCheckoutMode = (priceId) => {
    return priceId.includes("SSv5") || priceId.includes("SSv6")
      ? "subscription"
      : "payment";
  };

  return (
    <div className="pricing-container">

      {/* Render your pricing cards here (your existing layout) */}
      {/* Each pricing box should call setSelectedPrice(priceId) */}
      {/* and also setIsSubscription(true|false) */}

      {selectedPrice && (
        <div>

          {/* COUPON BOX */}
          {COUPON_ALLOWED.includes(selectedPrice) && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          {/* CHECKOUT BUTTON */}
          <button
            onClick={() =>
              redirectToCheckout({
                priceId: selectedPrice,
                mode: getCheckoutMode(selectedPrice),  // FIXED
                coupon: COUPON_ALLOWED.includes(selectedPrice) ? coupon : null
              })
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          >
            {COUPON_ALLOWED.includes(selectedPrice)
              ? "Continue with Coupon"
              : "Continue to Checkout"}
          </button>

        </div>
      )}
    </div>
  );
}

export default Pricing;
