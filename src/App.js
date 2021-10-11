import "./App.css";
import Navi from "./layouts/Navi.jsx";
import "semantic-ui-css/semantic.min.css";
import ProductList from "./pages/ProductList";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./layouts/CategoryList";

function App() {

  //Props Kapsülleme (Encapsulation)
  let productsInfo={
    title:"Ürünler"
  };
  let categoriesInfo={
    title:"Kategoriler"
  };

  
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList info={categoriesInfo}/>
          </Col>
          <Col xs="9">
            <ProductList info={productsInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
