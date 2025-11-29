// src/lib/stripeCheckout.js
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API);

export async function redirectToCheckout({ priceId, coupon }) {
  const stripe = await stripePromise;

  // Decide if coupon is allowed
  const couponAllowedPrices = [
    "price_1SP72n2E8UrZzRbdz5FncYGG", // Standard Pickup
    "price_1SSv372E8UrZzRbdvB2HJ4VA" // Amazon Pay-Per Pickup
  ];

  const items = {
    mode: "payment",
    lineItems: [{ price: priceId, quantity: 1 }],
    discounts: []
  };

  // Add coupon ONLY if allowed & entered
  if (coupon && coupon.trim() && couponAllowedPrices.includes(priceId)) {
    items.discounts.push({ coupon });
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items })
    });

    const data = await response.json();

    if (!data.url) {
      throw new Error("No checkout URL returned");
    }

    window.location.href = data.url;
  } catch (err) {
    console.error("Checkout Error:", err);
    throw err;
  }
}
