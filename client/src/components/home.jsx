import React from "react";
import { Link } from "react-router-dom";
import { ThankYou } from "./home/thankyou";

export const Home = () => (
  <React.Fragment>
    <div className="landing">
      <div className="home-wrap">
        <div className="home-inner">
          <img
            src="/images/blackpool_tower_darker_resize.png"
            className="home-inner-img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="caption text-center">
      <h1>The</h1>
      <h1>Gerry Richardson</h1>
      <h1>Trust</h1>
      <a className="btn btn-lg btn-primary" href="#mission">
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
    {/* Start Jumbotron Section */}
    <section className="homeStories">
      <div className="card-group">
        <div className="card">
          <img
            className="card-img-top"
            src="/images/nepal.jpg"
            alt="Flex Card 1"
          />
          <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
            <h1 className="text-center">Hollies Story</h1>
            <p className="card-text text-right">
              <Link
                to="/stories/hollies-story"
                className="btn btn-lg btn-primary"
              >
                <i className="fab fa-readme"></i> Read
              </Link>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="/images/stories.jpg"
            alt="Flex Card 1"
          />
          <div className="card-img-overlay text-white d-flex flex-column text-center justify-content-center">
            <h4 className="card-title text-warning">Our Goal</h4>
            <h1 className="card-subtitle mb-2">
              To help children all accross the Fylde
            </h1>
            <p className="card-text">
              <Link to="/stories" className="btn btn-lg btn-primary">
                <i className="fab fa-readme"></i> More Stories
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End Jumbotron Section */}
    <ThankYou />
  </React.Fragment>
);
