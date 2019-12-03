import React, { useState } from "react";

import DonationForm from "../../components/donate-form/donate-form.component";

const Donate = () => {
  const [giftAid, setGiftAid] = useState(false);

  const handleGiftAid = e => {
    setGiftAid(!giftAid);
    console.log(giftAid);
  };

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
