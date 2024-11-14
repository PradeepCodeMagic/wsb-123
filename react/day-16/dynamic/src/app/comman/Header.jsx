"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../../public/images/logo.png"
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home">
            {/* <img src={logo} /> */}

            <Image src={logo}  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className='px-2' >
                <Link href={"/"}>Home</Link>
            </Nav>
            <Nav className='px-2'>
                <Link href={"/about"}>About</Link>
            </Nav>
            <Nav className='px-2'>
                <Link href={"/gallery"}>Gallery</Link>
            </Nav>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;