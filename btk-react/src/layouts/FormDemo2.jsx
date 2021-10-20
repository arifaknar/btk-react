import React, { Component } from "react";
import alertify from "alertifyjs"
import { Form, FormGroup, Input, Label, option } from "reactstrap";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alertify.success(this.state.email + " added to db");
    alertify.success(this.state.password + " added to db");
    alertify.success(this.state.city + " added to db");
    alertify.success(this.state.description + " added to db");
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter description"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="select"
            name="city"
            id="city"
            placeholder="Select City"
            onChange={this.handleChange}
          >
              <option>İstanbul</option>
              <option>Malatya</option>
              <option>İzmir</option>
              <option>Mersin</option>
              <option>Antalya</option>
          </Input>
        </FormGroup>
        <button type="submit">Save</button>
      </Form>
    );
  }
}
