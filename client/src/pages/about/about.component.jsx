import React from "react";
import "./about.styles.scss";

export const About = () => (
  <React.Fragment>
    <div className="main">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <div>
          <p>
            On the 23rd August 1971 Superintendent Gerald Richardson was shot
            dead while attempting to arrest robbers involved in a raid on a
            Blackpool jewellers shop. Gerry was posthumously awarded the George
            Cross.
          </p>
          <p>
            At the time Gerry was a highly regarded member of the Blackpool
            North Rotary Club and much thought was given by his fellow members
            to ways in which his memory could be honoured and perpetuated.
          </p>
          <p>
            Gerry had a passion for youth work and shortly before his death he
            had been a prime mover in raising a considerable sum of money to
            acquire Snows Heights in the Lake District for use as a centre for
            young people of Blackpool and the Fylde.
          </p>
          <p>
            Gerry’s Rotarian colleagues decided to set up a trust in 1974 to
            expand the work which Gerry had been so dedicated. In over 40 years
            of existence through hard work by the Club, generous gifts and
            shrewd investment the Trust has become a major youth charity.
          </p>
          <p>
            The Trust has generated sufficient sums to pursue its objectives and
            since it was set up, nearly 19000 young people – many of them with
            special needs – have been helped to pursue interests and activities,
            both of physical and cultural character which they have found
            fulfilling and life and career enhancing.
          </p>
          <p>
            In the process of support these young people the Trust has handed
            out grants totalling nearly £350,000.
          </p>
          <p>
            His legacy continues today through the enthusiasm of the existing
            and past Trustees.
          </p>
          <p>
            One of the highlights of the year is the Annual Special Needs Music
            Festival for pupils of the six Special School in Blackpool, Wyre ad
            Fylde Boroughs. The concerts are both inspirational and humbling and
            the performers are very talented young children. We would like to
            thank the Harrison Family of Ribby Hall Village, Wrea Green for the
            splendid facilities provided.
          </p>
        </div>
      </div>
      {/*//TODO - create component to render each box passing details*/}
      <div className="trustee-container">
        <h1>Meet the Trustees</h1>
        <div className="box">
          <div className="imgBx">
            <img src="/images/lee_wilson.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="https://twitter.com/Leew1341S">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Lee Wilson
              <br />
              <span>Chair</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/chris_hardy.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="https://twitter.com/CI3951Hardy">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Chris Hardy
              <br />
              <span>Trustee / Compere</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/claire_goss.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="https://twitter.com/claralou3819">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Claire van Deurs Goss
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/david_williamson.jpg" alt="" />
          </div>
          <div className="details">
            <h2>
              David Williamson
              <br />
              <span>Treasurer / Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/sample.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Gareth Tupman
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/sample2.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Susannah Clarke
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/sample5.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Jacqueline Longdon Bem
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/sample6.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Sarah Longden
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/chris_pickard.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Christine Pickard
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="/images/john_pickard.jpg" alt="" />
          </div>
          <ul className="social-icon">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Pickard
              <br />
              <span>Trustee</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
