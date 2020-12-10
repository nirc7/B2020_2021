import React, { Component } from 'react';
import './App.css';

const Users = [
  { id: 1, name: 'avi' },
  { id: 2, name: 'ben' },
  { id: 3, name: 'charlie' }
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { users: Users }
  }

  btnRemove = (id) => {
    console.log(this.state.users);
    let newUsers = this.state.users.filter(user => user.id !== id);
    this.setState({ users: newUsers }
      , () => {
        console.log('the new users=', this.state.users);
      });
  }

  btnRemove2 = (e) => {
    let newUsers = this.state.users.filter(user =>
      user.id !== parseInt(e.target.dataset.userid));
    this.setState({ users: newUsers });
  }

  render() {
    console.log(this.state.users);

    let showUsers = this.state.users.map(
      user => <li key={user.id}>id={user.id}, name={user.name}
        <a href="#stam" onClick={() => this.btnRemove(user.id)} > X </a></li>
    );

    let showUsers2 = this.state.users.map(
      user => <li key={user.id}>id={user.id}, name={user.name}
        <a href="#stam2preventwarrning"
          data-userid={user.id}
          onClick={this.btnRemove2} > X </a></li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {showUsers}
          </ul>
          <span style={{ color: 'red' }}>_______________</span>
          <ul>
            {showUsers2}
          </ul>
        </header>
      </div>
    );
  }
}
