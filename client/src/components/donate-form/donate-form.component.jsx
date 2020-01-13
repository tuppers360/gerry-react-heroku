import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import GiftAidLogo from "../../assets/gift-aid-logo.png";

const Styles = styled.div`
  a:hover {
    text-decoration: none;
  }
  h2 {
    display: flex;
    color: #0091cd;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h2:before,
  h2:after {
    content: "";
    border-top: 1px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  h2:after {
    margin: 0 0 0 20px;
  }

  .btn-group-donation-type li,
  .donation-form-amount {
    justify-content: center;
    padding: 0;
    margin: 0;
    display: flex;
  }
  /**
 * The container and the item are both
 * into flex layout. To align items
 * to each other.
 */
  .btn-group-donation-type,
  .btn-group-donation-type li,
  .btn-group-donate-buttons,
  .btn-group-donate-buttons li {
    display: flex;
    padding: 0;
    margin: 0;
  }
  /**
 * Force to occupy the space available
 * and allow item being on several lines
 */
  .btn-group-donation-type,
  .btn-group-donate-buttons {
    width: 100%;
    list-style: none;
    flex-wrap: wrap;
  }
  /**
 * Items tend to occupy 25% of
 * the available width but are
 * allow to grow.
 */
  .btn-group-donation-type li,
  .btn-group-donate-buttons li {
    flex-basis: 25%;
    flex-shrink: 0;
    flex-grow: 1;
  }
  .btn-group-donate-buttons li {
    cursor: pointer;
  }
  /**
 * The anchor is also in Flex
 * to align icon and text and
 * center their content.
 */
  .btn-group-donation-type span,
  .btn-group-donate-buttons span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 25px;
    padding: 1em 1em;
    font-weight: 700;
    text-decoration: none;
    margin: 5px 5px;
  }
`;

const DonationForm = () => {
  const [donation, setDonation] = useState("");
  const [giftAid, setGiftAid] = useState(false);
  const [donationButtons, setDonationButtons] = useState([
    {
      id: "1",
      value: "10"
    },
    {
      id: "2",
      value: "20"
    },
    {
      id: "3",
      value: "50"
    }
  ]);
  const [showCustomDonation, setShowCustomDonation] = useState(false);
  const [activeButtonAmount, setActiveButtonAmount] = useState(null);
  //TODO - still to implement this fully as Monthly option not completed at this time.
  const [activeButtonAmountType, setActiveButtonAmountType] = useState(1);

  const handleClick = (id, donation) => {
    if (showCustomDonation) setShowCustomDonation(!showCustomDonation);
    setActiveButtonAmount(id);
    setDonation(donation);
  };

  const toggle = () => {
    setShowCustomDonation(!showCustomDonation);
    setDonation("0");
    setActiveButtonAmount(4);
  };

  return (
    <React.Fragment>
      <Styles>
        <div className="container col-md-12 col-lg-8 offset-lg-2">
          <div className="d-flex justify-content-center mb-5 mt-5">
            <h2>Donate to The Gerry Richardson Trust now</h2>
          </div>
          <div className="d-flex justify-content-center">
            <h3 className="mb-5">
              And help us to help the local youths of Blackpool, Fylde and Wyre
            </h3>
          </div>
          <div className="row justify-content-center">
            <ul
              className="btn-group-donation-type mb-2"
              aria-label="Donation Button Group Type"
            >
              <li key="1">
                <span
                  className={`btn btn${
                    activeButtonAmountType === 1 ? "" : "-outline"
                  }-info rounded`}
                >
                  One Off Payment
                </span>
              </li>
              <li key="2">
                <span className="btn btn-outline-info rounded disabled">
                  Regular Payment (coming Soon)
                </span>
              </li>
            </ul>
          </div>
          <div className="row justify-content-center">
            <ul
              className="btn-group-donate-buttons mb-2"
              aria-label="Donation Button Group Amount"
            >
              {donationButtons.map((item, e) => (
                <li key={item.id}>
                  <span
                    className={`btn btn${
                      activeButtonAmount === item.id ? "" : "-outline"
                    }-info rounded`}
                    value={item.value}
                    onClick={e => handleClick(item.id, item.value)}
                  >
                    £{item.value}
                  </span>
                </li>
              ))}
              <li key="4">
                <span
                  className={`btn btn${
                    activeButtonAmount === 4 ? "" : "-outline"
                  }-info rounded`}
                  onClick={toggle}
                >
                  Other
                </span>
              </li>
            </ul>
          </div>
          {showCustomDonation && (
            <div className="row justify-content-center">
              <div className="form-group row">
                <label
                  htmlFor="customdonationamount"
                  className="col-md-5 col-lg-6"
                >
                  Donate what you want to:
                </label>
                <div className="col-md-7 col-lg-6">
                  <input
                    id="customdonationamount"
                    pattern="[0-9]*"
                    name="donation"
                    type="number"
                    aria-describedby="Custom Donation Amount"
                    placeholder="Enter Donation"
                    min="1"
                    onChange={e => setDonation(e.currentTarget.value)}
                    className="text-center input-lg form-control"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="row justify-content-center">
            <img src={GiftAidLogo} className="mt-3" alt="Gift Aid" />
          </div>
          <div className="row justify-content-center">
            <div className="row">
              <h3>Are you a UK tax payer?</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            With Gift Aid boost your donation by&nbsp;
            <strong>
              25%&nbsp;
              {donation > 0 && (
                <span>
                  (
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                  }).format(donation * 0.25)}
                  )&nbsp;
                </span>
              )}
            </strong>
            at no extra cost to you.
          </div>
          <div className="row justify-content-center">
            <label htmlFor="giftAid">
              Please claim Gift Aid on my behalf
              <input
                type="checkbox"
                value={giftAid}
                onChange={e => setGiftAid(!giftAid)}
                id="giftAid"
              />
            </label>
          </div>
          <div className="row justify-content-center">
            <small className="mt-3 col-md-8">
              I confirm that this is my own money and I would like The Gerry
              Richardson Trust to treat all the donations I have made in the
              past (if any) and any future donations I make, unless I notify you
              otherwise, as Gift Aid donations.
            </small>
            <small className="mt-2 mb-4 col-md-8">
              I also confirm that I am a UK taxpayer and understand that if I
              pay less Income Tax and/or Capital Gains Tax in the current tax
              year than the amount of Gift Aid claimed on all my donations it is
              my responsibility to pay any difference.
            </small>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 justify-content-md-center">
              <Link
                to={{
                  pathname: "/donate/payment",
                  state: {
                    donation: donation,
                    giftAid: giftAid
                  }
                }}
              >
                <Button
                  variant="danger"
                  size="lg"
                  disabled={donation > 0 ? false : true}
                  block
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default DonationForm;
