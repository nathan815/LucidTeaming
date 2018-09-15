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
        //Honestly I really think I should be putting this in a card, the MyProjects component should have an addProject button as well.
        return (
            (
                this.state.projects.length
                ?
                    <p>You have some projects.</p> //TODO: display projects, requires creation of projects.
                :
                    <p>You don't have any projects!</p> //TODO: proper message or something.
            )
        );
    }
}