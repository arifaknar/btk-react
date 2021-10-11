import React from "react";
import CartSummary from "./CartSummary";
import { Container,Button,Menu } from 'semantic-ui-react'
export default function Navi() {
  return (
    <div>
      <Menu  size="middle" inverted fixed >
        <Container>
        <Menu.Item
          name="home"
          
        />
        <Menu.Item
          name="messages"
          
        />

        <Menu.Menu position="right">
          <CartSummary/>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
