import React from 'react';
import firebase from '../firebase';
import "../css/MyProjects.css";
import {Modal} from 'react-materialize';
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
                                    this.state.projects.map(project => {
                                        return (
                                            <Modal header={project.name} trigger={<Link to="#">{project.name}</Link>}>
                                                <Project data={project}/>
                                            </Modal>
                                        )
                                        //return <Link to="/project" key={`${project.name}-${project.createdAt}`}>{project.name}</Link>
                                    })
                                :
                                    <p>You don't have any projects!</p> //TODO: proper message or something.
                            }
                        </div>
                        <div className="card-footer right">
                            <Link to="/project">Create Project</Link>
                        </div>

                    </div>
        );
    }
}