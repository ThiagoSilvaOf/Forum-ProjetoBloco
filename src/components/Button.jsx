import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.action}</button>
  )
}

export default Button