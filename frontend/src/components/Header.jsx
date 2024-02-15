import React from 'react';
import { Navbar, Nav, Container, NavLink} from 'react-bootstrap';
import {FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Header = () => {
  return (
        //altogether, this line of code creates a navbar with a dark background and light text, which expands to a full-width layout on large screens and automatically collapses the mobile menu when a menu item is selected.
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} alt="PragatiDukaan" />
                    PragatiDukaan
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">
                    <NavLink href='/cart'><FaShoppingCart/> Cart</NavLink>
                    <NavLink href='/login'><FaUser /> Sign In</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>     
        </Navbar>
    </header>
  )
}
export default Header;