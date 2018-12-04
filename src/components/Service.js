import React, {Component} from 'react'
import { Progress, Fa } from 'mdbreact';
import FooterApp from './FooterApp.js'

class Service extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
        this.services= this.services.bind(this)
    }
    return(){
        this.props.history.push('/finance')
    }
    services(){
        this.props.history.push('/monthlyservice')
    }
    
    
    render(){
        return (
            <div>
                <nav className="navbar ">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Servicios</span>
                </nav>
                <div className="container mt-4">
                    <p className="d-inline col-4 mt-4 mr-2 font-weight-bold h1">Total</p>
                    <p className="d-inline col-4 font-weight-bold h1">$1,430.00</p>
                </div>
                <div className="row mt-4 text-center">
                <div className= "col-12">
                    <p className="font-weight-bold mb-3">Tipo de gastos por deseo o necesidad</p>
                </div>
                </div>
            <div className="container mt-4">
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Anuales</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">59%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$843.70</p>
               <Progress  className="mt-3" value={59}></Progress>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-star mr-2"></i>Necesidad</p>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-heart mr-2"></i>Deseo</p>
            </div>
            <div className="container mt-4 fot">
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold" onClick={this.services}>Mensuales</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">41%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$586.30</p>
               <Progress  className="mt-3" value={41}></Progress>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-star mr-2"></i>Necesidad </p>
               <p className="d-inline col-4 mt-4 mb-5 "><i class="fas fa-heart mr-2"></i>Deseo</p>
            </div>
                <FooterApp/>
            </div>
        )
    }
}

export default Service;