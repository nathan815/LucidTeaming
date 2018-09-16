import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'
import MyProjects from '../Components/MyProjects';
import Welcome from '../Components/Welcome';

export default class Dashboard extends React.Component {
    render () {
        return (
        	<div>
            	<Link to="/project"><Button>Make a new project</Button></Link> 
                <MyProjects />
                <Welcome />
            </div>
        );
    }
};