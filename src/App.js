import React, { Component } from 'react';
import firebase from './firebase';

import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.listenForAuth();

    this.state = {
      auth: {
        loggedIn: true,
        user: {},
      },
      authenticated: false
    };
  }

  logout = () => {
    firebase.auth().signOut()
      .then(() => {
        window.Materialize.toast('You are now logged out.', 2000);
      })
      .catch((err) => {
        alert(err);
      });
  }

  listenForAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!this.state.authenticated) {
        this.setState({
          authenticated: true
        });
      }
      this.setState({
        auth: {
          isLoggedIn: !!user,
          user: user,
        }
      });
    });
    
  }
  render() {

    if (!this.state.authenticated) return null;

    return (

      <div className="App">
        <Navbar auth={this.state.auth} logout={this.logout} />
        <div className="container">
          <Route path="/login" component={Login}/>
          <Route path="/register" component={SignUp}/>
          <Route path="/welcome" component={Welcome}/>
          <Route exact path="/" render={() => ( 
              this.state.auth.isLoggedIn ? <Dashboard /> : <Home /> 
            )
          }></Route>
        </div>
      </div>

    );
  }
}

export default withRouter(App);
