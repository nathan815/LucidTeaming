import React from 'react'
import Headtext from "../Components/text/Headtext"

let Login = (props)=>{
	return (
		<div id="login">
			<Headtext text="Login"/>
			<div class="row">
				<div class="input-field col s6">
					<input id="firstName" type="text"/>
					<label for="firstName">First Name Goes Here</label>
				</div>
				<div class="input-field col s6">
					<input id="lastName" type="text"/>
					<label for="lastName">Last Name Goes Here</label>
				</div>
			</div>
		</div>
	)
}

export default Login;