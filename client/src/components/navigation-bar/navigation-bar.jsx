import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/crown.svg";

const RouterNavLink = ({ children, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link active={false}>{children}</Nav.Link>
  </LinkContainer>
);

const NavigationBar = () => {
  return (
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
  );
};

export default NavigationBar;
