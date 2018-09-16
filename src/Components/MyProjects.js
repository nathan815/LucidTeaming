import React from 'react';
import firebase from '../firebase';
//import { Link } from 'react-router-dom';

export default class MyProjects extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            projects: []
        };

        firebase.database.collection("projects").get().then(({docs}) => {
            this.setState({
                projects: docs
            });
        }).catch(console.error);

    }

    render () {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card darken-1 left">
                        <div className="card-content">
                            <span className="card-title">Projects</span>
                            {
                                !this.state.projects.length
                                ?
                                    <p>You have some projects.</p> //TODO: display projects, requires creation of projects.
                                :
                                    <p>You don't have any projects!</p> //TODO: proper message or something.
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}