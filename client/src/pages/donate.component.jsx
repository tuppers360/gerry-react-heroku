import React, { useState } from "react";
import StripeCheckoutButton from "./../components/stripe-button/stripe-button.component";

const Donate = () => {
  const [donation, setDonation] = useState(5);
  const [giftAid, setGiftAid] = useState(false);

  const handleChange = e => {
    setDonation(e.target.value);
  };

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
        <div className="row">
          <div className="col-md-8">
            <div className="text-center">
              <h2>Donate and help the local youths of Blackpool</h2>

              <h3>You're donating £{donation}</h3>

              <h1>Gift Aid It</h1>
              <p>
                Are you a UK tax payer? With Gift Aid, your donation of £
                {donation} would be worth £{donation * 1.25} at no extra cost to
                you.
              </p>
              <span className="btn btn-warning btn-lg">
                Boost your donation
              </span>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={giftAid}
                  onChange={handleGiftAid}
                  id="giftAid"
                />
                <label className="form-check-label" htmlFor="giftAid">
                  Please claim Gift Aid on my behalf
                </label>
              </div>
              <p>
                I confirm that this is my own money and I would like The Gerry
                Richardson Trust to treat all the donations I have made for the
                past 4 years and any future donations I make, unless I notify
                you otherwise, as Gift Aid donations.
              </p>
              <p>
                I also confirm that I am a UK taxpayer and understand that if I
                pay less Income Tax and/or Capital Gains Tax in the current tax
                year than the amount of Gift Aid claimed on all my donations it
                is my responsibility to pay any difference.
              </p>
              <div className="input-group input-group-lg test-align">
                <label htmlFor="donation"></label>
                <input
                  name="donation"
                  type="text"
                  aria-describedby="Donation"
                  placeholder="Enter Donation"
                  value={donation}
                  onChange={handleChange}
                />
              </div>
              <div>
                <StripeCheckoutButton donation={donation} />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="card bg-light mb-3">
              <div className="card-header text-white text-uppercase contact-card-header">
                <i className="fas fa-gift"></i> Other Ways to donate
              </div>
              <div className="card-body card-text">
                <p>
                  If you would like to send money the old fashioned way you can
                  contact us using our online contact form or send us a cheque
                  to the following address made payable to The Gerry Richardson
                  Trust
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
