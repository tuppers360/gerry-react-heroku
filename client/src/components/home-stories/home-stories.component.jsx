import React from "react";
import { Link } from "react-router-dom";
import "./home-stories.styles.scss";
import HomeStory from "./../../assets/images/stories/hollies-story/hollie_1.jpg";
import MoreStories from "./../../assets/images/stories.jpg";

const HomeStories = () => {
  return (
    <section className="stories-container">
      <div className="story left">
        <img src={HomeStory} alt="" />
        <h2 className="left">Hollies Story</h2>
        <span className="button-left-bottom">
          <Link to="/stories/hollies-story" className="btn btn-lg btn-primary">
            <i className="fab fa-readme"></i> Read
          </Link>
        </span>
      </div>
      <div className="story right">
        <img src={MoreStories} alt="" />
        <div className="content">
          <h4>Our Goal</h4>
          <p>To help children all across the Fylde</p>
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
