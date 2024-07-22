"use client";
import { useStoreCart } from "@/stores/storeAll";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const { getTotal } = useStoreCart((state) => state);

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error: any) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    //
    // Trigger form validation and wallet collection

    setLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({ amount: 5 }),
    });
    const { client_Secret } = await res.json();

    const result = await stripe.confirmPayment({
      clientSecret: client_Secret,
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/ecommerce",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="px-32 mx-[400px] mt-12">
    //     <PaymentElement />
    //     <button className="w-full bg-blue-400 ">Submit</button>
    //   </div>
    // </form>
    <form onSubmit={handleSubmit}>
      <div className="px-4 md:px-16 lg:px-32 mx-auto mt-12 max-w-lg">
        <PaymentElement />
        <button className="w-full bg-blue-400 py-2 mt-4 text-white rounded hover:bg-blue-500 transition-colors">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
