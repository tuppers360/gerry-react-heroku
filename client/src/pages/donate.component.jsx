import React, { useState } from "react";
import StripeCheckoutButton from "./../components/stripe-button/stripe-button.component";
import GiftAidLogo from "../../src/assets/gift-aid-logo.png";

const Donate = () => {
  const [donation, setDonation] = useState("");
  const [giftAid, setGiftAid] = useState(false);

  const handleChange = e => {
    const filteredInput = e.target.value.replace(/[^0-9.]/g, "");
    setDonation(filteredInput);
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
          <div className="col-md-8 col-sm-12 col-12">
            <div className="text-center">
              <h1>Donate to The Gerry Richardson Trust</h1>
              <h3>
                Help us plan for the future and promote youth development by
                supporting young people within 15 miles of Blackpool Tower
              </h3>
              <h3 className="mt-5">You're donating £{donation}</h3>
              <div className="donationbox">
                <div class="radio-tile-group">
                  <div class="input-container">
                    <input
                      id="walk"
                      class="radio-button"
                      type="radio"
                      name="radio"
                    />
                    <div class="radio-tile">
                      <div class="icon walk-icon"></div>
                      <label for="walk" class="radio-tile-label">
                        Make a <span>£10</span> Donation
                      </label>
                    </div>
                  </div>
                  <div class="input-container">
                    <input
                      id="bike"
                      class="radio-button"
                      type="radio"
                      name="radio"
                    />
                    <div class="radio-tile">
                      <div class="icon bike-icon"></div>
                      <label for="bike" class="radio-tile-label">
                        Make a <span>£20</span> Donation
                      </label>
                    </div>
                  </div>
                  <div class="input-container">
                    <input
                      id="bike"
                      class="radio-button"
                      type="radio"
                      name="radio"
                    />
                    <div class="radio-tile">
                      <div class="icon bike-icon"></div>
                      <label for="bike" class="radio-tile-label">
                        Make a <span>£50</span> Donation
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-group input-group-lg test-align mt-3">
                <label htmlFor="donation"></label>
                <input
                  name="donation"
                  type="text"
                  aria-describedby="Donation"
                  placeholder="Enter Donation"
                  min="1"
                  value={donation}
                  onChange={handleChange}
                  className="text-center col-2 col-sm-2 col-md-2 input-lg"
                />
              </div>
              <div className="donate-message row justify-content-center mt-3">
                <div className="col-6">
                  {donation > 0 && (
                    <span>
                      £<span>{donation} </span>
                      <span>
                        could help someone travel to Africe to help sick
                        children
                      </span>
                    </span>
                  )}
                  {donation < 1 && (
                    <span>
                      Help us plan for the future and support the local youths
                      within 15 miles of Blackpool Tower.{" "}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <StripeCheckoutButton donation={donation} />
              </div>
              <div className="mt-5">
                <img
                  src={GiftAidLogo}
                  className="home-inner-img"
                  alt="Gift Aid"
                />
              </div>
              <p className="mt-3">
                Are you a UK tax payer? With Gift Aid boost your donation by{" "}
                <strong>
                  25%{" "}
                  {donation > 0 && (
                    <span>
                      (
                      {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP"
                      }).format(donation * 0.25)}
                      )
                    </span>
                  )}
                </strong>{" "}
                at no extra cost to you.
              </p>
              <span className="btn btn-warning btn-lg mt-3">
                Boost your donation
              </span>
              <div className="form-check mt-3">
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
              <small className="mt-5">
                I confirm that this is my own money and I would like The Gerry
                Richardson Trust to treat all the donations I have made in the
                past (if any) and any future donations I make, unless I notify
                you otherwise, as Gift Aid donations.
              </small>
              <small>
                I also confirm that I am a UK taxpayer and understand that if I
                pay less Income Tax and/or Capital Gains Tax in the current tax
                year than the amount of Gift Aid claimed on all my donations it
                is my responsibility to pay any difference.
              </small>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
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
