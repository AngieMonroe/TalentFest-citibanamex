import React, {Component} from 'react';
import { Progress, Fa } from 'mdbreact';
import FooterApp from './FooterApp.js';
import './Service.css';

class Suscriptions extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
        this.monthly = this.monthly.bind(this)
        this.state = {
            subscription : false,
            service : false,
            others : false
            }
    }
    return(){
        this.props.history.push('/finance')
    }

    monthly(){
        this.setState ({subscription: true})
        this.props.history.push('/monthly')
    }
    
    
    render(){
        return (
            <div>
                <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Suscripciones</span>
                </nav>
                <div className="container mt-4">
                <p className="d-inline col-4 font-weight-bold h1">Total</p>
                <p className="d-inline col-4 mr-5 font-weight-bold h1">$1,450.00</p>
                </div>
                <div className="row mt-4 text-center">
                <div className= "col-12">
                    <p className="font-weight-bold">Tipo de gastos por deseo o necesidad</p>
                </div>
                </div>
            <div className="container mt-4" >
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Anuales</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">52%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$780.00</p>
               <Progress  className="mt-3" value={52}></Progress>
               <span className="d-inline col-4 mt-4 "><i class="fas fa-star mr-4"></i>Necesidad</span>
               <span className="d-inline col-4 mt-4 "><i class="fas fa-heart mr-4"></i>Deseo</span>
            </div>

            <div className="container mt-3" onClick={this.monthly}>
               <p className="d-inline col-4 mt-4 mr-4 font-weight-bold">Mensuales</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">35%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$571.00</p>
               <Progress  className="mt-3" value={35}></Progress>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-star mr-4"></i>Necesidad</p>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-heart mr-4"></i>Deseo</p>
            </div>

            <div className="container mt-3">
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Prueba</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">13%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$99.00</p>
               <Progress  className="mt-3" value={13}></Progress>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-star mr-4"></i>Necesidad</p>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-heart mr-4"></i>Deseo</p>
            </div>
            <FooterApp/>                
            </div>
        )
    }
}

export default Suscriptions;