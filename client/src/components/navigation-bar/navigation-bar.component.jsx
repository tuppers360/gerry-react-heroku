import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <ul className="menu">
          <li className="logo">
            <Link to="/">Gerry Richardson</Link>
          </li>
          <li
            className={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/stories">Stories</Link>
          </li>
          <li
            className={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/#">News (coming soon)</Link>
          </li>
          <li
            className={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item button donate">
            <Link to="/donate">Donate</Link>
          </li>
          <li className="toggle" onClick={() => setIsActive(!isActive)}>
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavigationBar;
