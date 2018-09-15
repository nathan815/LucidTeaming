import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Route path="/dashboard" component={Home}/>
          <Route path="/register" component={Register}/>
        </div>
      </div>
    );
  }
}


          // <Route path="/login" component={Login}/>
          // <Route path="/register" component={Register}/>
export default App;
