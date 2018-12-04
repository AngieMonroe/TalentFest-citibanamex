import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes />
      </div>
    );
  }
}


export default App;
