import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'
import firebase from '../firebase';

class PrjView extends React.Component{

	constructor(props){
		super(props);	
	}
	render(){
		<p>{this.props.match.params.id}</p>
	}
}