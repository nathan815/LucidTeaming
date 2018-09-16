import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import firebase from '../firebase';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      userData: {},
      loading: true,
      error: null,
    };

    this.loadData();
  }

  loadData = () => {
    const userId = this.props.match.params.id;
    firebase.firestore().collection('userData').doc(userId).get()
      .then(snapshot => {
        this.setState({
          userData: snapshot.data()
        });
      console.log(snapshot.data());
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <Card>
        <Row>
          <h1>{ this.state.userData && `${this.state.userData.firstName} ${this.state.userData.lastName}` }</h1>
          <Col s={6}>
            <p>Test</p>
          </Col>
        </Row>
      </Card>
    );
  }
}
