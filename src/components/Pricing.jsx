const handleCheckout = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    let itemsToCheckout = [];

    // ⭐ AMAZON ONE-TIME PICKUP → $4.99 (COUPON APPLIED)
    if (selectedService === "payPerPickup") {
      itemsToCheckout = [
        {
          price: "price_1SSv372E8UrZzRbdvB2HJ4VA",
          quantity: 1,
          coupon: "promo_1SXn5y2E8UrZzRbd9Hmr2Ri8"
        }
      ];
    }

    // ⭐ STANDARD PICKUP → $4.99 (COUPON APPLIED)
    else if (selectedService === "standard") {
      itemsToCheckout = [
        {
          price: "price_1SP72n2E8UrZzRbdz5FncYGG",
          quantity: 1,
          coupon: "promo_1SXn0h2E8UrZzRbdsy0JGJT8"
        }
      ];
    }

    // ⭐ RUSH PICKUP → NO DISCOUNT
    else if (selectedService === "rush") {
      itemsToCheckout = [
        {
          price: "price_1SP73c2E8UrZzRbdVEqSv5SM",
          quantity: 1
        }
      ];
    }

    // ⭐ SUBSCRIPTION (WHEN YOU'RE READY)
    else if (selectedService === "subscription") {
      itemsToCheckout = [
        {
          price:
            billingPeriod === "annual"
              ? "price_YOUR_ANNUAL_SUB_PRICE"
              : "price_YOUR_MONTHLY_SUB_PRICE",
          quantity: 1
        }
      ];
    }

    // 🚀 Send to backend → Stripe Checkout
    await redirectToCheckout(itemsToCheckout);

  } catch (error) {
    toast({
      title: "Payment Error",
      description: error.message || "Unable to process booking. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
