import React, {Component} from 'react'
import { Line } from 'react-chartjs-2';
import { Container, Progress, Fa } from 'mdbreact';
import './Monthly.css';
import FooterApp from './FooterApp';
import data from '../data/app.json';

const data1 = {
    labels: ['Ene', 'Feb', 'Mar', 'Abril', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Mensuales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#ee3123',
        borderColor: '#ee3123',
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
        this.state = {
            subscription : true
            }
    }
    
    return(){
        this.props.history.push('/subscriptions')
    }

    product(){
        this.props.history.push('/product')
    }

        
    render(){
        let product;
        if(this.state.subscription){
        product =  data.Subscriptions.map((product, i) => {
        return (
            <div className="bg mb-2" onClick={this.product}>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">{product.nombre}</p>
                <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">{product.porcentaje}</p>
                <p className="d-inline col-4 mt-4  font-weight-bold">{product.costo}</p>
                <Progress  className="mt-3" value={product.por}></Progress>
                <p className="col-12"><Fa className="mr-2" icon={product.icon} />  {product.estatus}</p>
                </div>
        )
        })
    }
        return (
            <div>
                <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Suscripciones</span>
                </nav>
                <div className="row mt-4 text-center">
                <div className= "col-6">
                    <p className="h4">Mensuales</p>
                </div>
                <div className= "col-6">
                    <p className="h4">$550.00</p>
                </div>
                </div>
                <Container className="mt-2">
                    <Line data={data1} />
                </Container>
                
                <div className="container">
                {product}
                </div>
                <FooterApp />
            </div>
        )
    }
}

export default Monthly;