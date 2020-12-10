import React from 'react';

export default function FCCartItem(props) {
  return (
    <div>
      <h4>id= {props.item.id}</h4> 
      <h4>name={props.item.name}</h4> <br/>
    </div>
  )
}
