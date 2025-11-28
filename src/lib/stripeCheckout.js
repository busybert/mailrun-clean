// src/lib/stripeCheckout.js

// ✅ This MUST be your actual Render URL:
const API_BASE_URL = "https://mailrun-stripe-server.onrender.com";

export async function redirectToCheckout(itemsToCheckout) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items: itemsToCheckout })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "Failed to create checkout session");
    }

    const data = await response.json();

    if (!data.url) {
      throw new Error("No checkout URL returned from server");
    }

    // Redirect to Stripe Checkout
    window.location.href = data.url;
  } catch (error) {
    console.error("redirectToCheckout error:", error);
    // Let the Pricing component show your toast
    throw error;
  }
}