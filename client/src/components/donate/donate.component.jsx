import React from "react";
import DonationForm from "../../components/donate-form/donate-form.component";

const Donate = () => {
  return (
    <React.Fragment>
      <div className="narrow">
        <div>
          <DonationForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Donate;
