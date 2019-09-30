import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <React.Fragment>
    {/* Start Footer Section */}
    <div id="contact">
      <footer>
        <div className="narrow">
          <div className="row">
            <div className="col-sm-3">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    <strong>Gerry Richardson Trust</strong>
                  </p>
                  <p>Northdene,</p>
                  <p>Stoney Lane,</p>
                  <p>Hambleton,</p>
                  <p>Poulton-Le-Fylde,</p>
                  <p>FY6 9AF</p>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title text-uppercase">Connect with Us</h5>
                  <div className="social">
                    <ul>
                      <li>
                        <a href="http://www.facebook.com">
                          <i className="fab fa-lg fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://www.twitter.com">
                          <i className="fab fa-lg fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://www.linkedin.com">
                          <i className="fab fa-lg fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://www.instgram.com">
                          <i className="fab fa-lg fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <i className="fa fa-phone"></i> (01253) 590510
                </div>
                <div className="card-body">
                  <Link to="/contact" className="btn btn-success">
                    <i className="fa fa-envelope"></i> Contact Us by Email
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body card-apply-online">
                  <h5 className="card-title">Would you like to apply?</h5>
                  <p className="card-text">
                    Do you live with 15 miles of Blackpool Tower? Are you under
                    25 years of age?
                  </p>
                  <Link to="/apply" className="btn btn-danger">
                    Apply Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
    {/* End of Footer Section */}
  </React.Fragment>
);
