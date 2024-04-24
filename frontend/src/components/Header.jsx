import React from "react";
import { Badge,Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems}=useSelector((state)=>state.cart)

  console.log(cartItems)
  return (
    //altogether, this line of code creates a navbar with a dark background and light text, which expands to a full-width layout on large screens and automatically collapses the mobile menu when a menu item is selected.
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="PragatiDukaan" />
              PragatiDukaan
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <NavLink>
                  <FaShoppingCart /> Cart
                  {
                    cartItems.length>0 && (
                      <Badge pill style={{marginLeft:'5px'}}>
                        {cartItems.reduce((a,c)=>a+c.qty,0)}

                      </Badge>
                    )
                  }
                </NavLink>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavLink >
                  <FaUser /> Sign In
                </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
