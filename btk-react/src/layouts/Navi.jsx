import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default function Navi({ removeFromCart,cart,}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Northwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/"><NavLink>Homepage</NavLink> </Link>
              
            </NavItem>
            <NavItem>
              <Link to="/form"><NavLink>Form</NavLink> </Link>
              
            </NavItem>
            <NavItem>
              <Link to="/form2"><NavLink>Form 2</NavLink> </Link>
              
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <CartSummary removeFromCart={removeFromCart} cart={cart} />  {/* Component Dirilling(Props taşıma) ile event taşıma} */}
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  )
}
