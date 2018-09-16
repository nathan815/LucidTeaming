import React from 'react';
import firebase from '../firebase';
import {Redirect} from 'react-router-dom';
//import { Link } from 'react-router-dom';

export default class MyProjects extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            redirect: false
        };

        const userDataDB = firebase.database.collection("userData");
        if (!userDataDB) return;
        userDataDB.get().then(({docs}) => {
            const data = docs.map(doc => doc.data());
            if (!data.find(({email}) => email === firebase.auth().currentUser.email)) this.setState({redirect: true});
        });
    }

    render () {
        if (this.state.redirect) return <Redirect to="/welcome"/>
        return null;
    }
};