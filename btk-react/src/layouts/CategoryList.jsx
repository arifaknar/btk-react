import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

export default class CategoryList extends Component {

  state = {
    categories: []
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  }

  componentDidMount() {
    this.getCategories();
  }


  render() {
    return (
      <>

        <ListGroup>
          <ListGroupItemHeading>{this.props.info.title}</ListGroupItemHeading>
          {
            this.state.categories.map((category) => (

              <ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false} className="justify-content-between" onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName} </ListGroupItem>
            ))}
          {/* <ListGroupItemText> <h3>  {this.props.currentCategory}</h3></ListGroupItemText> */}
        </ListGroup>
      </>
    )
  }
}
