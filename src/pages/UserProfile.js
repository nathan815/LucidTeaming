import React from 'react';
import { Row, Col, Card, Button, Input } from 'react-materialize';
import firebase from '../firebase';
import '../css/UserProfile.css';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      userData: {},
      loading: true,
      error: null,
      isMyProfile: false,
      showRequestForm: false,
      sendRequestMsg: "",
      selectedProject: '',
      myProjects: [],
    };

    this.loadData();
  }

  toggleRequestForm = () => {
    this.setState({
      showRequestForm: !this.state.showRequestForm
    });
  }

  sendRequest = (e) => {
    e.preventDefault();
    const myId = firebase.auth().currentUser.uid;
    firebase.firestore().collection('requests').add({
      from: myId,
      to: this.state.userData.userId,
      projectId: this.state.selectedProject
    });
  }

  loadData = () => {
    const userId = this.props.match.params.id;
    this.setState({
      isMyProfile: userId === firebase.auth().currentUser.uid
    });
    firebase.firestore().collection('projects').where('userID','==',userId).get()
      .then(querySnapshot => {
        const projects = [];
        querySnapshot.forEach((snapshot) => {
          projects.push({ ...snapshot.data(), ...{id:snapshot.id} });
        });
        console.log('proj',projects)
        this.setState({
          myProjects: projects
        });
      })
      .catch(err => {
        console.error(err);
      });
    firebase.firestore().collection('userData').doc(userId).get()
      .then(snapshot => {
        this.setState({
          userData: { ...snapshot.data(), userId },
          loading: false,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if(this.state.loading) {
      return <Card><p>Loading profile...</p></Card>;
    }
    return (
      <Card className="profile">
        <Row>
          <header>
            <h1>{ this.state.userData && `${this.state.userData.firstName} ${this.state.userData.lastName}` }</h1>
            { !this.state.isMyProfile && (
              <React.Fragment>
                <div className="buttons">
                { !this.state.showRequestForm && <Button onClick={this.toggleRequestForm}>Invite to Project</Button> }
                </div>
                { this.state.showRequestForm && (
                  <form onSubmit={this.sendRequest}>
                    <select onChange={e => this.setState({ selectedProject: e.target.value })}>
                      <option value={0}>Select a project...</option>
                      { this.state.myProjects.map((project, key) => (
                        <option key={key} value={project.id}>{ project.title }</option>
                      ))} 
                    </select>
                    <br />
                    <Button type="submit">Invite to Project</Button>
                    <Button onClick={this.toggleRequestForm}>Cancel</Button>
                  </form>
                )}
            </React.Fragment>
            )}
          </header>
          <Col s={12} m={2} className="sidebar">
            <div className="skills">
              <h5>Summary</h5>
              <h6><b>Age</b> { this.state.userData.age }</h6>
              <h6><b>Skills</b></h6>
              <ul>
                { this.state.userData.languages ? this.state.userData.languages.map((language, key) => (
                  <li key={key}>{ language }</li>
                )) : <p>This user hasn't set their skills yet.</p> }
              </ul>
            </div>
          </Col>
          <Col s={12} m={10}>
            <h5>Projects</h5>
            <p>{ this.state.userData.firstName } isn't partipating in any projects at this time.</p>
          </Col>
        </Row>
      </Card>
    );
  }
}
