import React from "react";
import { Link } from "react-router-dom";
import { ThankYou } from "./../thankyou/thankyou";
import GerryLogo from "./blackpool_tower_darker_resize.png";
import styled from "styled-components";

const Styles = styled.div`
  /*====================== Landing Section ======================*/
  .landing {
    position: relative;
    width: 100%;
    height: 100vh;
    display: table;
    z-index: -1;
  }
  .home-wrap {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  .home-inner {
    background-image: url(${GerryLogo});
    position: fixed;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
  }
  /* Landing Section - Caption */
  .caption {
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 30%;
    z-index: 1;
  }
  .caption h1 {
    font-size: 4.5rem;
    letter-spacing: 0.3rem;
    text-shadow: 0.1rem 0.1rem 0.8rem black;
    padding-bottom: 1rem;
  }
  .caption h3 {
    font-size: 2.5rem;
    text-shadow: 0.1rem 0.1rem 0.8rem black;
    padding-bottom: 2rem;
  }
  .caption .btn-lg {
    border-width: medium;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
  }
`;

export const Home = () => (
  <Styles>
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
    {/* Start Jumbotron Section */}
    <section class="stories-container">
      <div class="story left">
        <h2>Hollies Story</h2>
        <p>
          <Link to="/stories/hollies-story" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> Read
          </Link>
        </p>
      </div>
      <div class="story right">
        <h2>Sales Point 3</h2>
        <p>
          <Link to="/stories" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> More Stories
          </Link>
        </p>
      </div>
    </section>
    {/* End Jumbotron Section */}
    <ThankYou />
  </Styles>
);
