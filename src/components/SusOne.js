import React, {Component} from 'react'
import { Fa, Col, Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './Service.css';


class SusOne extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
    }
    return(){
        this.props.history.push('/monthly')
    }

    render(){
        return (
        <div>
                <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Suscripción</span>
                </nav>
                <Col className="mt-5">
                    <Card style={{ width: "22rem" }}>
                    <CardImage
                        className="img-fluid"
                        src="https://user-images.githubusercontent.com/27248841/49445591-e215c500-f797-11e8-9031-011f6e66283c.png"
                        waves
                    />
                    <CardBody>
                        <CardTitle>Spotify</CardTitle>
                        <CardText>
                        <p>Monto: $200.00</p>
                        <p>Periodicidad: mensual</p>
                        <p>Fecha de pago: Periodo de prueba</p>
                        <p>Tipo de gasto: Deseo</p>
                        </CardText>
                        <Button href="#">Editar</Button>
                    </CardBody>
                    </Card>
                </Col>
        </div>    
    )}
}

export default SusOne;