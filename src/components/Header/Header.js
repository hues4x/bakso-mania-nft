import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/bkm_logo.png";
import solana from "../../assets/images/Solana1.png";

import "./Header.css";

const Header = () => {
  return (
    <header className={` header  m-0 px-0`} id="home">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="logo img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <img src={solana} alt="solana" className="img-fluid solana" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center align-items-center">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#rarity">RARITY</Nav.Link>
              <Nav.Link href="#why_bakso_mania">WHY BAKSO?</Nav.Link>
              <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
              <Nav.Link href="#solemen">SOLEMEN</Nav.Link>
              <Nav.Link href="#mint">HOW TO MINT?</Nav.Link>
              <a href="/" target="blank" className="primaryBtn leftMargin">
                CONNECT WALLET
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
