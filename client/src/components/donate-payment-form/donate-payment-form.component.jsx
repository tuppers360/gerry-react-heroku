import React, { useState, useEffect } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import api from "./../utils/api";

const Styles = styled.div`
  h3 {
    display: flex;
    color: #0091cd;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h3:before,
  h3:after {
    content: "";
    border-top: 1px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  h3:after {
    margin: 0 0 0 20px;
  }
`;

const DonatePaymentForm = props => {
  const [clientSecret, setClientSecret] = useState(null);
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    setDonation(props.location.state.donation);
    console.log("USEEFFECT:", props);
  }, [props]);

  const handleSubmit = async e => {
    e.preventDefault();
    const amount = donation * 100;
    const name = "donation";

    api
      .createPaymentIntent({
        amount,
        name,
        payment_method_types: ["card"]
      })
      .then(clientSecret => {
        setClientSecret(clientSecret);

        props.stripe.handleCardPayment(clientSecret).then(payload => {
          if (payload.error) {
            console.log("[error]", payload.error);
          } else {
            console.log("[PaymentIntent]", payload.paymentIntent);
          }
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  var style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var classes = {
    base: "form-control"
  };

  return (
    <Styles>
      <h1 className="text-center">You're donating £{donation}</h1>
      <form onSubmit={handleSubmit} className="justify-content-md-center">
        <div className="col-md-6 offset-md-3">
          <h3>Your Details</h3>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-4 col-form-label">
              First Name(s)*
            </label>
            <div className="col-sm-8">
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-4 col-form-label">
              Last Name(s)*
            </label>
            <div className="col-sm-8">
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
              Email*
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="telNum" className="col-sm-4 col-form-label">
              Tel Number
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="telNum"
                placeholder="Tel Num"
              />
            </div>
          </div>
          <h3>Billing Address</h3>
          <div className="form-group row">
            <label htmlFor="inputAddress" className="col-sm-4 col-form-label">
              Address*
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Gerry Richardson Way"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputAddress2" className="col-sm-4 col-form-label">
              <span className="sr-only sr-only-focusable">Address 2</span>
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputAddress2" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="town" className="col-sm-4 col-form-label">
              Town*
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="town"
                placeholder="Town"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="postCode" className="col-sm-4 col-form-label">
              Post Code*
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="postCode"
                placeholder="Post Code"
              />
            </div>
          </div>
          <h3>Payment Details</h3>
          <div className="form-row justify-content-md-center">
            <div className="form-group col-sm-12 col-md-12">
              <CardElement
                className="sr-input sr-card-element"
                style={style}
                classes={classes}
              />
            </div>
          </div>
          <div className="form-row justify-content-md-center">
            <div className="col-sm-8 col-md-8">
              <Button variant="primary" type="submit" size="lg" block>
                Pay £{donation}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="form-row justify-content-md-center">
        <p>Client Secret: {clientSecret}</p>
      </div>
    </Styles>
  );
};

export default injectStripe(DonatePaymentForm);
