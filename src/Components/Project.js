import React from 'react';
import MyProjects from './MyProjects';
import Welcome from './Welcome';
//You don't have to use this.
export default class Project extends React.Component {

    constructor (props) {
        super(props);
        // this.project = props.data;
    }

    render () {
        return (
            <div>
                <Welcome />
                
            </div>
        );
    }
}