import React, { useState, useEffect } from "react";
import axios from "axios";

import { Elements, StripeProvider } from "react-stripe-elements";
import DonatePaymentForm from "../donate-payment-form/donate-payment-form.component";

const DonatePayment = props => {
  const [apiKey, setApiKey] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("/api/public-key", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.data)
        .catch(error => console.log(error));
      setApiKey(result);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {apiKey && (
        <StripeProvider apiKey={apiKey}>
          <Elements>
            <DonatePaymentForm {...props} />
          </Elements>
        </StripeProvider>
      )}
    </React.Fragment>
  );
};

export default DonatePayment;
