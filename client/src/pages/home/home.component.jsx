import React from "react";
import { Link } from "react-router-dom";
import { ThankYou } from "./../../components/thankyou/thankyou";
import "./home.styles.scss";

export const Home = () => (
  <React.Fragment>
    <div className="landing">
      <div className="home-wrap">
        <div className="home-inner"></div>
      </div>
    </div>
    <div className="caption text-center text-light text-uppercase">
      <h1 className="font-weight-bold">Welcome to the</h1>
      <h3>Gerry Richardson Trust</h3>
      <a href="#mission" className="btn btn-outline-light btn-lg rounded-0">
        Our Mission
      </a>
    </div>
    {/* Start Mission Section */}
    <div id="mission" className="offset">
      {/* Start Top Section */}
      <div className="narrow text-center">
        <div className="col-12">
          <h1>Our Mission</h1>
          <p className="lead">
            The trust seeks to promote youth development by supporting young
            people, aged 25 or under, to attend courses and activities of an
            educational, cultural, sporting, adventuresome or character-building
            nature. It is willing to entertain written applications for
            financial assistance from young people living or working within 15
            miles of the town hall in Blackpool, Lancashire.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-sm">
            Contact
          </Link>
          <Link to="/about" className="btn btn-info btn-sm">
            Who are we
          </Link>
        </div>
      </div>
      {/* End Animation Section */}
    </div>
    {/* End Mission Section */}
    {/* Start Stories Section */}
    <section className="stories-container">
      <div className="story left">
        <h2>Hollies Story</h2>
        <p>
          <Link to="/stories/hollies-story" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> Read
          </Link>
        </p>
      </div>
      <div className="story right">
        <h1>Our Goal</h1>
        <h2>To help children all accross the Fylde</h2>
        <p>
          <Link to="/stories" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> More Stories
          </Link>
        </p>
      </div>
    </section>
    {/* End Stories Section */}
    <ThankYou />
  </React.Fragment>
);
