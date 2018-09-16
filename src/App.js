import React, { Component } from 'react';
import firebase from './firebase';
import { Route, Redirect, withRouter } from 'react-router-dom';

import AppLoading from './AppLoading';
import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import CreateProject from './pages/CreateProject';
import UserProfile from './pages/UserProfile';
import PrjView from './pages/subdash/projectview'

import './css/App.css';

const GuestRoute = ({ component: Component, ...restProps }) => (
  <Route {...restProps} render={(props) => (
    firebase.auth().currentUser
      ? <Redirect to='/' />
      : <Component {...props} />
  )} />
);

const PrivateRoute = ({ component: Component, ...restProps }) => (
  <Route {...restProps} render={(props) => (
    firebase.auth().currentUser
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.listenForAuth();

    this.state = {
      auth: {
        loggedIn: true,
        user: {},
      },
      authenticated: false,
      loading: true,
    };
  }

  logout = () => {
    firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  listenForAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        auth: {
          isLoggedIn: !!user,
          user: user,
        },
        loading: false,
      });
    });
    
  }
  render() {
    if(this.state.loading) {
      return <AppLoading />;
    }

    return (
      <div className="App">
        <Navbar auth={this.state.auth} logout={this.logout} />
        <div className="container">
          <PrivateRoute path="/welcome" component={Welcome} />
          <PrivateRoute path="/project" component={CreateProject}/>
          <Route path="/projects/:id" component={PrjView}/>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={SignUp} />
          <Route exact path="/" render={() => ( 
            this.state.auth.isLoggedIn ? <Dashboard /> : <Home /> 
          )} />
          <Route path="/users/:id" component={UserProfile} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
