import React from 'react';
import firebase from '../firebase';
import MyProjects from '../Components/MyProjects';
//import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    render () {
        const user = firebase.auth().currentUser;
        return (
            <div>
                <MyProjects />
            </div>
        );
    }
};