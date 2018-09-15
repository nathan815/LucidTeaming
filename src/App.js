import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/login'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.listenForAuth();

    this.state = {
      auth: {
        loggedIn: false,
        user: {},
      }
    };
  }
  listenForAuth = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      this.setState({
        auth: {
          isLoggedIn: !!user,
          user: user,
        }
      });
    });
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
