import React from 'react';
import firebase from '../firebase';
import "../css/MyProjects.css";
import {Modal, Button, Row} from 'react-materialize';
import { Link } from 'react-router-dom';
import Project from './Project';

export default class MyProjects extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            projects: [],
            recommendedProjects: []
        };

        


    }
    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        firebase.firestore().collection("projects").where('userId','==',userId).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc)
                //const myProjects = docs.filter(doc => doc.userId === firebase.auth().currentUser.uid); //Unttested as I don't have the add project code.
                this.setState({
                    projects: [ ...this.state.projects, ...doc ]
                });
                //console.log(myProjects);
                //Let's find people with similar skills and see their projects.
                firebase.database.collection("userData").get().then(({docs: userDataDocs}) => {
                    //Not sure how efficient it would be, but my train of thought was that I would get userdata, find people with similar skills, get the top 5 user's projects, and display them for recommended.
                });
            });
        }).catch(console.error);
    }

    render () {
        return (
                
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card darken-1">
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
                                    <div className="card-footer right" id="projectCreateFooter">
                                        <Link to="/project">Create Project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="card darken-1">
                                <div className="card-content">
                                    <span className="card-title">Recommended Projects</span>
                                    {
                                        this.state.recommendedProjects.length
                                        ?
                                            null
                                        :
                                            <p>There are no recommended projects at this moment.</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    
        );
    }
}
