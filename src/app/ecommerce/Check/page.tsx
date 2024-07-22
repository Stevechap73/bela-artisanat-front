"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { useStoreCart } from "@/stores/storeAll";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Pf33iA76gP1YxBmkPeGlM395N7d1V4l2LE0KJlpSDvGYvxKupem0YL7rJ9mexA6UckBqwFMOXO9aPZUztmS5iVF00HZfyuaGA"
);

const Check = () => {
  const { getTotal } = useStoreCart((state) => state);
  const options: any = {
    // passing the client secret obtained from the server
    mode: "payment",
    currency: "eur",
    amount: 50,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Check;
