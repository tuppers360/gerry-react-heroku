import React from "react";
import { Link } from "react-router-dom";
import image1 from "./../../assets/images/stories/hollies-story/hollie_1.jpg";
import image2 from "./../../assets/images/ghana4.png";
import image3 from "./../../assets/images/image-3.jpg";
import image4 from "./../../assets/images/image-4.jpg";
import image5 from "./../../assets/images/image-5.jpg";
import image6 from "./../../assets/images/image-6.jpg";
import image7 from "./../../assets/images/image-7.jpg";
import image8 from "./../../assets/images/image-8.jpg";
import image9 from "./../../assets/images/image-9.jpg";
import image10 from "./../../assets/images/image-1.jpg";
import "./stories.styles.scss";

export const Stories = () => (
  <React.Fragment>
    <h1 className="storyheading">Stories</h1>
    <main>
      <div className="grid-container">
        <Link to="/stories/hollies-story" className="storybox a">
          <img src={image1} alt="" />
          {/* <p className="card__category">Nepal Trip</p> */}
          <p className="card__title">Hollie's Story</p>
        </Link>
        <Link to="/stories/courtney-emily-story" className="storybox b">
          <img src={image2} alt="" />
          {/* <p className="card__category">Ghana Trip</p> */}
          <p className="card__title">Courtney & Emily's Story</p>
        </Link>
        <Link to="/stories/" className="storybox c">
          <img src={image3} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox d">
          <img src={image4} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox e">
          <img src={image5} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox f">
          <img src={image6} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox g">
          <img src={image7} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox h">
          <img src={image8} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox i">
          <img src={image9} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
        <Link to="/stories/" className="storybox j">
          <img src={image10} alt="" />
          <p className="card__title">More to Follow</p>
        </Link>
      </div>
    </main>
  </React.Fragment>
);
