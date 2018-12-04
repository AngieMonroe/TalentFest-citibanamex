import React, {Component} from 'react'
import './Notificationspush.css';
import { Fa } from 'mdbreact';
import FooterApp from './FooterApp';


class Notificationspush extends Component{
  constructor(props){
    super(props)
    this.return = this.return.bind(this);
  }
  return(){
    this.props.history.push('/Home')
}

 render(){
        return <div>
 <nav className="navbar navbar-light nav">
  <span className="navbar-brand mb-0 h1 text-white"><Fa icon="arrow-left" size="1x" onClick={this.return}/></span>
 </nav>


  <h6 class="fecha" >2018/04/17  </h6>
  <div class="card1" >
  <ul class="list-group list-group-flush">
    <li  type="button" class="list-group-item" data-toggle="modal" data-target="#ModalCenter">Utiliza tus puntos premia </li>
    <li  type="button" class="list-group-item" data-toggle="modal" data-target="#exampleModalCenter">Se próxima el vencimiento de tu cuenta de prueba</li>
    <li  type="button" class="list-group-item" data-toggle="modal" data-target="#exampleModalCenter">Este mes tuviste un aumento en tu tarifa CFE</li>
  </ul>
</div>


  <h6 class="fecha" >2018/04/17  </h6>
<div class="card1">
  <ul class="list-group list-group-flush">
  <li  type="button" class="list-group-item" data-toggle="modal" data-target="#exampleModalCenter">Descubre las promociones de spotify</li>
  <li  type="button" class="list-group-item" data-toggle="modal" data-target="#exampleModalCenter">Realiza tu pago Telmex</li>
  </ul>
</div>


<div className="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header modal">
        <h5 class="modal-title" id="exampleModalCenterTitle">Factura por pagar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>El servicio domiciliado de CFE vence el 6 de Diciembre. </p>

        ¿Deseas pagarlo con tu tarjeta Premia?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Pagar ahora</button>
      </div>
    </div>
  </div>
</div>
<FooterApp />
</div>
    }
}

export default Notificationspush;