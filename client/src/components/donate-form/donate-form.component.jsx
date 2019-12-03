import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";

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

  const handleChange = amount => {
    setDonation(amount);
  };

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
        <div className="container">
          <div className="d-flex justify-content-center mb-5 mt-5">
            <h2>Donate to The Gerry Richardson Trust now</h2>
          </div>
          <div className="d-flex justify-content-center">
            <h3 className="mb-5">
              And help us to help the local youths of Blackpool, Fylde and Wyre
            </h3>
          </div>
          <div className="row justify-content-center col-md-12 col-lg-8 offset-lg-2">
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
          <div className="row justify-content-center col-md-12 col-lg-8 offset-lg-2">
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
            <div className="row justify-content-center col-md-12 col-lg-8 offset-lg-2">
              <div className="form-group row">
                <label
                  htmlFor="customdonationamount"
                  className="col-md-6 col-lg-6"
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
            <div className="col-12 col-sm-6 justify-content-md-center">
              <Link
                to={{
                  pathname: "/donate/payment",
                  state: {
                    donation: donation
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
