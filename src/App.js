import React, { Component } from 'react';
import firebase from './firebase';

import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import { Route, Redirect } from 'react-router-dom';

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
          <Route path="/login" component={Login}/>
          <Route path="/register" component={SignUp}/>
          <Route exact path="/" render={() => (
            this.state.auth.isLoggedIn
            ?
              <Dashboard />
            :
              <Home />
          )
            
          }></Route>
        </div>
      </div>

    );
  }
}

export default App;
