import React from "react";
import { Link } from "react-router-dom";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul class="menu">
          <li class="logo">
            <Link to="/">Gerry Richardson</Link>
          </li>
          <li class="nav-item">
            <Link to="/stories">Stories</Link>
          </li>
          <li class="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li class="nav-item button donate">
            <Link to="/donate">Donate</Link>
          </li>
          <li class="toggle">
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
