import React from "react";
import useForm from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log("Submitted Successfully", data, errors);
    e.target.reset();
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
          aria-describedby="Name Help"
          placeholder="Enter name"
          ref={register({ required: "Please enter your name" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
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
        {errors.email && <p className="error">{errors.email.message}</p>}
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
        {errors.message && <p className="error">{errors.message.message}</p>}
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
