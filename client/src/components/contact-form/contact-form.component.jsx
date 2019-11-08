import React from "react";
import useForm from "./../utils/useForm.component";
import validate from "../utils/validateContactForm";
import axios from "axios";

const ContactForm = () => {
  //TODO: using this causes error of changing uncontrolled input
  //const initialValues = { name: "", email: "", message: "" };

  const { handleChange, handleSubmit, handleBlur, values, errors } = useForm(
    //initialValues,
    submit,
    validate
  );

  async function submit() {
    values.subject = "Contact from Gerry Richardson Trust";
    try {
      await axios
        .post("/api/mailgun/contact", {
          values
        })
        .then(
          response => {
            console.log(response);
            console.log("No errors, submit callback called!");
          },
          error => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
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
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          type="email"
          className={`${
            errors.email ? "form-control inputError" : "form-control"
          }`}
          aria-describedby="Email Help"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        {errors.email && <p className="error">{errors.email}</p>}
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
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="6"
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <div className="mx-auto">
        <button type="submit" className="btn btn-primary text-right">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
