import React from 'react';
import Projects from './subdash/projects'
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'
import firebase from '../firebase';
import MyProjects from '../Components/MyProjects';
import Welcome from '../Components/Welcome';
//import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    render () {
        const user = firebase.auth().currentUser;
        return (
        	<div>
            	<Link to="/project"><Button>Make a new project</Button></Link> 
                <MyProjects />
                <Welcome />
            </div>
        );
    }
};
