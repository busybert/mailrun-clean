// server.js
import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();

// Load Stripe with your LIVE key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Allow your React website to call this API
app.use(cors({
  origin: [
    "https://mailrun-orlando.com",
    "https://mailrun-clean.onrender.com",
    "http://localhost:5173"
  ],
}));
app.use(express.json());

// -----------------------------
// CHECKOUT ROUTE
// -----------------------------
app.post("/api/checkout", async (req, res) => {
  try {
    const items = req.body.items;

    if (!items || !items.mode || !items.lineItems) {
      return res.status(400).json({ error: "Invalid request format" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: items.mode,
      line_items: items.lineItems,
      discounts: items.discounts ?? [],
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    return res.status(500).json({ error: error.message });
  }
});

// -----------------------------
app.get("/", (req, res) => {
  res.send("MailRun Stripe backend is running ✔ LIVE");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Stripe server running on port", PORT);
});
