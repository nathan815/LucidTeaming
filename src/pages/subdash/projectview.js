import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Button, Row
} from 'react-materialize'
import firebase from '../../firebase';



export default class PrjView extends React.Component {

    constructor(props) {
        super(props);
        this.loadData();
        this.state={
        	projectData: {}
        }
    }
    loadData = () => {
        const db = firebase.database.collection("projects").doc(this.props.match.params.id);
        db.get().then((doc)=>{
            if (doc.exists) {
                this.setState({projectData: doc.data()});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    render() {
        return (
        	<Row>
	        	<div className="col s12 m6">
    	    		<div className="card darken-1 left">
        				<div className="card-content">
        					<h1 className="card-title">{this.state.projectData.title}</h1>

        				</div>
        			</div>
    			</div>
        	</Row>
        )
    }
}