import React, {Component} from 'react'
import { Line } from 'react-chartjs-2';
import { Container, Progress, Fa } from 'mdbreact';
import './Monthly.css';
import FooterApp from './FooterApp';

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abril', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Mensuales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#848484',
        borderColor: '#848484',
        borderCapStyle: 'butt',
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        pointBorderColor: '#848484',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        // pointHoverBackgroundColor: '#848484',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        // pointRadius: 1,
        // pointHitRadius: 10,
        data: [400, 200, 500, 100, 200, 200, 400, 600, 500, 300, 700, 800]
      }
    ]
  };

class Monthly extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
        this.product = this.product.bind(this)

    }
    return(){
        this.props.history.push('/subscriptions')
    }

    product(){
        this.props.history.push('/product')
    }

        
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Suscripciones</span>
                </nav>
                <div className="row mt-5 text-center">
                <div className= "col-6">
                    <p>Mensuales</p>
                </div>
                <div className= "col-6">
                    <p>$638.00</p>
                </div>
                </div>
                <Container className="mt-2">
                    <Line data={data} />
                </Container>
                
                <div className="container">

                <div className="bg mb-2" onClick={this.product}>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Netflix</p>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">31%</p>
                <p className="d-inline col-4 mt-4  font-weight-bold">$199.00</p>
                <Progress  className="mt-3" value={31}></Progress>
                <p className="col-12"><Fa className="mr-2"icon="star" />  Deseado</p>
                </div>

                <div className="bg mb-2" onClick={this.product}>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Spotify</p>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">31%</p>
                <p className="d-inline col-4 mt-4  font-weight-bold">$199.00</p>
                <Progress  className="mt-3" value={23}></Progress>
                <p className="col-12"> <Fa className="mr-2"icon="heart" />Necesario</p> 
                </div>

                <div className="bg mb-2" onClick={this.product}>
                <p className="d-inline col-4 mt-4 mr-2 font-weight-bold">Xbox Game Pass</p>
                <p className="d-inline col-4 mt-4 mr-4 font-weight-bold">31%</p>
                <p className="d-inline col-4 mt-4  font-weight-bold">$199.00</p>
                <Progress  className="mt-3" value={21}></Progress>
                <p className="col-12"> <Fa className="mr-2"icon="star" />Deseado</p>
                </div>

                <div className="bg mb-2" onClick={this.product}>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Play Kids</p>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">31%</p>
                <p className="d-inline col-4 mt-4  font-weight-bold">$199.00</p>
                <Progress  className="mt-3" value={23}></Progress>
                <p className="col-12"> <Fa className="mr-2"icon="heart" />Necesario</p>
                </div>
                </div>
                <FooterApp />
            </div>
        )
    }
}

export default Monthly;