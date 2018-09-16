import React from 'react';
import firebase from '../firebase';
import {Redirect} from 'react-router-dom';
// import '../css/UserInfo.css';

export default class MyProjects extends React.Component {
    render () {

        const displayName = firebase.auth().currentUser.displayName || "No Display Name";
        return (
            <p>asd</p>
            // <div id="userInfo" className="right">
            //     <span>{displayName}</span>
            // </div>
        );
    }
}