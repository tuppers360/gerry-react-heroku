import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact.styles.scss";

export const Contact = () => (
  <React.Fragment>
    <main>
      <div className="contact-header">
        <h2 className="contact-header-text">Contact Us</h2>
        <h1>Get In Touch with the Gerry Richardson Trust</h1>
        <h2 className="subtitle">
          Below you will find a few ways to contact us
        </h2>
      </div>
      <div className="contact-container-grid">
        <div className="contact-item contact-box">
          <h3>
            <i className="fa fa-envelope"></i> Send us a message
          </h3>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="contact-item">
          <h3>
            <i className="fa fa-home"></i> Get in touch
          </h3>
          <div>
            <p>
              We’re very approachable and would love to speak to you. Feel free
              to call, send us an email, Tweet us or simply complete the enquiry
              form.
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
    </main>
  </React.Fragment>
);
