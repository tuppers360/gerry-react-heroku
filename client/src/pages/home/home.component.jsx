import React from "react";
import HomeStories from "../../components/home-stories/home-stories.component";
import "./home.styles.scss";

const stylesflex = {
  "background-image":
    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg)"
};

const stylesstrange = {
  "background-image":
    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg)"
};

const styleslanding = {
  "background-image":
    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png)"
};

export const Home = () => (
  <React.Fragment>
    <header>
      <div className="header-text">
        <div className="header-text-items">
          <h1>Gerry Richardson</h1>
          <h3>Trust</h3>
          <span className="button">
            <a href="#mission">Our Mission</a>
          </span>
        </div>
      </div>
    </header>
    <section id="mission" class="main mission">
      <h2>Our Mission</h2>
      <p>
        The trust seeks to promote youth development by supporting young people,
        aged 25 or under, to attend courses and activities of an educational,
        cultural, sporting, adventuresome or character-building nature. It is
        willing to entertain written applications for financial assistance from
        young people living or working within 15 miles of the town hall in
        Blackpool, Lancashire.
      </p>
    </section>
    <HomeStories />
    <div class="row">
      <div class="band">
        <div class="item-1">
          <a href="/#" class="card">
            <div class="thumb" style={stylesflex}></div>
            <article>
              <h1>Some Local Group</h1>
              <span>
                Raised £1,580 over the last year after members of the group
                voted on two charities to support. Fundraising challenges
                included coffee mornings, a sponsored run and quiz nights.
              </span>
            </article>
          </a>
        </div>
        <div class="item-2">
          <a href="/#" class="card">
            <div class="thumb" style={styleslanding}></div>
            <article>
              <h1>Some Local Group</h1>
              <span>
                Raised £1,580 over the last year after members of the group
                voted on two charities to support. Fundraising challenges
                included coffee mornings, a sponsored run and quiz nights.
              </span>
            </article>
          </a>
        </div>
        <div class="item-3">
          <a href="/#" class="card">
            <div class="thumb" style={stylesstrange}></div>
            <article>
              <h1>Some Local Group</h1>
              <span>
                Raised £1,580 over the last year after members of the group
                voted on two charities to support. Fundraising challenges
                included coffee mornings, a sponsored run and quiz nights.
              </span>
            </article>
          </a>
        </div>
        <div class="item-4">
          <a href="/#" class="card">
            <div class="thumb" style={stylesstrange}></div>
            <article>
              <h1>Some Local Group</h1>
              <span>
                Raised £1,580 over the last year after members of the group
                voted on two charities to support. Fundraising challenges
                included coffee mornings, a sponsored run and quiz nights.
              </span>
            </article>
          </a>
        </div>
        <div class="item-5">
          <a href="/#" class="card">
            <div class="thumb" style={styleslanding}></div>
            <article>
              <h1>Some Local Group</h1>
              <span>
                Raised £1,580 over the last year after members of the group
                voted on two charities to support. Fundraising challenges
                included coffee mornings, a sponsored run and quiz nights.
              </span>
            </article>
          </a>
        </div>
        <div class="item-6">
          <a href="/#" class="card">
            <div class="thumb" style={styleslanding}></div>
            <article>
              <h1>Some Local Group</h1>
              <span>
                Raised £1,580 over the last year after members of the group
                voted on two charities to support. Fundraising challenges
                included coffee mornings, a sponsored run and quiz nights.
              </span>
            </article>
          </a>
        </div>
      </div>
    </div>
  </React.Fragment>
);
