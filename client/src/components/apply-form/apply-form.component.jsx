import React from "react";
import useForm from "./../utils/useForm.component";
import validate from "../utils/validateApplyForm";

const ApplyForm = () => {
  //TODO: using this causes error of changing uncontrolled input
  //const initialValues = { name: "", email: "", message: "" };

  const { handleChange, handleSubmit, handleBlur, values, errors } = useForm(
    //initialValues,
    submit,
    validate
  );

  function submit() {
    console.log("No errors, submit callback called!");
    console.log("Submitted Successfully", values, errors);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="col-md-6">
          <label htmlFor="name">Name</label>
          <input
            className={`${
              errors.firstName ? "form-control inputError" : "form-control"
            }`}
            name="firstname"
            type="text"
            aria-describedby="Name Help"
            placeholder="Enter name"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="name">Last Name</label>
          <input
            className={`${
              errors.lastName ? "form-control inputError" : "form-control"
            }`}
            name="lastName"
            type="text"
            aria-describedby="Name Help"
            placeholder="Enter name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input
            className={`${
              errors.dateOfBirth ? "form-control inputError" : "form-control"
            }`}
            name="dateOfBirth"
            type="text"
            aria-describedby="Date Of Birth"
            placeholder="Enter date of birth"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dateOfBirth && (
            <span className="error">{errors.dateOfBirth}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6">
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
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <label htmlFor="email">Address</label>
          <input
            name="address"
            type="text"
            className={`${
              errors.email ? "form-control inputError" : "form-control"
            }`}
            aria-describedby="Address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="postCode">Post Code</label>
          <input
            name="postCode"
            type="text"
            className={`${
              errors.postCode ? "form-control inputError" : "form-control"
            }`}
            aria-describedby="Post Code"
            placeholder="Post Code"
            value={values.postCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.postCode && <span className="error">{errors.postCode}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-12">
          <label htmlFor="message">
            Please provide us with as much information about your application as
            possible. How will this funding make a difference? Who will benefit?
          </label>
          <textarea
            name="apply"
            type="text"
            className={`${
              errors.apply ? "form-control inputError" : "form-control"
            }`}
            aria-describedby="Application text"
            placeholder="Enter your message"
            value={values.apply}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="6"
          ></textarea>
          {errors.apply && <span className="error">{errors.apply}</span>}
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
    //     <label htmlFor="email">Email address</label>
    //     <input
    //       name="email"
    //       type="email"
    //       className={`${
    //         errors.email ? "form-control inputError" : "form-control"
    //       }`}
    //       aria-describedby="Email Help"
    //       placeholder="Enter email"
    //       value={values.email}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //     />
    //     <small id="emailHelp" className="form-text text-muted">
    //       We'll never share your email with anyone else.
    //     </small>
    //     {errors.email && <p className="error">{errors.email}</p>}
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="message">Message</label>
    //     <textarea
    //       name="message"
    //       type="text"
    //       className={`${
    //         errors.message ? "form-control inputError" : "form-control"
    //       }`}
    //       aria-describedby="Message Help text"
    //       placeholder="Enter your message"
    //       value={values.message}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       rows="6"
    //     ></textarea>
    //     {errors.message && <p className="error">{errors.message}</p>}
    //   </div>
    //   <div className="mx-auto">
    //     <button type="submit" className="btn btn-primary text-right">
    //       Submit
    //     </button>
    //   </div>
    // </form>
  );
};

export default ApplyForm;
