import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
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
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={SignUp}/>
        </div>
      </div>
    );
  }
}


          // <Route path="/login" component={Login}/>
          // <Route path="/register" component={Register}/>
export default App;
