import React from 'react';
import firebase from '../firebase';
import "../css/MyProjects.css";
import {Modal, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import Project from './Project';

export default class MyProjects extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            projects: []
        };

        firebase.database.collection("projects").get().then(({docs}) => {
            this.setState({
                projects: docs.map(doc => {return {data: doc.data(), id: doc.id}})
            });
        }).catch(console.error);

    }

    render () {
        return (
                    <div className="card darken-1 left" id="projectsBar">
                        <div className="card-content">
                            <span className="card-title">Your Projects</span>
                            {
                                this.state.projects.length
                                ?
                                    this.state.projects.map(({data: project, id}) => {
                                        return (
                                            <span>
                                                <Link to={`/projects/${id}`}>{project.title || "Unnamed Project"}</Link>
                                                <br />
                                            </span>
                                        )
                                    })
                                :
                                    <p>You don't have any projects!</p> //TODO: proper message or something.
                            }
                        </div>
                        <div className="card-footer right" id="projectCreateFooter">
                            <Link to="/project">Create Project</Link>
                        </div>

                    </div>
        );
    }
}