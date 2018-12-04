import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import { Col, Container, Footer, Button } from "mdbreact";


class FooterApp extends Component {
  constructor(props){
    super(props)
    this.finance = this.finance.bind(this)
  }
  finance(){
    this.props.history.push('/finance')
}

render() {
return (
<Footer  className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
      <Col className="col-6" sm="3" md="3">
      <Button className="btn display inline" id="transferencia" color="primary" > <i class="fas fa-sync-alt">Transfer</i></Button>
      </Col>
      <Col className="col-6" sm="3" md="3">
      <Button className="btn display-inline" id="pagos" color="primary" ><i class="fas fa-money-check-alt">Pagos</i> </Button>
      </Col>
      <Col className="col-6" sm="3" md="3">
      <Button className="btn display-inline" id="invertir"color="primary"><i class="fas fa-chart-line">Invertir</i></Button>
      </Col>
      <Col className="col-6"sm="3" md="3">
      <Button className="btn display-inline" id="suscripcion" color="primary" onClick={this.finance}><i class="fas fa-chess-queen">Tus Finanzas</i></Button>
      </Col>   
  </Container>
</Footer>
);
}
}

export default withRouter(FooterApp);