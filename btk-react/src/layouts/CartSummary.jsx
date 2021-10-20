import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() { //Sepet dolu ise çalıştırılacak kodlar
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu left>
          {this.props.cart.map((cartItem) => ( // Eklenen ürünlerin sepette gösterilmesi.
            <DropdownItem key={cartItem.id}>
              <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}> Delete{"  "} </Badge>
              {cartItem.product.productName}
              <Badge color="success" pill> 
                {" "+cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to="cart">Cart Details</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() { //Sepet boş ise çalıştırılacak kodlar
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <>
        {this.props.cart.length > 0 // Sepet boş ise renderEmptyCart() fonksiyonu, sepet dolu ise renderSummary() fonksiyonu çalışılacak.
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </>
    );
  }
}
