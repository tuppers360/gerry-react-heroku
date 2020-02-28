import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import GiftAidLogo from "../../assets/gift-aid-logo.png";
import "./donate-form.styles.scss";

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
      <div>
        <ul
          className="btn-group-donation-type"
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
      <div>
        <ul
          className="btn-group-donate-buttons"
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
        <div>
          <div>
            <label htmlFor="customdonationamount">
              Donate what you want to:
            </label>
            <div>
              <input
                id="customdonationamount"
                pattern="[0-9]*"
                name="donation"
                type="number"
                aria-describedby="Custom Donation Amount"
                placeholder="Enter Donation"
                min="1"
                onChange={e => setDonation(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="giftaid">
        <img src={GiftAidLogo} alt="Gift Aid" />
        <h2>Are you a UK tax payer?</h2>
        <h3>
          Boost your donation by&nbsp;
          <strong>
            25%&nbsp;
            {donation > 0 && (
              <strong>
                (
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP"
                }).format(donation * 0.25)}
                )&nbsp;
              </strong>
            )}
          </strong>
          at no extra cost to you.
        </h3>
        <label
          htmlFor="giftAid"
          className={`checkbox-container ${
            giftAid ? "far fa-check-square" : "far fa-square"
          }`}
        >
          <input
            type="checkbox"
            value={giftAid}
            onChange={() => setGiftAid(!giftAid)}
            id="giftAid"
          />
        </label>
        <span>Please claim Gift Aid on my behalf</span>
      </div>

      <div className="declaration">
        <p>
          Gift Aid is reclaimed by the charity from the tax you pay for the
          current year. Your address is needed to identify you as a current UK
          taxpayer.
        </p>
        <p>
          I confirm that this is my own money and I would like The Gerry
          Richardson Trust to treat all the donations I have made in the past
          (if any) and any future donations I make, unless I notify you
          otherwise, as Gift Aid donations.
        </p>
        <p>
          I also confirm that I am a UK taxpayer and understand that if I pay
          less Income Tax and/or Capital Gains Tax in the current tax year than
          the amount of Gift Aid claimed on all my donations it is my
          responsibility to pay any difference.
        </p>
      </div>
      <div>
        <div>
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
    </React.Fragment>
  );
};

export default DonationForm;
