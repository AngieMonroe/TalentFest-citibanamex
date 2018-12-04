import React from 'react';
import Oro from '../images/oro.png';
import Clasica from '../images/clasica.png';
import Bsmart from '../images/bsmart.png';
import './Home.css';
import FooterApp from './FooterApp';


const Home = () => {
  return (
    <div class="back2" >
    <div class="container">
  <div class="row" >
      <div class="col-sm pt-3" >
    <h3 class="letter-white">¡Hola Arturo!</h3>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
    <h7 class="letter-white">Cuentas de efectivo</h7>
    <div class="card">
  <div class="card-body">
  <img width="100"  className="img-fluid" src={Oro} alt="logo" /><span>Cta Perfil Ejc **12</span>
  </div>
</div>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
    <h7 class="letter-white">Tarjetas de crédito **23</h7>
    <div class="card">
  <div class="card-body">
  <img width="100"  className="img-fluid" src={Clasica} alt="logo" /> <span>Tarj Clásica **234</span>
  </div>
</div>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
    <h7 class="letter-white">Recompensas Citibanamex</h7>
    <div class="card">
  <div class="card-body">
  <img width="100"  className="img-fluid" src={Bsmart} alt="logo" /> <span>Tarj Premia **456</span>
  </div>
</div>


    </div>
 </div>
 <div class="row">
    <div class="col-sm">
    <FooterApp/>
    </div>
 </div>

</div>

</div>
  );
      
}

export default Home;