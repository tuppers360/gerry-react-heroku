import React from "react";
import HomeStories from "../../components/home-stories/home-stories.component";
import "./home.styles.scss";

//TODO - will need styling to git the card box now background-image removed
const stylesflex = {
  background:
    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg)"
};

const stylesstrange = {
  background:
    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg)"
};

const styleslanding = {
  background:
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
    <section id="mission" className="main mission">
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
    <div className="row">
      <div className="band">
        <div className="item-1">
          <a href="/#" className="card">
            <div className="thumb" style={stylesflex}></div>
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
        <div className="item-2">
          <a href="/#" className="card">
            <div className="thumb" style={styleslanding}></div>
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
        <div className="item-3">
          <a href="/#" className="card">
            <div className="thumb" style={stylesstrange}></div>
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
        <div className="item-4">
          <a href="/#" className="card">
            <div className="thumb" style={stylesstrange}></div>
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
        <div className="item-5">
          <a href="/#" className="card">
            <div className="thumb" style={styleslanding}></div>
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
        <div className="item-6">
          <a href="/#" className="card">
            <div className="thumb" style={styleslanding}></div>
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
