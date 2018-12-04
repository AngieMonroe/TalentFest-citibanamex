import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
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
        <div class="row">
          <div  id="img" class="col">
          <center>
          <img width="300"  className="img-fluid" src={logo} alt="logo" />
          </center>
          </div>    
        </div>
        <div class="row">
         
          <div id="titule" class="col">
          <p>
          <h3 class="text-left text-white">Bienvenido de nuevo</h3>
          </p> 
          <p>
          <h4 class="text-left text-white">A****R***M****</h4>
          </p> 
          
          <p> 
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña"></input>
          </p> 
          <button  type="button" class="btn btn-light" onClick={this.signup}>Entrar</button>
         
          </div>
      
        </div>
  
        </div>
  
  
  
        </div>
    }
}
export default withRouter(Login);
