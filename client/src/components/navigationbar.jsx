import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import logo from "../assets/crown.svg";

const Styles = styled.div`
  .navbar {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
    background: #0c5b88 !important;
    transition: background-color 0.5s ease 0s;
    padding-left: 10px;
    padding-right: 5px;
  }
  .navbar-brand {
    color: white;
    height: 2rem;
  }
  .navbar-nav {
    align-items: center;
  }
  .navbar-nav .nav-link {
    color: white;
    padding-top: 0.8rem;
    align-items: center;
  }
  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    color: #9ad1ec;
  }
  .navbar.always-solid {
    background: rgba(12, 91, 136, 1) !important;
    transition: background-color 1s ease 0s;
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
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
