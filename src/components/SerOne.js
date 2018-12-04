import React, {Component} from 'react'
import { Fa, Col, Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';


class SerOne extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
    }
    return(){
        this.props.history.push('/monthlyservice')
    }

    render(){
        return (
        <div>
                <nav className="navbar ">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Servicio</span>
                </nav>
                <Col className="mt-5">
                    <Card style={{ width: "22rem" }}>
                    <CardImage
                        className="img-fluid"
                        src="https://user-images.githubusercontent.com/27248841/49445522-b4308080-f797-11e8-9ee9-ca1cceb29043.png"
                        waves
                    />
                    <CardBody>
                        <CardTitle>CFE</CardTitle>
                        <CardText>
                        <p>Monto: $500.00</p>
                        <p>Periodicidad: Bimestral</p>
                        <p>Fecha de pago: 2018-07-12</p>
                        <p>Tipo de gasto: Necesidad</p>
                        </CardText>
                        <Button  href="#">Editar</Button>
                    </CardBody>
                    </Card>
                </Col>
        </div>    
    )}
}

export default SerOne;