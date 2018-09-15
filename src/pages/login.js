import React from 'react'
import Headtext from "../Components/text/Headtext"
import { Input, Row, Button,Icon } from "react-materialize"
import { Link, Redirect } from 'react-router-dom' 
import '../css/navbar.css'  
import firebase from '../firebase'

class Login extends React.Component {
	onSubmit=(event)=>{
		event.preventDefault();
		firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
			.then(authUser=>{
				console.log("yeet");
				<Redirect to="/"/>	
			})
			.catch(error=>{
				this.setState({error})
				console.log(this.state);
			})
	}
	
	render(){
		return (<div id="login" className="container">
			<Headtext text="Login"/>
			<form className="col s12" onSubmit={this.onSubmit}>
				<Row>
						<Input id="firstName" type="text" label="Username" onChange={(a)=>{this.setState({username: a.target.value})}} s={6}/>
						<Input id="lastName" type="text" label="Password" s={6} onChange={(a)=>{this.setState({password: a.target.value})}}/>
				</Row>
				<div className="row section" id='btndiv'>
					<div className="col s6"><Button to="/" onClick={this.onSubmit} className="waves-effect waves-light btn-large cardFix">Login or Register</Button></div>
					
					<div className="col s6"> <Link to="/register" className="waves-effect waves-light btn-large cardFix">Don't have an account? Register here</Link></div>
				</div>
				</form>
			</div>)

	}
}

export default Login;