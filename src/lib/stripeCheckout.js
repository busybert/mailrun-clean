// src/lib/stripeCheckout.js

// Your live Render server:
const API_BASE_URL = "https://mailrun-stripe-server.onrender.com";

// itemsToCheckout is exactly what you pass from Pricing.jsx
// { mode, lineItems, discounts?, successUrl, cancelUrl }
export async function redirectToCheckout(itemsToCheckout) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send the data exactly as-is:
      body: JSON.stringify(itemsToCheckout),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to create checkout session");
    }

    if (!data.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    // Redirect user to Stripe checkout page
    window.location.href = data.url;

  } catch (error) {
    console.error("redirectToCheckout error:", error);
    throw error; // Let Pricing.jsx show your toast
  }
}
