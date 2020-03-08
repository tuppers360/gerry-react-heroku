import React from "react";
import { Link } from "react-router-dom";
import "./stories.styles.scss";
import { axios } from "axios";

export const Stories = () => (
  <React.Fragment>
    <h1>Stories</h1>
    <div className="main">
      {/*<div className="stories-page-container">
        <div className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <div className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <div className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <div className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <div className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
        <div className="stories-item">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Flex Card 1"
          />
        </div>
      </div>*/}
      <div class="feed">
        <a class="card" href="/stories/hollies-story">
          <p class="card__category">Nepal Trip</p>
          <p class="card__title">Hollie's Story</p>
        </a>
        <a class="card" href="/stories/courtney-emily-story">
          <p class="card__category">Ghana</p>
          <p class="card__title">Courtney & Emily's Story</p>
        </a>
        <div class="card">
          <p class="card__category">Somewhere</p>
          <p class="card__title">Dave's Story</p>
        </div>
        <div class="card">
          <p class="card__category">Orlando</p>
          <p class="card__title">Chris' Story</p>
        </div>
        <div class="card">
          <p class="card__category">The Muic Festival</p>
          <p class="card__title">Highfurlong's Story</p>
        </div>
        <div class="card">
          <p class="card__category">The Rock School</p>
          <p class="card__title">Jack's Story</p>
        </div>
        <div class="card">
          <p class="card__category">The Footballer</p>
          <p class="card__title">Brodie's Story</p>
        </div>
        <div class="card">
          <p class="card__category">The Karate Kid</p>
          <p class="card__title">Sienna's Story</p>
        </div>
        <div class="card">
          <p class="card__category">The Vets Adventure</p>
          <p class="card__title">Mia's Story</p>
        </div>
      </div>
    </div>
  </React.Fragment>
);
