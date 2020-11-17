import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    //let num=7;//local variable
    this.field1 = 2; //field

    this.state = {
      model: 'bmw',
      speed: 100,
      isAutomatic: true,
      name: ''
    };
  }

  btnAddOne = () => {
    // this.state.speed=200; //ERROR

    // this.setState({
    //   speed: 200,
    //   seats:4
    // });

    this.setState((prev) => ({
      speed: prev.speed + 1,
      model: prev.model + ":)"
    }));
    //this.setState((prev) => ({ seats: prev.seats + 1 }));
  }

  chgTxtName = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    console.log(1);
    return (
      <div style={{ border: 'solid black 1px', padding: 5 }}>
        <h3>CCCar</h3>
        shalom car2 <br />
        model = {this.state.model} <br />
        speed = {this.state.speed} <br />
        isAutomatic = {this.state.isAutomatic ? 'Yes' : 'No'} <br />
        seats  = {this.state.seats} {this.state.seats === undefined ? 'und' : 'no und'} <br />
        <Button variant="warning"
          onClick={this.btnAddOne} >add one</Button> <br />
        <input type="text" onChange={this.chgTxtName} /> <br />
        name= {this.state.name}
      </div>
    );
  }

}