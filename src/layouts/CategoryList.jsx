import React, { Component } from 'react'
import { ListGroup,ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'

export default class CategoryList extends Component {

  state={
    categories:[
      {categoryId:1,categoryName:"Beverages"},
       {categoryId:2,categoryName:"Condiments"}
      ],
    
    currentCategory:""
  }

  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName});
  }

  render() {
    return (
      <>
      
      <ListGroup>
        <ListGroupItemHeading>{this.props.info.title}</ListGroupItemHeading>
        {
          this.state.categories.map((category)=>(

            <ListGroupItem  className="justify-content-between"  onClick={()=>this.changeCategory(category)} key={category.categoryId}>{category.categoryName} </ListGroupItem>
          ))}
      <ListGroupItemText> <h3>  {this.state.currentCategory}</h3></ListGroupItemText>
    </ListGroup>
      </>
    )
  }
}
