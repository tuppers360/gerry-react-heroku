import React, { useState, useEffect } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import api from "./../utils/api";
import axios from "axios";

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
  const [giftAid, setGiftAid] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, isProcessing] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    setDonation(props.location.state.donation);
    setGiftAid(props.location.state.giftAid);
    console.log("USEEFFECT:", props);
  }, [props]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    isProcessing(true);
    const cardElement = props.elements.getElement("card");
    data.donation = donation;
    data.giftAid = giftAid;
    console.log({ data });
    await api
      .createPaymentIntent({
        amount: data.donation * 100,
        payment_method_types: ["card"],
        giftAid: data.giftAid
      })
      .then(clientSecret => {
        setClientSecret(clientSecret);
        console.log("ClientSecret", clientSecret);
        props.stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardElement
            }
          })
          .then(payload => {
            if (payload.error) {
              isProcessing(false);
              console.log("[error]", payload.error);
            } else {
              setSucceeded(true);
              console.log("[Succeeded]", succeeded);
              console.log("[PaymentIntent]", payload.paymentIntent);
            }
          })
          .then(
            axios
              .post(
                "/api/sendgrid/donation",
                { body: data },
                { headers: { "Content-Type": "application/json" } }
              )
              .then(
                res => {
                  console.log("Submitted Successfully", data);
                  e.target.reset();
                },
                error => {
                  console.log(error);
                }
              )
          );
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
      {!succeeded && (
        <div>
          <h1 className="text-center">You're donating £{donation}</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="justify-content-md-center"
            noValidate
          >
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
                    name="firstName"
                    className={`${
                      errors.firstName
                        ? "form-control inputError"
                        : "form-control"
                    }`}
                    placeholder="First name"
                    ref={register({ required: "Please enter your First name" })}
                  />
                  {errors.firstName && (
                    <span className="error">{errors.firstName.message}</span>
                  )}
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
                    name="lastName"
                    className={`${
                      errors.lastName
                        ? "form-control inputError"
                        : "form-control"
                    }`}
                    placeholder="Last name"
                    ref={register({ required: "Please enter your Last name" })}
                  />
                  {errors.lastName && (
                    <span className="error">{errors.lastName.message}</span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-4 col-form-label">
                  Email*
                </label>
                <div className="col-sm-8">
                  <input
                    className={`${
                      errors.email ? "form-control inputError" : "form-control"
                    }`}
                    id="email"
                    name="email"
                    type="email"
                    aria-describedby="Email"
                    placeholder="Enter email"
                    ref={register({
                      required: "Please enter your email address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
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
                <label htmlFor="address" className="col-sm-4 col-form-label">
                  Address*
                </label>
                <div className="col-sm-8">
                  <input
                    className={`${
                      errors.address
                        ? "form-control inputError"
                        : "form-control"
                    }`}
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Gerry Richardson Way"
                    ref={register({
                      required: "Please enter your address"
                    })}
                  />
                  {errors.address && (
                    <span className="error">{errors.address.message}</span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="address2" className="col-sm-4 col-form-label">
                  <span className="sr-only sr-only-focusable">Address 2</span>
                </label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="address2" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="town" className="col-sm-4 col-form-label">
                  Town*
                </label>
                <div className="col-sm-8">
                  <input
                    className={`${
                      errors.town ? "form-control inputError" : "form-control"
                    }`}
                    id="town"
                    name="town"
                    type="text"
                    placeholder="Town"
                    ref={register({
                      required: "Please enter your town"
                    })}
                  />
                  {errors.town && (
                    <span className="error">{errors.town.message}</span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="postCode" className="col-sm-4 col-form-label">
                  Post Code*
                </label>
                <div className="col-sm-8">
                  <input
                    className={`${
                      errors.postCode
                        ? "form-control inputError"
                        : "form-control"
                    }`}
                    id="postCode"
                    name="postCode"
                    type="text"
                    placeholder="Post Code"
                    ref={register({
                      required: "Please enter your post code"
                    })}
                  />
                  {errors.postCode && (
                    <span className="error">{errors.postCode.message}</span>
                  )}
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
                <div className="col-sm-12 col-md-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mt-3"
                    disabled={processing}
                  >
                    {processing && <i className="fas fa-sync fa-spin"></i>}
                    {!processing ? `Pay £${donation}` : " Processing"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {succeeded && (
        <div className="text-center narrow">
          <h1 className="mt-3">Thank you</h1>
          <h3 className="mt-3">Your Donation has been authorised</h3>
          <p className="mt-3">
            Thank you for your generous gift to the Gerry Richardson Trust.
          </p>
          <p>We are thrilled to have your support.</p>
          <p>
            Through your donation we will be able to accomplish our goal of
            supporting young people, aged 25 or under, to attend courses and
            activities of an educational, cultural, sporting, adventuresome or
            character-building nature.
          </p>
          <p>
            You truly make the difference for us, and we are extremely grateful!
          </p>
        </div>
      )}
    </Styles>
  );
};

export default injectStripe(DonatePaymentForm);
