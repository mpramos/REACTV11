import React from 'react'

const buttonStyles={
    padding: '10px 20px',
    background: 'rgb(0,255,0)',
    border:'none',
    borderRadius:5
}
const Button = (props) => {
  return (
    <button style={buttonStyles} onClick={props.onClick}>{props.text}</button>
  )
}

export default Button