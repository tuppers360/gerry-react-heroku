import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

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
          <p className="mb-0">
            You should check in on some of those fields below.
          </p>
        </div>
      )}
      {formSubmitted && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Success</h4>
          <hr />
          <p>Thank you for your message we will be in contact you soon!</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className={`${
              errors.name ? "form-control inputError" : "form-control"
            }`}
            name="name"
            type="text"
            aria-describedby="Name Help"
            placeholder="Enter name"
            ref={register({ required: "Please enter your name" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            className={`${
              errors.email ? "form-control inputError" : "form-control"
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
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            type="text"
            className={`${
              errors.message ? "form-control inputError" : "form-control"
            }`}
            aria-describedby="Message Help text"
            placeholder="Enter your message"
            ref={register({ required: "Please enter your message" })}
            rows="6"
          ></textarea>
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
        </div>
        <div className="mx-auto">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={submitting}
          >
            {submitting && <i className="fas fa-sync fa-spin"></i>}
            {!submitting ? "Submit" : " Submitting"}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
