import React from "react";
import { Link } from "react-router-dom";
import image1 from "./../../assets/images/nepal.jpg";
import image2 from "./../../assets/images/ghana4.png";
import image3 from "./../../assets/images/image-3.jpg";
import image4 from "./../../assets/images/image-4.jpg";
import image5 from "./../../assets/images/image-5.jpg";
import image6 from "./../../assets/images/image-6.jpg";
import image7 from "./../../assets/images/image-7.jpg";
import image8 from "./../../assets/images/image-8.jpg";
import image9 from "./../../assets/images/image-9.jpg";
import "./stories.styles.scss";

export const Stories = () => (
  <React.Fragment>
    <h1>Stories</h1>
    <main>
      {/*<Link className="stories-page-container">
        <Link className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <Link className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <Link className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <Link className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <Link className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <Link className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
      </div>
      <div className="feed">
        <a className="card" href="/stories/hollies-story">
          <p className="card__category">Nepal Trip</p>
          <p className="card__title">Hollie's Story</p>
        </a>
        <a className="card" href="/stories/courtney-emily-story">
          <p className="card__category">Ghana</p>
          <p className="card__title">Courtney & Emily's Story</p>
        </a>
        <div className="card">
          <p className="card__category">Somewhere</p>
          <p className="card__title">Dave's Story</p>
        </div>
        <div className="card">
          <p className="card__category">Orlando</p>
          <p className="card__title">Chris' Story</p>
        </div>
        <div className="card">
          <p className="card__category">The Muic Festival</p>
          <p className="card__title">Highfurlong's Story</p>
        </div>
        <div className="card">
          <p className="card__category">The Rock School</p>
          <p className="card__title">Jack's Story</p>
        </div>
        <div className="card">
          <p className="card__category">The Footballer</p>
          <p className="card__title">Brodie's Story</p>
        </div>
        <div className="card">
          <p className="card__category">The Karate Kid</p>
          <p className="card__title">Sienna's Story</p>
        </div>
        <div className="card">
          <p className="card__category">The Vets Adventure</p>
          <p className="card__title">Mia's Story</p>
        </div>
      </div>
      <Link className="storiescontainer">
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            San Francisco
          </a>
          <div className="location-image">
            <a href="#">
              <img src={image1} alt="san francisco" />
            </a>
          </div>
        </article>
      </div>*/}

      <div className="grid-container">
        <Link to="/stories/hollies-story" className="storybox a">
          <img src={image1} alt="" />
        </Link>
        <Link to="/stories/courtney-emily-story" className="storybox b">
          <img src={image2} alt="" />
        </Link>
        <Link className="storybox c">
          <img src={image3} alt="" />
        </Link>
        <Link className="storybox d">
          <img src={image4} alt="" />
        </Link>
        <Link className="storybox e">
          <img src={image5} alt="" />
        </Link>
        <Link className="storybox f">
          <img src={image6} alt="" />
        </Link>
        <Link className="storybox g">
          <img src={image7} alt="" />
        </Link>
        <Link className="storybox h">
          <img src={image8} alt="" />
        </Link>
        <Link className="storybox i">
          <img src={image1} alt="" />
        </Link>
        <Link className="storybox j">
          <img src={image1} alt="" />
        </Link>
      </div>
    </main>
  </React.Fragment>
);
