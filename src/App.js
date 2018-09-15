import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/login'
import { Route } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      auth: {
        loggedIn: false,

      }
    };
  }
  render() {
    return (

      <div className="App">
        <Navbar auth={this.state.auth} />
        <div className="container">
          <Route path="/dashboard" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={SignUp}/>
        </div>
      </div>

    );
  }
}

export default App;
