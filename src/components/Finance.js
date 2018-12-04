import React, {Component} from 'react'
import { Chart } from 'react-chartjs-2';
import { Container, Progress, Fa } from 'mdbreact';
import './Finance.css';
import FooterApp from './FooterApp';

class Finance extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this);
        this.subscriptions = this.subscriptions.bind(this);
        this.services = this.services.bind(this);
    }
    return(){
        this.props.history.push('/Home')
    }

    subscriptions(){
        this.props.history.push('/subscriptions')
    }

    services(){
        this.props.history.push('/service')
    }
    
    componentDidMount() {
        // Pie chart
        const ctxP = document.getElementById('pieChart').getContext('2d');
        new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: [ "Suscripciones", "Servicios", "Otros" ],
                datasets: [
                    {
                        data: [ 300, 100, 50 ],
                        backgroundColor: [ "#ee3123", "#46BFBD", "#FDB45C" ],
                        hoverBackgroundColor: [ "#FF5A5E", "#5AD3D1", "#FFC870" ]
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
    }
    render(){
        return (
            <div>
                <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Tus Finanzas</span>
                </nav>
                <div className="row mt-4 text-center">
                <div className= "col-6">
                    <p className="h4">Total</p>
                </div>
                <div className= "col-6">
                    <p className="h4">$1,000.00</p>
                </div>
                </div>
                <div className="row mt-2 text-center">
                <div className= "col-4">
                    <p>Necesidad</p>
                    <p>$300</p>
                </div>
                <div className= "col-4">
                    <p>Deseo</p>
                    <p>$600</p>
                </div>
                <div className= "col-4">
                    <p>Sin clasificar</p>
                    <p>$100</p>
                </div>
                </div> 
                <Container className="mt-2">
                <canvas id='pieChart'></canvas>
                </Container> 
                <div className="container">
                <p className="mt-4 font-weight-bold" onClick={this.subscriptions} >Suscripciones</p>
                <Progress  className="mt-3" value={50}></Progress>
                <span className="col-6"><i class="fas fa-star mr-2"></i>Necesidad</span>   <span className="col-6 text-right"> <i class="fas fa-heart mr-2"></i>Deseo</span>
                <p className="mt-4 font-weight-bold" onClick={this.services}>Servicios</p>
                <Progress  className="mt-3" value={40}></Progress>
                <span className="col-6"> <i class="fas fa-star mr-2"></i>Necesidad</span>   <span className="col-6"> <i class="fas fa-heart mr-2"></i>Deseo</span>
                <p className="mt-4 font-weight-bold">Otros</p>
                <Progress  className="mt-3" value={10}></Progress>
                <span className="col-6"> <i class="fas fa-star mr-2"></i>Necesidad</span>   <span className="col-6"> <i class="fas fa-heart mr-2"></i>Deseo</span>
                </div>
                <FooterApp />
            </div>
        )
    }
}

export default Finance;