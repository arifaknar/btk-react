import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

export class ProductList extends Component {
    render() {
        return (
            <>
                <h3>
                    <Badge color="warning"> Product List </Badge>
                    <Badge color="secondary">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                </h3>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
    };
}

export default connect(mapStateToProps)(ProductList);
