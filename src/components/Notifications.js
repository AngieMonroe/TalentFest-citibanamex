import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';

class Notifications extends Component{

    constructor(props){
        super(props);
        this.notificaciones = this.notificaciones.bind(this); 
        }
         
        notificaciones(e){
      this.props.history.push('/Notificationspush')
    }


 render(){
        return<i className="fas fa-bell fa-2x text-white" onClick={this.notificaciones} />

    }
}


export default withRouter(Notifications);