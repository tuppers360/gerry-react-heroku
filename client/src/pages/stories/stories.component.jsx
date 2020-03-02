import React from "react";
import { Link } from "react-router-dom";

export const Stories = () => (
  <React.Fragment>
    <div className="main">
      <h1>Stories</h1>

      <div className="stories-container">
        <div className="stories-item">
          <img src="/images/nepal.jpg" alt="Flex Card 1" />
          <div>
            <h1>Hollies Story</h1>
            <p>
              <Link to="/stories/hollies-story">
                <i className="fab fa-readme"></i> Read
              </Link>
            </p>
          </div>
        </div>
        <div className="stories-item">
          <img src="/images/stories.jpg" alt="Flex Card 1" />
          <div>
            <h1>More Stories to follow</h1>
          </div>
        </div>
        <div className="stories-item">
          <img src="/images/stories.jpg" alt="Flex Card 1" />
          <div>
            <h1>More Stories to follow</h1>
          </div>
        </div>
        <div className="stories-item">
          <img src="/images/stories.jpg" alt="Flex Card 1" />
          <div>
            <h1>More Stories to follow</h1>
          </div>
        </div>
        <div className="stories-item">
          <img src="/images/stories.jpg" alt="Flex Card 1" />
          <div>
            <h1>More Stories to follow</h1>
          </div>
        </div>
        <div className="stories-item">
          <img src="/images/stories.jpg" alt="Flex Card 1" />
          <div>
            <h1>More Stories to follow</h1>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
