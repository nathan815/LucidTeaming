import React from 'react';
import {Redirect} from 'react-router-dom';

const SignUpPage = (props) => {
  if(props.loggedIn) {
      return <Redirect to="/" />;
    }
  return (
    <div classNameName="row">
      <div classNameName="card-panel">
        <h4>Sign Up</h4>
        <SignUpForm />
      </div>
    </div>
  );
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    }
  }

  onSubmit = (event) => {

  }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input type="text" id="first-name" value={this.state.username} 
                      onChange={(e)=>this.setState({username:e.target.value})} />
              <label for="first_name" id="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              This is an inline input field:
              <div className="input-field inline">
                <input id="email_inline" type="email" className="validate" />
                <label for="email_inline">Email</label>
                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpPage;

export {
  SignUpForm,
  SignUpPage
};
