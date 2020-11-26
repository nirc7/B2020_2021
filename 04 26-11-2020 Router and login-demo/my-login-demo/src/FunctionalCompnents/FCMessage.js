import React from 'react'

export default function FCMessage(props) {
  return (
    <div>
      {props.isStasredYet && (props.checkUser !== undefined ?
        `hello ${props.checkUser.name} u r logged in:)` :
        `hello stranger u r not logged in:(`) }
    </div>
  )
}
