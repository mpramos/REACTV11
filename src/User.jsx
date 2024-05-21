import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>
         {props.nombre}
         {' '}
         {props.version}
       </h1>
    </div>
  )
}

export default User