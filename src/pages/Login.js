import React from 'react'
import Headtext from "../Components/text/Headtext"
import { Input, Row, Button,Icon } from "react-materialize"
import { Link, Redirect, withRouter} from 'react-router-dom' 
import '../css/navbar.css'  
import '../css/login.css'  
import firebase from '../firebase'

class Login extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: "",
	  	password: ""
	  };
	}
	onSubmit=(event)=>{
		event.preventDefault();
		console.log(this.state);
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(authUser=>{
				console.log("yeet");
				this.props.history.push("/");	
			})
			.catch(error=>{
				this.setState({error})
				console.log(this.state);
			})
	
	}		
	render() {
		const error = this.state.error && <p className="red-text"><b>Error:</b> { this.state.error.message }</p>;
		return (
		<div id="login" className="row">
			<h1>Login</h1>
			{ error }
			<form className="col s12 auth-form" onSubmit={this.onSubmit}>
				<Row>
					
					<Input id="firstName" type="text" label="Email Address" s={6} value={this.state.email} 
										onChange={(e) => this.setState({ email: e.target.value })} />
					<Input id="lastName" type="text" label="Password" s={6} value={this.state.password} 
										onChange={(e) => this.setState({password: e.target.value })} />

					<div className="col s6"><Button className="btn-large">Login</Button></div>
					
					<div className="col s6"> <Link to="/register" className="btn waves-effect waves-light btn-large">Don't have an account? Register here</Link></div>
				</Row>
				</form>
			</div>
		);

	}
}

export default withRouter(Login);
