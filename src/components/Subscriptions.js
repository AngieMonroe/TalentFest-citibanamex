import React, {Component} from 'react'
//import { Chart } from 'react-chartjs-2';
import { Progress, Fa } from 'mdbreact';
import FooterApp from './FooterApp.js'

class Suscriptions extends Component{
    constructor(props){
        super(props)
        this.return = this.return.bind(this)
        this.monthly = this.monthly.bind(this)
    }
    return(){
        this.props.history.push('/finance')
    }

    monthly(){
        this.props.history.push('/monthly')
    }
    
    
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1"><Fa icon="arrow-left" size="1x" onClick={this.return}/> Suscripciones</span>
                </nav>
                <div className="container mt-3">
                <p className="d-inline col-4 mt-4 font-weight-bold h1">Total</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold h1">$1500.00</p>
                </div>
                <div className="row mt-5 text-center">
                <div className= "col-12">
                    <p className="font-weight-bold">Tipo de gastos por deseo o necesidad</p>
                </div>
                <div className= "col-4 mt-4">
                    <p>Necesario</p>
                </div>
                <div className= "col-4 mt-4">
                    <p>Deseo</p>
                </div>
                <div className= "col-4 mt-4">
                    <p>Sin clasificar</p>
                </div>
                </div>
            <div className="container" >
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Anuales</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">52%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$780.00</p>
               <Progress  className="mt-3" value={52}></Progress>
               <span className="d-inline col-4 mt-4 "><i class="fas fa-star"></i>Necesidad</span>
               <span className="d-inline col-4 mt-4 "><i class="fas fa-heart"></i>Deseo</span>
            </div>

            <div className="container mt-3" onClick={this.monthly}>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Mensuales</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">35%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$525.00</p>
               <Progress  className="mt-3" value={35}></Progress>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-star"></i>Necesidad</p>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-heart"></i>Deseo</p>
            </div>

            <div className="container mt-3">
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">Prueba</p>
               <p className="d-inline col-4 mt-4 mr-5 font-weight-bold">13%</p>
               <p className="d-inline col-4 mt-4  font-weight-bold">$99.00</p>
               <Progress  className="mt-3" value={13}></Progress>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-star"></i>Necesidad</p>
               <p className="d-inline col-4 mt-4 "><i class="fas fa-heart"></i>Deseo</p>
            </div>
            <FooterApp/>                
            </div>
        )
    }
}

export default Suscriptions;