import React from 'react';

export default function FCStudent(props) {

  let num = 7;
  console.log(num++);

  //props.name = "nir"; //ERROR! props is read only!

  return (
    <div style={
      {
        margin: 10,
        border: 'solid black 2px',
        color: 'red',
        backgroundColor: 'gray'
      }}>
      <h3>Student</h3>
      id = {props.id} <br />
      name = {props.name} { props.name === "avi" && ' is the great!'} <br />
      inRup = {props.inRup ? 'Yes' : 'No'} <br/>
      num= {num}
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