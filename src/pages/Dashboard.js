import React from 'react';
import Projects from './subdash/projects'
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'

export default class Dashboard extends React.Component {
    render () {
        return (
            <Link to="/project"><Button>Make a new project</Button></Link> 
        );
    }
};