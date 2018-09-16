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
        const user = firebase.auth().currentUser;
        if(!user) {
            return;
        }
        const userId = user.uid;
        firebase.database.collection("projects").where('userID', '==', userId).get().then((querySnapshot) => {
            const projects = [];
            let users = [];
            querySnapshot.forEach((doc) => {
                //const myProjects = docs.filter(doc => doc.userId === firebase.auth().currentUser.uid); //Unttested as I don't have the add project code.
                projects.push({ ...doc.data(), ...{ id: doc.id } });
                //console.log(myProjects);
                //Let's find people with similar skills and see their projects.
            });

            //Get our data.
            firebase.database.collection("userData").where('email', '==', firebase.auth().currentUser.email).get().then(async ({docs: userDataDocs}) => {
                const doc = userDataDocs[0];
                if (!doc) return;
                const myData = doc.data();
                //Ok, we have our data, now we need to compare that against a unch of other people.

                //We have to load ALL in memory because we don't know which users to pick exactly and firebase's array includes functionality is not there.
                const topUsers = (await firebase.database.collection("userData").get()).docs.map(doc => doc.data()).map(({languages, email}) => {return {languages, email}}).sort((uA, uB) => {
                    const instancesA = uA.languages.filter(lang => myData.languages.includes(lang)).length;
                    const instancesB = uB.languages.filter(lang => myData.languages.includes(lang)).length;
                    return instancesB > instancesA;
                }).slice(0, 10);
                console.log(topUsers);
                const topUserProjects = [];

            });
            this.setState({
                projects: projects
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
                                    this.state.projects.map((project, key) => {
                                        return (
                                            <span key={key}>
                                                <Link to={`/projects/${project.id}`}>{project.title || "Unnamed Project"}</Link>
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
