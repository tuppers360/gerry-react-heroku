import React from "react";

export const Contact = () => (
  <React.Fragment>
    <section className="jumbotron header-jumbotron">
      <div className="narrow">
        <h1 className="jumbotron-heading">Contact Us</h1>
      </div>
    </section>
    <div className="narrow">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-white text-uppercase contact-card-header">
              <i className="fa fa-envelope"></i> Send us a message
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="mx-auto">
                  <button type="submit" className="btn btn-primary text-right">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="card bg-light mb-3">
            <div className="card-header text-white text-uppercase contact-card-header">
              <i className="fa fa-home"></i> Get in touch
            </div>
            <div className="card-body card-text">
              <p>
                We’re very approachable and would love to speak to you. Feel
                free to call, send us an email, Tweet us or simply complete the
                enquiry form.
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
