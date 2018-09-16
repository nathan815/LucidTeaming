import React from 'react';
import firebase from '../firebase';
import "../css/MyProjects.css";
import { Link } from 'react-router-dom';

export default class MyProjects extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            projects: []
        };

        firebase.database.collection("projects").get().then(({docs}) => {
            this.setState({
                projects: docs.map(doc => doc.data())
            });
        }).catch(console.error);

    }

    render () {
        return (
                    <div className="card darken-1 left" id="projectsBar">
                        <div className="card-content">
                            <span className="card-title">Projects</span>
                            {
                                this.state.projects.length
                                ?
                                    this.state.projects.map((project, key) => {
                                        return <Link to="/project" key={key}>{project.name}</Link>
                                    })
                                :
                                    <p>You don't have any projects!</p> //TODO: proper message or something.
                            }
                        </div>
                    </div>
        );
    }
}
