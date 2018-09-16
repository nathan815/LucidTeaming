import React from 'react';
import { Input, Row, Button} from 'react-materialize';
import {Redirect} from 'react-router-dom';
import firebase from '../firebase';

export default class Welcome extends React.Component {

  constructor (props) {
    super(props);

    this.languages = [
      "JavaScript",
      "HTML",
      "CSS",
      "Vue.js",
      "Python",
      "Java",
      "PHP",
      "React",
      "Node.js",
      "Lua",
      "C",
      "C++",
      "C#"
    ];

    this.state = {
      age: 13,
      registered: false
    };

    this.selectedLanagages = [];

    this.onSubmit = async e => {
      e.preventDefault();
      const userId = firebase.auth().currentUser.uid;
      const userData = firebase.firestore().collection('userData').doc(userId);

      if(userData.languages && userData.age) {
        return;
      }

      try {
        await userData.set({
          email: firebase.auth().currentUser.email,
          age: this.state.age,
          languages: this.selectedLanagages
        });
      } catch (error) {
        //Error with adding data.
        return alert(error);
      }

      this.setState({
        registered: true
      });

    };

  }

  render() {

    if (this.state.registered) return <Redirect to="/" />

    return (
      <div>
        
        <h4>Welcome!</h4>
        <p>We'd love to hook you up with some other developers! But first, we'll need to know a bit more about you!</p>
        <form className="col s12 auth-form" onSubmit={this.onSubmit}>
          <Row>
            <Input label="How old are you?" type="number" value={this.state.age} onChange={(e) => this.setState({age: Number(e.target.value) > 0 ? Number(e.target.value) : 0})} required/>
          </Row>

          <Row>
            <div className="col input-field">
              <p>What languages do you know?</p>

              <div className="col s12 m6">
                <p>
                  {this.languages.slice(Math.floor(this.languages.length / 2)).map(lang => (
                    <label>
                      <input type="checkbox" id={`language-${lang}`} onClick={(e) => e.target.checked ? this.selectedLanagages.push(e.target.id.slice(9)) : this.selectedLanagages.splice(this.selectedLanagages.indexOf(e.target.id.slice(9)), 1)}/>
                      <span>{lang}</span>
                      <br />
                    </label>
                  ))}
                </p>
              </div>

              <div className="col s12 m6">
                <p>
                  {this.languages.slice(0, Math.floor(this.languages.length / 2)).map(lang => (
                    <label>
                      <input type="checkbox" id={`language-${lang}`} onClick={(e) => e.target.checked ? this.selectedLanagages.push(e.target.id.slice(9)) : this.selectedLanagages.splice(this.selectedLanagages.indexOf(e.target.id.slice(9)), 1)}/>
                      <span>{lang}</span>
                      <br />
                    </label>
                  ))}
                </p>
              </div>


            </div>
          </Row>

          <Button>Continue</Button>
        </form>

      </div>
    );
  }
}
