import React, { Component } from 'react'
import FCItemsList from '../FunctionalComponenets/FCItemsList'
import FCCartList from '../FunctionalComponenets/FCCartList';

export default class CCShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsList: [
        { id: 1, name: "cap" },
        { id: 2, name: "pants" },
        { id: 3, name: "shirt" }
      ],
      cartList: [{ id: 4, name: "shirt" }]
    }
  }

  getIdfromIL = (id) => {
    console.log('id from shop=', id);

    let newIL = this.state.itemsList.filter(item => item.id !== id);
    let newCL = [...this.state.cartList, this.state.itemsList.filter(item => item.id === id)[0]]
    this.setState({
      itemsList: newIL,
      cartList: newCL
    });
  }

  render() {
    return (
      <div>
        <FCItemsList itemsList={this.state.itemsList} sendid2Shop={this.getIdfromIL} />
        <hr />
        <FCCartList cartList={this.state.cartList} />
      </div>
    )
  }
}
