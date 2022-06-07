import React from "react";
import { Link, Router, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" className="me-auto text-light pt-2">
              Home
            </Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
          <Link to="/home/add" className="mx-3 btn btn-outline-light">
            Add user
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
