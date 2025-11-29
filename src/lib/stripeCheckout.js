import { loadStripe } from "@stripe/stripe-js";

export async function redirectToCheckout({ priceId, coupon }) {
  const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  const session = await fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      priceId,
      coupon,
    }),
  }).then((res) => res.json());

  return stripe.redirectToCheckout({ sessionId: session.id });
}
