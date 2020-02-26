import React from "react";
import DonatePayment from "../../components/donate-payment/donate-payment.component";
import "./payment.styles.scss";

const Payment = props => {
  return (
    <React.Fragment>
      <main>
        <DonatePayment {...props} />
      </main>
    </React.Fragment>
  );
};

export default Payment;
