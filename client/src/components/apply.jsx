import React from "react";
import ApplyForm from "./apply-form/apply-form.component";

export const Apply = () => (
  <React.Fragment>
    <section id="top" className="jumbotron header-jumbotron">
      <div className="narrow">
        <h1 className="jumbotron-heading">Apply for a grant</h1>
      </div>
    </section>
    <div className="narrow">
      <div className="row">
        <div className="col-md-8">
          <h3>Application Form</h3>
          <p>
            These notes are to help you provide all the information required so
            that Trustees can come to a decision about your application.
          </p>
          <p className="font-weight-bolder">
            Please read these notes before progressing to the application form
            and also ensure that you have explored and considered ALL sections
            of our website.
          </p>
          <ul>
            <li>All form fields are required.</li>
            <li>
              Your application must meet our criteria - live within 15 miles of
              Blackpool Tower and be under the age of 25
            </li>
            <li>
              If your application is successful, you will be sent an offer
              letter by email as soon as possible after the meeting which will
              include terms and conditions for your acceptance.
            </li>
            <li>
              If further information becomes available after submission of your
              application but prior to the Trustees’ quarterly meeting, eg
              receiving the result of an outstanding funding application or
              needing to change details on this application, you will need to
              contact us to let us know about this change.
            </li>
            <li>
              Trustees do not enter into any communication about rejected
              applications nor is there an appeals process.
            </li>
            <li>
              Once you submit your application, you will receive an
              acknowledgement email within a few minutes confirming receipt of
              your application. Should we require further information we will
              contact you by email.
            </li>
          </ul>
          <ApplyForm />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card bg-light mb-3">
            <div className="card-header text-white text-uppercase contact-card-header">
              <i className="fas fa-edit"></i> Other Ways to apply
            </div>
            <div className="card-body card-text">
              <p>
                Whilst we would prefer you to complete our online form, you can
                also write to us using the address below.
              </p>
              <p>
                <strong>Gerry Richardson Trust</strong>
                <br />
                Northdene,
                <br />
                Stoney Lane,
                <br />
                Hambleton,
                <br />
                Poulton-Le-Fylde,
                <br />
                FY6 9AF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
