import React from 'react'

const UserCard = ({nombre,version,imagen}) => {
  return (
   <>
   <div>
   <img src={imagen} alt="imagen de avatar" />
   <h2>Academia {nombre} {version}</h2>
   </div>
   </>
  )
}

export default UserCard