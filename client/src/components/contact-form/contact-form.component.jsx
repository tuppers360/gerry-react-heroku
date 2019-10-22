import React from "react";
import useForm from "./../utils/useForm.component";
import validate from "./../utils/validate";

const ContactForm = () => {
  const { handleChange, handleSubmit, handleBlur, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Successfully");
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
          aria-describedby="emailHelp"
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
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          type="text"
          className={`${
            errors.message ? "form-control inputError" : "form-control"
          }`}
          aria-describedby="emailHelp"
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
