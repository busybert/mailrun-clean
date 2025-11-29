// server.js
import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: [
      "https://mailrun-orlando.com",
      "https://mailrun-clean.onrender.com",
      "http://localhost:5173"
    ],
  })
);

app.use(express.json());

// --------------------------------------------------
// CHECKOUT SESSION (for both one-time + subscriptions)
// --------------------------------------------------
app.post("/api/checkout", async (req, res) => {
  try {
    const { priceId, mode, discountCode } = req.body;

    if (!priceId || !mode) {
      return res.status(400).json({ error: "Missing priceId or mode" });
    }

    // CREATE DISCOUNT ARRAY ONLY IF A COUPON IS PROVIDED
    let discounts = [];
    if (discountCode) {
      discounts.push({ coupon: discountCode });
    }

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      discounts,
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.log("Stripe Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --------------------------------------------------
app.get("/", (req, res) => {
  res.send("MailRun Stripe backend is running ✔ LIVE");
});

app.listen(process.env.PORT || 10000, () =>
  console.log("Stripe server running on port 10000")
);
