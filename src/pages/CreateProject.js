import React from 'react'
import {
    Button,
    Icon,
    Modal,
    Input,
    Row
} from 'react-materialize'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'

const db = firebase.database.collection("projects");

class Projects extends React.Component {
        constructor(props){
            super(props)
            this.state={
                description: "",
                title: "",
                tech: [],
                majors: []
            }
        }        

        onSubmit = async (e)=>{
            e.preventDefault();
            console.log(this.state);
            this.state.tech = this.state.tech.split(",");
            this.state.majors = this.state.majors.split(",");
            const {description, title, tech, majors} = this.state
            const userID = firebase.auth().currentUser.uid
            await db.add({userID, description, title, tech, majors});
            this.props.history.push('/');
        }

        render() {
            return (
                <div>
                <form onSubmit={this.onSubmit}>
                <h1>Create Project</h1>
                <Row>
                <Input id="titlebox" type="text" label="What is the name of your project?" s={6} value={this.state.title} onChange={(e) => this.setState({title: e.target.value })} />
                <Input id="descbox" type="text" label="Give a short description of it." s={6} value={this.state.description} onChange={(e) => this.setState({description: e.target.value })} />
                </Row>
                <Row>
                <Input id="techbox" type="text" label="What technologies will you be using?" s={6} value={this.state.tech} onChange={(e) => this.setState({tech: e.target.value })} />
                <Input id="majbox" type="text" label="What certifications are you looking for?" s={6} value={this.state.majors} onChange={(e) => this.setState({majors: e.target.value })} />
                </Row>
                <Button className="waves-effect waves-light btn-large cardFix">Create Project</Button>
                </form>
                </div>
                )
            }
}
    


export default withRouter(Projects);
