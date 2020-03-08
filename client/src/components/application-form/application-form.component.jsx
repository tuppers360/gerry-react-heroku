import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./application-form.styles.scss";

const ApplicationForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSubmitted, isFormSubmitted] = useState(false);
  const [submitting, isSubmitting] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    isSubmitting(true);
    data.subject = `Application from ${data.firstName} ${data.lastName}`;
    try {
      await axios
        .post(
          "/api/sendgrid/application",
          { body: data },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(
          res => {
            console.log("Submitted Successfully", data);
            isFormSubmitted(true);
            e.target.reset();
          },
          error => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log({ error });
    } finally {
      isSubmitting(false);
    }
    e.target.reset();
  };

  return (
    <React.Fragment>
      {/* TODO - add fontawesome icons to alerts */}
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger text-center">
          <h4 className="alert-heading">Holy guacamole!</h4>
          <p className="mb-0">
            You should check in on some of those fields below.
          </p>
        </div>
      )}
      {formSubmitted && (
        <div className="alert alert-success text-center" role="alert">
          <h4 className="alert-heading">Successfully Sent! Good Luck!</h4>
          <hr />
          <p>Thank you for your application we will be in contact you soon!</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <div className="form__item">
            <label htmlFor="firstName" className="form__label">
              First Name
            </label>
            <input
              className={`${
                errors.firstName
                  ? "form__input form__input--error"
                  : "form__input"
              }`}
              name="firstName"
              type="text"
              aria-describedby="First Name"
              placeholder="Enter name"
              ref={register({ required: "Please enter your first name" })}
            />
            {errors.firstName && (
              <span className="form__error">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form__item">
            <label htmlFor="lastName" className="form__label">
              Last Name
            </label>
            <input
              className={`${
                errors.lastName
                  ? "form__input form__input--error"
                  : "form__input"
              }`}
              name="lastName"
              type="text"
              aria-describedby="Name Help"
              placeholder="Enter name"
              ref={register({ required: "Please enter your last name" })}
            />
            {errors.lastName && (
              <span className="form__error">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div>
          <div className="form__item">
            <label htmlFor="dateOfBirth" className="form__label">
              Date Of Birth
            </label>
            <input
              className={`${
                errors.dateOfBirth
                  ? "form__input form__input--error"
                  : "form__input"
              }`}
              name="dateOfBirth"
              type="text"
              aria-describedby="Date Of Birth"
              placeholder="Enter date of birth"
              ref={register({
                required: "Please enter date of birth",
                pattern: {
                  value: /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                  message: "Please enter your date of birth format dd/mm/yyyy"
                }
              })}
            />
            {errors.dateOfBirth && (
              <span className="form__error">{errors.dateOfBirth.message}</span>
            )}
          </div>
        </div>
        <div>
          <div className="form__item">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className={`${
                errors.email ? "form__input form__input--error" : "form__input"
              }`}
              aria-describedby="Email Help"
              placeholder="Enter email"
              ref={register({
                required: "Please enter your email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Please enter a valid email address"
                }
              })}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            {errors.email && (
              <span className="form__error">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div>
          <div className="form__item">
            <label htmlFor="address" className="form__label">
              Address
            </label>
            <input
              name="address"
              type="text"
              className={`${
                errors.address
                  ? "form__input form__input--error"
                  : "form__input"
              }`}
              aria-describedby="Address"
              placeholder="Address"
              ref={register({ required: "Please enter your address" })}
            />
            {errors.address && (
              <span className="form__error">{errors.address.message}</span>
            )}
          </div>
          <div className="form__item">
            <label htmlFor="postCode" className="form__label">
              Post Code
            </label>
            <input
              name="postCode"
              type="text"
              className={`${
                errors.postCode
                  ? "form__input form__input--error"
                  : "form__input"
              }`}
              aria-describedby="Post Code"
              placeholder="Post Code"
              ref={register({ required: "Please enter your post code" })}
            />
            {errors.postCode && (
              <span className="form__error">{errors.postCode.message}</span>
            )}
          </div>
        </div>
        <div>
          <div className="form__item">
            <label htmlFor="application" className="form__label">
              Please provide us with as much information about your application
              as possible. How will this funding make a difference? Who will
              benefit?
            </label>
            <textarea
              name="application"
              type="text"
              className={`${
                errors.application
                  ? "form__input form__input--error"
                  : "form__input"
              }`}
              aria-describedby="Application text"
              placeholder="Enter your application details"
              ref={register({ required: "Please enter your application" })}
              rows="6"
            ></textarea>
            {errors.application && (
              <span className="form__error">{errors.application.message}</span>
            )}
          </div>
        </div>
        <button type="submit" className="btn-application" disabled={submitting}>
          {submitting && <i className="fas fa-sync fa-spin"></i>}
          {!submitting ? "Submit Application" : " Submitting Application"}
        </button>
      </form>
    </React.Fragment>
  );
};

export default ApplicationForm;
