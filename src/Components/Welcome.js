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
        const user = firebase.auth().currentUser;
        if (!user) {
            return this.setState({
                redirect: true
            });
        }
        const userId = user.uid;
        userDataDB.where("id", "==", userId).get().then(results => {
            //Ok, we have the current user's data.
            const doc = results.docs[0];
            if (!doc) {
                return this.setState({
                    redirect: true
                });
            }
            const data = doc.data();
            console.log(data);
            if (!data.languages || data.age === undefined) {
                return this.setState({
                    redirect: true
                });
            }
        });
    }

    render () {
        if (this.state.redirect) return <Redirect to="/welcome"/>
        return null;
    }
};