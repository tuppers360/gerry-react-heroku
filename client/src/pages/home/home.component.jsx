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
      <a href={"#mission"} className="btn btn-outline-light btn-lg rounded-0">
        Our Mission
      </a>
    </div>
    <div id="mission">
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
    </div>
    <section className="stories-container">
      <div className="story">
        <img src="/images/nepal.jpg" alt="" />
        <h2>Hollies Story</h2>
        <span className="button-left-bottom">
          <Link to="/stories/hollies-story" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> Read
          </Link>
        </span>
      </div>
      <div className="story">
        <img src="/images/stories.jpg" alt="" />
        <div className="content">
          <h4>Our Goal</h4>
          <p>To help children all accross the Fylde</p>
          <span>
            <Link to="/stories" className="btn btn-lg btn-primary">
              <i className="fab fa-readme"></i> More Stories
            </Link>
          </span>
        </div>
      </div>
    </section>
    <ThankYou />
  </React.Fragment>
);
