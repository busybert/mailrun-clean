// ⭐ FULL WORKING CHECKOUT HANDLER
const handleCheckout = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // ⭐ PAY-PER-PICKUP — $4.99 After Coupon
    if (selectedService === "payPerPickup") {
      await redirectToCheckout({
        mode: "payment",
        lineItems: [
          { price: "price_1SSv372E8UrZzRbdvB2HJ4VA", quantity: 1 },
        ],
        discounts: [
          { coupon: "promo_1SXn5y2E8UrZzRbd9Hmr2Ri8" },
        ],
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });
      return;
    }

    // ⭐ STANDARD PICKUP — $4.99 After Coupon
    if (selectedService === "standard") {
      await redirectToCheckout({
        mode: "payment",
        lineItems: [
          { price: "price_1SP72n2E8UrZzRbdz5FncYGG", quantity: 1 },
        ],
        discounts: [
          { coupon: "promo_1SXn0h2E8UrZzRbdsy0JGJT8" },
        ],
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });
      return;
    }

    // ⭐ RUSH — No Discount
    if (selectedService === "rush") {
      await redirectToCheckout({
        mode: "payment",
        lineItems: [
          { price: "price_1SP73c2E8UrZzRbdVEqSv5SM", quantity: 1 },
        ],
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });
      return;
    }

    // ⭐ AMAZON SUBSCRIBE & SAVE (MONTHLY + ANNUAL)
    if (selectedService === "subscription") {
      await redirectToCheckout({
        mode: "subscription",
        lineItems: [
          {
            price:
              billingPeriod === "annual"
                ? "price_1SSv6e2E8UrZzRbdVqkqKeFi"   // Annual ($199)
                : "price_1SSv5K2E8UrZzRbdVdPlsu9T", // Monthly ($19.99)
            quantity: 1,
          },
        ],
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });
      return;
    }
  } catch (error) {
    console.error("Checkout Error:", error);
    toast({
      title: "Payment Error",
      description: "Unable to process booking. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
