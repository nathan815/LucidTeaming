import React from 'react';
import MyProjects from './MyProjects';
import Welcome from './Welcome';

export default class Project extends React.Component {

    constructor (props) {
        super(props);
        this.project = props.data;
    }

    render () {
        return (
            <div>
                <Welcome />
                
            </div>
        );
    }
}