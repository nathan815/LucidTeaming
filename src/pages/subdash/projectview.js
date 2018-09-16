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
        	projectData: {},
        	loading: true
        }
    }
    loadData = () => {
        const db = firebase.database.collection("projects").doc(this.props.match.params.id);
        db.get().then((doc)=>{
            if (doc.exists) {
                this.setState({projectData: doc.data(), loading: false});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    }
    render() {
    	return this.state.loading ? <p>loading</p> : (
        	<Row>
	        	<div className="col s12 m6" s={12}>
    	    		<div className="card darken-1 left" s={12}>
        				<div className="card-content">
        					<h3>{this.state.projectData.title}</h3>
        					<p>{this.state.projectData.description}</p>
        					<h5>Technologies</h5>
        					<p>{this.state.projectData.tech.join(', ')}</p>
        					<h5>Credentials</h5>
        					<p>{this.state.projectData.majors.join(', ')}</p>

        				</div>
        			</div>
    			</div>
        	</Row>
        )
    }
}