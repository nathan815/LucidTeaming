import React from 'react'
import {
    Button,
    Icon,
    Modal,
    Input,
    Row
} from 'react-materialize'
import { Link } from 'react-router-dom'
import firebase from '../firebase'

class CreateProject extends React.Component {
    constructor(props){
        super(props)
        this.state={
            description: "",
            title: "",
            tech: "",
            majors: ""
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const projects = firebase.database.collection("projects");
        const {description, title, tech, majors} = this.state;
        const userID = firebase.auth().currentUser.uid;
        projects.add({ userID, description, title, tech, majors });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <h1>Create Project</h1>
            <Row>
            <Input id="titlebox" type="text" label="title" s={6} value={this.state.title} onChange={(e) => this.setState({title: e.target.value })} />
            <Input id="descbox" type="text" label="desx" s={6} value={this.state.description} onChange={(e) => this.setState({description: e.target.value })} />
            </Row>
            <Row>
            <Input id="techbox" type="text" label="tech" s={6} value={this.state.tech} onChange={(e) => this.setState({tech: e.target.value })} />
            <Input id="majbox" type="text" label="maj" s={6} value={this.state.majors} onChange={(e) => this.setState({majors: e.target.value })} />
            </Row>
            <Button className="waves-effect waves-light btn-large cardFix">Login</Button>
            </form>
            </div>
        );
    }
}

export default CreateProject;
