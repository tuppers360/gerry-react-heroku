import React from "react";
import DonatePayment from "../../components/donate-payment/donate-payment.component";
import "./payment.styles.scss";

const Payment = props => {
  return (
    <React.Fragment>
      <main>
        <div className="payment-header">
          <h1>You're donating £{props.location.state.donation}</h1>
        </div>
        <div className="payment-container">
          <DonatePayment {...props} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Payment;
