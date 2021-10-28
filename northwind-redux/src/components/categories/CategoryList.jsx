import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory=(category)=>{
      this.props.actions.changeCategory(category)
  }
  render() {
    return (
      <>
        <h3>Categories</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              onClick={() =>this.selectCategory(category) }
              key={category.id}
              active={category.id===this.props.currentCategory.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Checked Category: {this.props.currentCategory.categoryName}</h5>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
//State i bu componentin proplarına bağlamak için
//bu fonksiyonu yazdık.

function mapDispatchToProps(dispatch) {
  return {
    actions: { // Bağlamak istediğimiz aksiyonları buraya yazarak bindActionCreators ile bağladık.
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
//Connect fonksiyonu bir fonksşyon döndürdüğü için
//parametre olarak CategoryList verdik.
