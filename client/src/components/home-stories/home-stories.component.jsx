import React from "react";
import { Link } from "react-router-dom";
import "./home-stories.styles.scss";

const HomeStories = () => {
  return (
    <section className="stories-container">
      <div className="story left">
        <img src="/images/nepal.jpg" alt="" />
        <h2>Hollies Story</h2>
        <span className="button-left-bottom">
          <Link to="/stories/hollies-story" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> Read
          </Link>
        </span>
      </div>
      <div className="story right">
        <img src="/images/stories.jpg" alt="" />
        <div className="content">
          <h4>Our Goal</h4>
          <p>To help children all accross the Fylde</p>
        </div>
        <span className="button-left-bottom">
          <Link to="/stories" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> More Stories
          </Link>
        </span>
      </div>
    </section>
  );
};

export default HomeStories;
