import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import logo from "../assets/crown.svg";

const Styles = styled.div`
  .navbar {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding: 0rem 1rem;
    font-size: 0.9rem;
  }
  .navbar-brand {
    color: white;
    height: 2rem;
  }
  .navbar-nav {
    padding-top: 1rem;
    padding-right: 0.8rem;
  }
  .navbar-nav .nav-link {
    color: white;
    padding-top: 0rem;
  }
  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    color: #9ad1ec;
  }
  .navbar.always-solid {
    background: rgba(12, 91, 136, 0.9) !important;
    transition: background-color 1s ease 0s;
  }
  .navbar-toggler {
    padding: 1.15rem 0.75rem;
  }
  .custom-toggler-icon {
    color: white;
    font-size: 1.6rem;
    padding: 1rem;
  }
  .navbar.solid {
    background: rgba(12, 91, 136, 0.7) !important;
  }
  /* Remove Button Outline */
  button:focus,
  a:focus {
    outline: 0;
    /* TODO: Look this up and check if can be removed */
    -webkit-appearance: none;
    box-shadow: none;
  }
  button,
  a,
  a.btn {
    transition: all 0.6s ease;
  }
`;

const RouterNavLink = ({ children, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link active={false}>{children}</Nav.Link>
  </LinkContainer>
);

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="always-solid">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo test"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="custom-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <RouterNavLink to="/stories">Stories</RouterNavLink>
            <RouterNavLink to="/contact">Contact</RouterNavLink>
            <RouterNavLink to="/about">About</RouterNavLink>
          </Nav>
          <RouterNavLink to="/donate">
            <Button className="btn btn-lg btn-danger">Donate</Button>
          </RouterNavLink>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
