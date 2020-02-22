import React from "react";
import DonatePayment from "../../components/donate-payment/donate-payment.component";

const Payment = props => {
  return (
    <React.Fragment>
      <div className="main">
        <h1>Donate</h1>
        <div>
          <DonatePayment {...props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
