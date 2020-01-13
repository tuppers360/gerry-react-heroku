import React from "react";
import { useForm } from "react-hook-form";

const ApplyForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log("Submitted Successfully", data, errors);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-row">
        <div className="col-md-6">
          <label htmlFor="firstName">First Name</label>
          <input
            className={`${
              errors.firstName ? "form-control inputError" : "form-control"
            }`}
            name="firstName"
            type="text"
            aria-describedby="First Name"
            placeholder="Enter name"
            ref={register({ required: "Please enter your first name" })}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            className={`${
              errors.lastName ? "form-control inputError" : "form-control"
            }`}
            name="lastName"
            type="text"
            aria-describedby="Name Help"
            placeholder="Enter name"
            ref={register({ required: "Please enter your last name" })}
          />
          {errors.lastName && (
            <span className="error">{errors.lastName.message}</span>
          )}
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
            ref={register({
              required: "Please enter date of birth",
              pattern: {
                value: /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                message: "Please enter your date of birth format dd/mm/yyyy"
              }
            })}
          />
          {errors.dateOfBirth && (
            <span className="error">{errors.dateOfBirth.message}</span>
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
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            className={`${
              errors.address ? "form-control inputError" : "form-control"
            }`}
            aria-describedby="Address"
            placeholder="Address"
            ref={register({ required: "Please enter your address" })}
          />
          {errors.address && (
            <span className="error">{errors.address.message}</span>
          )}
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
            ref={register({ required: "Please enter your post code" })}
          />
          {errors.postCode && (
            <span className="error">{errors.postCode.message}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-12">
          <label htmlFor="apply">
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
            ref={register({ required: "Please enter your application" })}
            rows="6"
          ></textarea>
          {errors.apply && (
            <span className="error">{errors.apply.message}</span>
          )}
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  );
};

export default ApplyForm;
