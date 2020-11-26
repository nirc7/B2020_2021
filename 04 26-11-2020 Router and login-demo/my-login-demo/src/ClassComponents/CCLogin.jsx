import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
//import Avi from '@material-ui/core/Button';

const Users = [
  { email: 'avi@a.com', pass: 'avi123', name: 'avi' },
  { email: 'ben@a.com', pass: 'ben123', name: 'ben' },
  { email: 'charlie@a.com', pass: 'charlie123', name: 'charlie' }
];

export default class CCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnLogin = () => {
    let checkUser = Users.find(user => user.email === this.state.email &&
      user.pass === this.state.pass);
    if (checkUser !== undefined) {
      this.setState({message : `hello ${checkUser.name} u r logged in:)` });
    }
    else {
      this.setState({message : `hello ${this.state.email} u r not logged in:(` });
    }
  }

  chgEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  chgPass = (e) => {
    this.setState({ pass: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <TextField label="Email" onChange={this.chgEmail} /> <br /> <br />
        <TextField label="Pass" type="password" onChange={this.chgPass} /> <br /> <br />
        <Button
          variant="outlined"
          size="small"
          color="primary" onClick={this.btnLogin}>Login</Button> <br/> <br/>
          {this.state.message}
      </div>
    )
  }
}
