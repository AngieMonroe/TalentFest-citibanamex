import React from "react";
import { withRouter } from 'react-router-dom';
import { Container, Footer } from "mdbreact";
import './FooterApp.css';


class FooterApp extends React.Component {
 
  constructor(props){
    super(props);
    this.finanzas = this.finanzas.bind(this); 
    }

    finanzas(e){
      this.props.history.push('/finance')
    }



render() {
return (
<Footer   className="font-small pt-4 mt-4">
 
  <div  id="footer" className="footer-copyright text-center py-3 ">
    <Container fluid>
    <div class="row mt-1">
    <div class="col-sm">
    
    <div class="icon-fin"><span className="d-ínline mr-5  "><i class="fas fa-sync fa-2x"></i><p class="pt-3">Transfer</p></span></div>
    <div class="icon-fin"><span className="d-ínline mr-5 "><i class="fas fa-dollar-sign fa-2x"></i><p class="pt-3">Pagar</p></span></div>
    <div class="icon-fin"> <span className="d-ínline mr-5 "><i class="fas fa-chart-line fa-2x"></i><p class="pt-3">Invertir</p></span></div>
    <div class="icon-fin"><span className="d-ínline mr-5  " onClick={this.finanzas}><i class="fas fa-chess-queen fa-2x"></i><p class="pt-3">Finanzas</p></span></div>
    </div>
    
 </div>
    </Container>
  </div>
</Footer>
);
}
}


export default withRouter(FooterApp);

