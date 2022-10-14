

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./components/CardForm";
import "./styles.css";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm />
    </Elements>
  );
};


export default App;
