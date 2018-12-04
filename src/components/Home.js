import React from 'react';
import Oro from '../images/oro.png';
import Clasica from '../images/clasica.png';
import Bsmart from '../images/bsmart.png';
import {Row, Col} from 'mdbreact';
import FooterApp from './footer.js';

const Home = () => {
  return (
    
    <Row className= "container-fluid">
    <Col md="6">
      <p>Cuenta de efectivo</p>
    </Col>
    <Col md="6">
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Cuenta perfiles </label>
            <input type="text" className="form-control" id="formGroupExampleInput" value="5798523456"/>      
         </div>
    </Col>

    <Row className="container-fluid">
    <p>Tarjetas de credito</p>
    </Row>
    <Row className="container-fluid">
        
        <Col md="12">
            <img className="btn btn-primary" href='#' src={Oro} width="100" height="" alt=""/><strong>Tarjeta 5290 1392 5671 1290 </strong>
        </Col>
        </Row>
        <Row className="container-fluid">
        <Col className="col-12" >
            <img className="btn btn-primary" href='#' src={Bsmart} width="100" alt=""/><strong>Tarjeta 1192 3456 6478 8832 </strong>
        </Col>
        </Row>
         <Row className="container-fluid">
        <Col md="12">
            <img className="btn btn-primary" href='#' src={Clasica} width="100" alt=""/><strong>Tarjeta 9081 2341 1900  8002</strong>
        </Col>
        </Row>
   <FooterApp/>
   </Row>
 
  );
      
}

export default Home;