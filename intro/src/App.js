import React from `react`;
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from `reactstrap`;

function App() {
  let productInfo = {title: "ProductList"}
  let categoryInfo = {title:"Categorylist"}
  let totalInfo = {title: "Total List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs="3">
           <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="6">
           <ProductList info={productInfo}/>
           </Col>  
           <Col xs="3">
            <TotalList infor={categoryInfo}/>
           </Col>
        </Row>
        </Container>
        
        
        </div>
  );
}

export default App;
