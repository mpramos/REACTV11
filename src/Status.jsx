import React from 'react'

const Status = (props) => {
    let status= props.status ? 'Puedes conducir':'No puedes conducir'
  return <p>{status}</p>
}

export default Status