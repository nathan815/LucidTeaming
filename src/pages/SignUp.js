import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Input, Row, Button } from 'react-materialize';
import firebase from '../firebase';

import '../css/login.css'  

const SignUpPage = (props) => {
  if(props.loggedIn) {
      return <Redirect to="/" />;
    }
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm history={props.history} />
    </div>
  );
};

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      error: null
    });
    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({
        error: {
          message: "The passwords you provided didn't match!"
        }
      });
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        const userId = firebase.auth().currentUser.uid;
        return firebase.firestore().collection('userData').doc(userId).set({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          id: authUser.user.uid
        });
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
    console.log(this.state);
  }
  render() {
    const error = this.state.error && <p className="red-text"><b>Error:</b> { this.state.error.message }</p>;
    return (
      <div className="row">
        { error }
        <form className="col s12 auth-form" onSubmit={this.onSubmit}>
          <Row>
            <Input s={6} label="First Name" value={this.state.firstName} 
                      onChange={(e)=>this.setState({firstName:e.target.value})} required />
            <Input s={6} label="Last Name" value={this.state.lastName} 
                      onChange={(e)=>this.setState({lastName:e.target.value})} required />
          </Row>
          <Row>
            <Input s={12} label="Email Address" type="email" value={this.state.email} 
                   onChange={(e)=>this.setState({email:e.target.value})} required />
          </Row>
          <Row>
            <Input s={12} label="Password" type="password" value={this.state.password} 
                   onChange={(e)=>this.setState({password:e.target.value})} required />
          </Row>
          <Row>
            <Input s={12} label="Confirm Password" type="password" value={this.state.confirmPassword} 
                   onChange={(e)=>this.setState({confirmPassword:e.target.value})} required />
          </Row>
          <Button large>Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpPage
};
