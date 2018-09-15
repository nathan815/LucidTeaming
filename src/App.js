import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import { Route, Redirect } from 'react-router-dom';



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
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/" render={() => (
            !this.state.auth.loggedIn
            ?
              <Redirect to="/home"/>
            :
              null //We need a route for when the user is logged in. e.g. a dashboard.
          )
            
          }></Route>
        </div>
      </div>

    );
  }
}

export default App;
