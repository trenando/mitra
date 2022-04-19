import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { route } from "../routerPath/routerPath";

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavDropdown title="Меню" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={route.home.link}>
                  {route.home.name}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={route.about.link}>
                  {route.about.name}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
