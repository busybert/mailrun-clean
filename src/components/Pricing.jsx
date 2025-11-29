import { useState } from "react";
import redirectToCheckout from "../lib/stripeCheckout";

// Prices with coupon eligibility
const COUPON_ALLOWED = [
  "price_1SP72n2E8UrZzRbdz5FncYGG",   // Standard pickup (48 hrs)
  "price_1SSv372E8UrZzRbdvB2HJ4VA"    // Amazon Pay-Per-Pickup
];

function Pricing() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [coupon, setCoupon] = useState("");

  return (
    <div className="pricing-container">

      {/* --- Render each pricing card here --- */}
      {selectedPrice && (
        <div>

          {/* Coupon box only for allowed price IDs */}
          {COUPON_ALLOWED.includes(selectedPrice) && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full bg-white px-3 py-2 border rounded-md"
              />
            </div>
          )}

          {/* Checkout Button */}
          <button
            onClick={() =>
              redirectToCheckout({
                priceId: selectedPrice,
                coupon: COUPON_ALLOWED.includes(selectedPrice) ? coupon : null,
              })
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          >
            {COUPON_ALLOWED.includes(selectedPrice)
              ? "Checkout with Coupon"
              : "Start Checkout"}
          </button>

        </div>
      )}
    </div>
  );
}

export default Pricing;
