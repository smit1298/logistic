import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import './Navs.css'

 const Navs = () => {
  return (
    <div>
      <Navbar id='navbar' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Smit Delivery Services</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About </Nav.Link>
              <Nav.Link href="#contact">Contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;