import React, { Component } from 'react'
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi.jsx";
import ProductList from "./pages/ProductList";
import CategoryList from "./layouts/CategoryList";
import { Col, Container, Row } from "reactstrap";
import alertify from 'alertifyjs';


export default class App extends Component {

  state = {
    currentCategory: "",
    changeCategory: (category) => {
      this.setState({ currentCategory: category.categoryName });
      this.getProducts(category.id);  
    },
    products:[],
    cart:[]
  }
//Sayfa açılışında ürünleri gösterme.
  componentDidMount(){
    this.getProducts();
  }
  //Ürünleri Listeleme
 getProducts=(categoryId)=>{
   let url="http://localhost:3000/products";
   if(categoryId){
    url+="?categoryId="+categoryId;
   }
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>this.setState({products:data}));
  }
  
  //Carta ürün ekleme ve kontrol
  addToCart=(product)=>{
    let newCart=this.state.cart;
    let addedProductItem=newCart.find(c=>c.product.id===product.id) // Eklenen ürünün daha önce eklenip eklenmediğini kontrol ettik.
    if(addedProductItem){ //Varsa adetini 1 artırıyoruz yoksa ürünü ekliyoruz.
      addedProductItem.quantity+=1;
    }
    else{
      
      newCart.push({product:product,quantity:1});
    }
    
    this.setState({cart:newCart}) // State de bulunan kartı güncelliyoruz
    alertify.success(product.productName+" added to cart (: ")
  }

  //Carttan ürün silme
  removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id !== product.id)
    this.setState({cart:newCart})
  }
  //Props Kapsülleme (Encapsulation)
 
  render() { 
  let productsInfo = {
    title: "Ürünler"
  };
  let categoriesInfo = {
    title: "Kategoriler"
  };

  
  
    return (
      <div className="App">
        <Container>
        
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
            

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.state.changeCategory} info={categoriesInfo} />
            </Col>
            <Col xs="9">
              <ProductList  products={this.state.products} addToCart={this.addToCart} currentCategory={this.state.currentCategory} info={productsInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}









