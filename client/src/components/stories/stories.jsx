import React from "react";
import { Link } from "react-router-dom";
import Nepal from "./nepal.jpg";
import StoriesImage from "./stories.jpg";

export const Stories = () => (
  <React.Fragment>
    <section className="jumbotron header-jumbotron">
      <div className="narrow">
        <h1 className="jumbotron-heading">Stories</h1>
      </div>
    </section>
    <div className="narrow card-no-border">
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={Nepal} alt="Flex Card 1" />
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
          <img className="card-img-top" src={StoriesImage} alt="Flex Card 1" />
          <div className="card-img-overlay text-white d-flex flex-column text-center justify-content-center">
            <h1 className="text-center">More Stories to follow</h1>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={StoriesImage} alt="Flex Card 1" />
          <div className="card-img-overlay text-white d-flex flex-column text-center justify-content-center">
            <h1 className="text-center">More Stories to follow</h1>
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={StoriesImage} alt="Flex Card 1" />
          <div className="card-img-overlay text-white d-flex flex-column text-center justify-content-center">
            <h1 className="text-center">More Stories to follow</h1>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={StoriesImage} alt="Flex Card 1" />
          <div className="card-img-overlay text-white d-flex flex-column text-center justify-content-center">
            <h1 className="text-center">More Stories to follow</h1>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={StoriesImage} alt="Flex Card 1" />
          <div className="card-img-overlay text-white d-flex flex-column text-center justify-content-center">
            <h1 className="text-center">More Stories to follow</h1>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
