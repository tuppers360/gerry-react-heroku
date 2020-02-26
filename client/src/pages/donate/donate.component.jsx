import React from "react";
import DonationForm from "../../components/donate-form/donate-form.component";
import "./donate.styles.scss";

const Donate = () => {
  return (
    <React.Fragment>
      <main>
        <div className="donate-header">
          <h1>Donate to The Gerry Richardson Trust now</h1>
          <h2>
            And help us to help the local youths of Blackpool, Fylde and Wyre
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
