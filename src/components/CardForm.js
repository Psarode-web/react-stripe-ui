import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useOptions } from "./Option";

const CardForm = () => {
    
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleCard = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log("[PaymentMethod]", paymentMethod);
    console.log("[error]", error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement options={options} onChange={handleCard} />
      </label>
      {error && <p className="card-error">{error}</p>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CardForm;
