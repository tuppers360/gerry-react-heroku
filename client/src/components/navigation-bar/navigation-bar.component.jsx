import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <ul class="menu">
          <li class="logo">
            <Link to="/">Gerry Richardson</Link>
          </li>
          <li
            class={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/stories">Stories</Link>
          </li>
          <li
            class={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            class={"nav-item " + (isActive ? "active" : "")}
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
          <li class="nav-item button donate">
            <Link to="/donate">Donate</Link>
          </li>
          <li class="toggle" onClick={() => setIsActive(!isActive)}>
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavigationBar;
