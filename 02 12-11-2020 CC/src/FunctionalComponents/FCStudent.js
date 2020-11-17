import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FCStudent(props) {

  let num = 7;
  console.log(num++);
  let name = "avi";

  //props.name = "nir"; //ERROR! props is read only!

  function btnAddOne() {
    console.log(num);
    num++
    console.log(num);
  }

  function chgTxtName(e) {
    console.log(e.target.value);
  }


  return (
    <div style={
      {
        margin: 10,
        border: 'solid black 2px',
        color: 'red',
        backgroundColor: 'gray',
        padding: 5
      }}>
      <h3>Student</h3>
      id = {props.id} <br />
      name = {props.name} { props.name === "avi" && ' is the great!'} <br />
      inRup = {props.inRup ? 'Yes' : 'No'} <br />
      num= {num} <br />
      <Button variant="success" onClick={btnAddOne} >add one</Button> <br/>
      <input type="text" onChange={chgTxtName} />
      name={name}
    </div>
  );

  // if (props.name === "avi") {
  //   return (
  //     <div style={
  //       {
  //         margin: 10,
  //         border: 'solid black 2px',
  //         color:'red',
  //         backgroundColor:'gray'
  //       }}>
  //       id = {props.id} <br />
  //       name = {props.name} { props.name === "avi" && ' is the great!'} <br />
  //       inRup = {props.inRup ? 'Yes' : 'No'}
  //     </div>
  //   );
  // }
  // else{
  //   return(
  //     <div>lo avi</div>
  //   );
  // }
}