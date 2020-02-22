import React from "react";
import ContactForm from "./contact-form/contact-form.component";

export const Contact = () => (
  <React.Fragment>
    <main>
      <section>
        <div>
          <h1>Contact Us</h1>
        </div>
      </section>

      <div>
        <div>
          <i className="fa fa-envelope"></i> Send us a message
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

      <div>
        <i className="fa fa-home"></i> Get in touch
      </div>
      <div>
        <p>
          We’re very approachable and would love to speak to you. Feel free to
          call, send us an email, Tweet us or simply complete the enquiry form.
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
    </main>
  </React.Fragment>
);
