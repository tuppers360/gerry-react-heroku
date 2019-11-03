import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ donation }) => {
  const priceForStripe = donation * 100;
  const publishableKey = "pk_test_mulYoJrIT0rm9q96siCf8uxp00G8VFbxYd";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Donate"
      name="Gerry Richardson Trust"
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${donation}`}
      amount={priceForStripe}
      panelLabel="Donate"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
