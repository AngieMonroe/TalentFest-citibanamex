import React, {Component} from 'react'
import { Fa, Col, Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';


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
                <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Suscripción</span>
                </nav>
                <Col className="mt-5">
                    <Card style={{ width: "22rem" }}>
                    <CardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                        waves
                    />
                    <CardBody>
                        <CardTitle>Netflix</CardTitle>
                        <CardText>
                        <p>Monto:</p>
                        <p>Periodicidad:</p>
                        <p>Fecha de pago:</p>
                        <p>Tipo de gasto:</p>
                        </CardText>
                        <Button href="#">Editar</Button>
                    </CardBody>
                    </Card>
                </Col>
        </div>    
    )}
}

export default SusOne;