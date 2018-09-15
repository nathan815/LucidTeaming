import React from 'react'
import Headtext from "../Components/text/Headtext"
import { Input, Row, Button,Icon } from "react-materialize"
import { Link } from 'react-router-dom' 
import '../css/navbar.css'  
import firebase from '../firebase'

class Login extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: "",
	  	password: ""
	  };
	}

	onSubmit = (event) => {
		event.preventDefault();
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {

			});
	}
	
	render(){
		return (<div id="login" class="container">
			<Headtext text="Login"/>
			<form class="col s12" onSubmit={this.onSubmit}>
				<Row>
						<Input id="firstName" type="text" label="Email Address" s={6} value={this.state.email} 
										onChange={(e) => this.setState({ email: e.target.value })} />
						<Input id="lastName" type="text" label="Password" s={6} value={this.state.password} 
										onChange={(e) => this.setState({ email: e.target.value })} />
				</Row>
				<div class="row section" id='btndiv'>
					<div class="col s6"><Link to="/" className="waves-effect waves-light btn-large cardFix">Login</Link></div>
					<div class="col s6"> <Link to="/register" className="waves-effect waves-light btn-large cardFix">Don't have an account? Register here</Link></div>
				</div>
				</form>
			</div>)

	}
}

export default Login;
