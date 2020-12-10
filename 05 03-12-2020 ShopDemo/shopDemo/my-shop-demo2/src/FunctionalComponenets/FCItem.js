import React from 'react';

export default function FCItem(props) {

  const btnBuy = () => {
    props.sendid2ItemsList(props.item.id);
  }

  return (
    <div>
      <h5>id= {props.item.id}</h5>
      <h5>name={props.item.name}</h5>
      <button onClick={btnBuy} >buy</button>
      <br />
    </div>
  )
}
