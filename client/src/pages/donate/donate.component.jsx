import React from "react";
import DonationForm from "../../components/donate-form/donate-form.component";
import "./donate.styles.scss";

const Donate = () => {
  return (
    <React.Fragment>
      <main>
        <div className="donate-header">
          <h2>Donate to</h2>
          <h1>The Gerry Richardson Trust</h1>
          <h2 className="subtitle">
            help us to help the local youths of Blackpool, Fylde and Wyre
          </h2>
        </div>
        <div className="donate-container">
          <DonationForm />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Donate;
