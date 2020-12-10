import React from 'react'
import FCItem from './FCItem';

export default function FCItemsList(props) {
  
  let list = props.itemsList.map(item =>
    <FCItem item={item} sendid2ItemsList= {getidfromchild} key={item.id}/>);

    function getidfromchild(id){
      props.sendid2Shop(id);
    }

  return (
    <div>
      {list}
    </div>
  )
}
