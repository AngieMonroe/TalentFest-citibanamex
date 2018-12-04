import React, {Component} from 'react'
import { Chart } from 'react-chartjs-2';
import { Container, Progress, Fa } from 'mdbreact';

class Finance extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
        this.subscriptions = this.subscriptions.bind(this)
    }
    return(){
        this.props.history.push('/Home')
    }

    subscriptions(){
        this.props.history.push('/subscriptions')
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
                        backgroundColor: [ "#F7464A", "#46BFBD", "#FDB45C" ],
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
                <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Tus Finanzas</span>
                </nav>
                <div className="row mt-5 text-center">
                <div className= "col-6">
                    <p>Total</p>
                </div>
                <div className= "col-6">
                    <p>$100</p>
                </div>
                </div>
                <div className="row mt-2 text-center">
                <div className= "col-4">
                    <p>Necesarios</p>
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
                <span className="col-6">Necesarios</span>   <span className="col-6 text-right">Deseos</span>
                <p className="mt-4 font-weight-bold">Servicios</p>
                <Progress  className="mt-3" value={40}></Progress>
                <span className="col-6">Necesarios</span>   <span className="col-6">Deseos</span>
                <p className="mt-4 font-weight-bold">Otros</p>
                <Progress  className="mt-3" value={10}></Progress>
                <span className="col-6">Necesarios</span>   <span className="col-6">Deseos</span>
                </div>
            </div>
        )
    }
}

export default Finance;