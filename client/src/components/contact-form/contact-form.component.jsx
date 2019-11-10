import React, { useState } from "react";
import axios from "axios";
import useForm from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    data.subject = "Contact from Gerry Richardson Trust";
    console.log("FORMDATA:", formData);
    try {
      await axios
        .post(
          "/api/nodemailer/contact",
          { body: data },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(
          res => {
            console.log(res);
            console.log("No errors, submit callback called!");
            e.target.reset();
          },
          error => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("FORMDATA:", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className={`${
            errors.name ? "form-control inputError" : "form-control"
          }`}
          name="name"
          type="text"
          onChange={handleInputChange}
          value={formData.name}
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
          onChange={handleInputChange}
          value={formData.email}
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
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          type="text"
          onChange={handleInputChange}
          value={formData.message}
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
        <button type="submit" className="btn btn-primary text-right">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
