import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default async function redirectToCheckout({ priceId, mode = "payment", allowDiscount = false }) {
  try {
    const stripe = await stripePromise;

    const body = {
      items: {
        mode: mode,
        lineItems: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        discounts: allowDiscount
          ? [{ coupon: import.meta.env.VITE_STRIPE_COUPON_ID }]
          : []
      }
    };

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Stripe redirect failed:", data);
      alert("Checkout could not be started.");
    }

  } catch (error) {
    console.error("Stripe checkout error:", error);
    alert("Something went wrong starting checkout.");
  }
}
