import React, { useState, useEffect } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { useForm } from "react-hook-form";
import api from "./../utils/api";
import axios from "axios";
import "./donate-payment-form.styles.scss";

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
              //TODO - temp fix to scroll to top on form submission. Possibly need diaplog box.
              window.scrollTo(0, 0);
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
                },
                error => {
                  // TODO - need to look at handling error for email but Stripe is suceeded.
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
      },
      padding: "0.5rem 1rem"
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var classes = {
    base: "field"
  };

  return (
    <React.Fragment>
      {!succeeded && (
        <div>
          <div className="payment-header">
            <h1>You're donating £{props.location.state.donation}</h1>
          </div>
          <div className="payment-container">
            {Object.keys(errors).length > 0 && (
              <div className="alert alert-danger">
                <h4 className="alert-heading">Holy guacamole!</h4>
                <p>You should check in on some of those fields below.</p>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group">
                <h2 className="heading">Your Details</h2>
                <div>
                  <label htmlFor="firstName">First Name(s)*</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className={`${
                      errors.firstName ? "field inputError" : "field"
                    }`}
                    placeholder="First name"
                    ref={register({ required: "Please enter your First name" })}
                  />
                  {errors.firstName && (
                    <span className="error">{errors.firstName.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName">Last Name(s)*</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className={`${
                      errors.lastName ? "field inputError" : "field"
                    }`}
                    placeholder="Last name"
                    ref={register({ required: "Please enter your Last name" })}
                  />
                  {errors.lastName && (
                    <span className="error">{errors.lastName.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email*</label>
                  <input
                    className={`${errors.email ? "field inputError" : "field"}`}
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
                <div>
                  <label htmlFor="telNum">Tel Number</label>
                  <input
                    type="text"
                    className="field"
                    id="telNum"
                    placeholder="Tel Num"
                  />
                </div>
              </div>
              <div className="form-group">
                <h2 className="heading">Billing Address</h2>
                <div>
                  <label htmlFor="address">Address*</label>
                  <input
                    className={`${
                      errors.address ? "field inputError" : "field"
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
                <div>
                  <label htmlFor="address2">
                    <span className="sr-only sr-only-focusable">Address 2</span>
                  </label>
                  <input type="text" className="field" id="address2" />
                </div>
                <div>
                  <label htmlFor="town">Town*</label>
                  <input
                    className={`${errors.town ? "field inputError" : "field"}`}
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
                <div>
                  <label htmlFor="postCode">Post Code*</label>
                  <input
                    className={`${
                      errors.postCode ? "field inputError" : "field"
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
              <div className="form-group">
                <h2 className="heading">Payment Details</h2>
                <CardElement
                  className="field"
                  style={style}
                  classes={classes}
                />
                <button
                  type="submit"
                  className="btn-donate"
                  disabled={processing}
                >
                  {processing && <i className="fas fa-sync fa-spin"></i>}
                  {!processing ? `Pay £${donation}` : " Processing"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {succeeded && (
        <div>
          <div className="payment-header">
            <h2 className="contact-header-text">
              Your Donation has been authorised
            </h2>
            <h1>You have donated £{props.location.state.donation}</h1>
          </div>
          <div className="payment-container">
            <p>
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
              You truly make the difference for us, and we are extremely
              grateful!
            </p>
            <p>Yours</p>
            <p>The Trustees</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default injectStripe(DonatePaymentForm);
