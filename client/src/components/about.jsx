import React from "react";
import { Team } from "./team";

export const About = () => (
  <React.Fragment>
    <section className="jumbotron header-jumbotron">
      <div className="narrow">
        <h1 className="jumbotron-heading">About Us</h1>
      </div>
    </section>
    <Team />
    <div className="narrow">
      <p>
        On the 23rd August 1971 Superintendent Gerald Richardson was shot dead
        while attempting to arrest robbers involved in a raid on a Blackpool
        jewellers shop. Gerry was posthumously awarded the George Cross.
      </p>
      <p>
        At the time Gerry was a highly regarded member of the Blackpool North
        Rotary Club and much thought was given by his fellow members to ways in
        which his memory could be honoured and perpetuated.
      </p>
      <p>
        Gerry had a passion for youth work and shortly before his death he had
        been a prime mover in raising a considerable sum of money to acquire
        Snows Heights in the Lake District for use as a centre for young people
        of Blackpool and the Fylde.
      </p>
      <p>
        Gerry’s Rotarian colleagues decided to set up a trust in 1974 to expand
        the work which Gerry had been so dedicated. In over 40 years of
        existence through hard work by the Club, generous gifts and shrewd
        investment the Trust has become a major youth charity.
      </p>
      <p>
        The Trust has generated sufficient sums to pursue its objectives and
        since it was set up, nearly 19000 young people – many of them with
        special needs – have been helped to pursue interests and activities,
        both of physical and cultural character which they have found fulfilling
        and life and career enhancing.
      </p>
      <p>
        In the process of support these young people the Trust has handed out
        grants totalling nearly £350,000.
      </p>
      <p>
        His legacy continues today through the enthusiasm of the existing and
        past Trustees.
      </p>
      <p>
        One of the highlights of the year is the Annual Special Needs Music
        Festival for pupils of the six Special School in Blackpool, Wyre ad
        Fylde Boroughs. The concerts are both inspirational and humbling and the
        performers are very talented young children. We would like to thank the
        Harrison Family of Ribby Hall Village, Wrea Green for the splendid
        facilities provided.
      </p>
    </div>
  </React.Fragment>
);
