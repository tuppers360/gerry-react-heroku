import React from "react";
import DonatePayment from "../../../components/donate-payment/donate-payment.component";

const Payment = props => {
  return (
    <React.Fragment>
      <section className="jumbotron header-jumbotron">
        <div className="narrow">
          <h1 className="jumbotron-heading">Donate</h1>
        </div>
      </section>
      <div className="narrow">
        <div>
          <DonatePayment {...props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
