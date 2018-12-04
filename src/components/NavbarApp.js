import React, {Component} from 'react'
import {Navbar, NavbarBrand} from 'mdbreact';

class NavbarApp extends Component{
    render(){
        return (
            
            <Navbar color="indigo" dark expand="sm md lg">
          <NavbarBrand>
            <strong className="white-text">Hola Berenice!</strong>
          </NavbarBrand>
         
      </Navbar>
        
        )
    }
}

export default NavbarApp;