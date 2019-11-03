import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ donation }) => {
  const priceForStripe = donation * 100;
  const publishableKey = "pk_test_mulYoJrIT0rm9q96siCf8uxp00G8VFbxYd";

  const onToken = token => {
    axios({
      url: "donate",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided Credit Card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Donate"
      name="Gerry Richardson Trust"
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${donation}`}
      amount={priceForStripe}
      panelLabel="Donate"
      token={onToken}
      currency="GBP"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
