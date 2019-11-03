import React, { useState } from "react";
import StripeCheckoutButton from "./../components/stripe-button/stripe-button.component";

const Donate = () => {
  const [donation, setDonation] = useState(5);

  const handleChange = e => {
    setDonation(e.target.value);
  };

  return (
    <React.Fragment>
      <section className="jumbotron header-jumbotron">
        <div className="narrow">
          <h1 className="jumbotron-heading">Donate</h1>
        </div>
      </section>
      <div className="narrow">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header text-white text-uppercase contact-card-header">
                <i className="fa fa-envelope"></i> Send us a message
              </div>
              <div className="card-body">
                <form noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Donation</label>
                    <input
                      name="donation"
                      type="text"
                      aria-describedby="Donation"
                      placeholder="Enter Donation"
                      value={donation}
                      onChange={handleChange}
                    />
                  </div>
                </form>
                <StripeCheckoutButton donation={donation} />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="card bg-light mb-3">
              <div className="card-header text-white text-uppercase contact-card-header">
                <i className="fa fa-home"></i> Get in touch
              </div>
              <div className="card-body card-text">
                <p>
                  We’re very approachable and would love to speak to you. Feel
                  free to call, send us an email, Tweet us or simply complete
                  the enquiry form.
                </p>
                <p>
                  <strong>Gerry Richardson Trust</strong>
                  <br />
                  Northdene,
                  <br />
                  Stoney Lane,
                  <br />
                  Hambleton,
                  <br />
                  Poulton-Le-Fylde,
                  <br />
                  FY6 9AF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Donate;
