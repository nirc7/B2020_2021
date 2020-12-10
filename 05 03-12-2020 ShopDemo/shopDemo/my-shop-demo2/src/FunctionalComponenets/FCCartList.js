import React from 'react'
import FCItem from './FCItem';

export default function FCCartList(props) {
  
  let list = props.cartList.map(item =>
    <FCItem item={item} key={item.id} />);

  return (
    <div>
      {list}
    </div>
  )
}
