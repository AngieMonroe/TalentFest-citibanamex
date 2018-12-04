import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';

import './Login.css';
import logo from '../images/city.svg'
class Login extends Component{
  constructor(props){
    super(props);
    this.signup = this.signup.bind(this); 
    }
     
signup(e){
  this.props.history.push('/Home')
}

    render(){
        return   <div class="back" >  <div class="container">
        <div class="row ">
          <div  id="img" className="col">
          <center>
          <img width="310"  className="img-fluid" src={logo} alt="logo" />
          </center>
          </div>    
        </div>
        <div className="row container text-center">
         
          <div id="titule" class="col">
          <p>
          <h3 class="text-left text-white">Bienvenido de nuevo</h3>
          </p> 
          <p>
          <h4 class="text-left text-white mt-4">A**** R**** M****</h4>
          </p> 
          <p> 
          <input type="password" className="form-control mt-2 mb-5" id="exampleInputPassword1" placeholder="Ingresa tu contraseña"></input>
          </p> 
          <MDBBtn color="white" onClick={this.signup}>Entrar</MDBBtn>
          </div>
        </div>
        </div>
        </div>
    }
}
export default withRouter(Login);
