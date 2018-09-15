import React from 'react'
import Headtext from "../Components/text/Headtext"
import { Input, Row, Button,Icon } from "react-materialize"
import '../css/navbar.css'   

class Login extends React.Component {
	onSubmit=(event)=>{

	}
	
	render(){
		return (<div id="login" class="container">
			<Headtext text="Login"/>
			<form class="col s12" onSubmit={this.onSubmit}>
				<Row>
						<Input id="firstName" type="text" label="Username" s={6}/>
						<Input id="lastName" type="text" label="Password" s={6}/>
				</Row>
				<div class="row section" id='btndiv'>
					<div class="col s12"> <Button waves='light' id='sub'>button<Icon right>cloud</Icon></Button></div>
					
				</div>
				</form>
			</div>)

	}
}

export default Login;