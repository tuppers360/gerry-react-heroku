import React from "react";

import DonationForm from "../../components/donate-form/donate-form.component";

const Donate = () => {
  return (
    <React.Fragment>
      <section className="jumbotron header-jumbotron">
        <div className="narrow">
          <h1 className="jumbotron-heading">Donate</h1>
        </div>
      </section>
      <div className="narrow">
        <div>
          <DonationForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Donate;
