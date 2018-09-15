import React from 'react';
import Headtext from '../Components/text/Headtext'

const Register = (props) => {
  return (
		<div id="registration">
			<Headtext text="Register"/>
			<form class="col s12">
				<div class="row">
					<div class="input-field col s4">
						<input id="firstName" type="text" class="validate" placeholder="First Name goes Here"/>
					</div>
					<div class="input-field col s4">
						<input id="lastName" type="text" class="validate" placeholder="Last Name goes here"/>
					</div>
					<div class="input-field col s4">
						<input id="username" type="text" class="validate" placeholder="What would you like to be called?"/>
					</div>
					<div class="input-field col s6">
						<input id="dob" class="datepicker"/>
					</div>
				</div>
			</form>
		</div>  
		)
}
export default Register;
