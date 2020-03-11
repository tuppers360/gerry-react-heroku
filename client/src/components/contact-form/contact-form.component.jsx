import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./contact-form.styles.scss";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSubmitted, isFormSubmitted] = useState(false);
  const [submitting, isSubmitting] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    isSubmitting(true);
    data.subject = "Contact from Gerry Richardson Trust";
    try {
      await axios
        .post(
          "/api/sendgrid/contact",
          { body: data },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(
          res => {
            isFormSubmitted(true);
            //TODO - temp fix to scroll to top on form submission. Possibly need diaplog box.
            window.scrollTo(0, 0);
            e.target.reset();
          },
          error => {
            console.log(error);
          }
        );
    } catch (error) {
      // TODO - handle errors server & client
      console.log(error);
    } finally {
      isSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      {/* TODO - add fontawesome icons to alerts */}
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger">
          <h4 className="alert-heading">Holy guacamole!</h4>
          <p>You should check in on some of those fields below.</p>
        </div>
      )}
      {formSubmitted && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Eureka!</h4>
          <hr />
          <p>Thank you for your message we will be in contact you soon!</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form__item">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            className={`form__input ${
              errors.email ? "form__input--error" : ""
            }`}
            name="name"
            type="text"
            aria-describedby="Name Help"
            placeholder="Enter name"
            ref={register({ required: "Please enter your name" })}
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}
        </div>
        <div className="form__item">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            className={`form__input ${
              errors.email ? "form__input--error" : ""
            }`}
            name="email"
            type="email"
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
          {errors.email && (
            <span className="form__error">{errors.email.message}</span>
          )}
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form__item">
          <label htmlFor="message" className="form__label">
            Message
          </label>
          <textarea
            name="message"
            type="text"
            className={`form__input form__area ${
              errors.message ? "form__input--error" : ""
            }`}
            aria-describedby="Message Help text"
            placeholder="Enter your message"
            ref={register({ required: "Please enter your message" })}
            rows="6"
          ></textarea>
          {errors.message && (
            <span className="form__error">{errors.message.message}</span>
          )}
        </div>
        <div className="form__item">
          <button type="submit" className="form__btn" disabled={submitting}>
            {submitting && <i className="fas fa-sync fa-spin"></i>}
            {!submitting ? "Submit" : " Submitting"}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
