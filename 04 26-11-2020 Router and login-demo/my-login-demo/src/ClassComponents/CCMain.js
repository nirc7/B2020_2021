import React, { Component } from 'react'
import FCMessage from '../FunctionalCompnents/FCMessage'
import CCLogin from './CCLogin'

export default class CCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStasredYet : false
    };
  }

  getDataFromChild = (userData) => {
    this.setState({ 
      isStasredYet:true,
      checkUser: userData });
  }

  render() {
    return (
      <div>
        <CCLogin sendData2Parent={this.getDataFromChild} />
        <FCMessage checkUser={this.state.checkUser} isStasredYet={this.state.isStasredYet}/>
      </div>
    )
  }
}
