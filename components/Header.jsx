"use client"
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
  <header className="header-center transparent">
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img className="logo-main" src="/images/logo.png" alt="" />
          <img className="logo-mobile" src="/images/logo-mobile.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/book">Book Now</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="#">Extras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

export default Header;
