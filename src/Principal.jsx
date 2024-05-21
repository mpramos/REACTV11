import React from 'react'
import TechList from './TechList'
import UserCard from './UserCard'

const Principal = ({skills}) => {
  return (
    <main>
      <div>
        <p>Prerequisitos para iniciar en {' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
          </p>
        <ul>
            <TechList skills={skills}/>
        </ul>
        {/* <UserCard nombre={nombre} version={version} imagen={imagen}/> */}
      </div>
    </main>
  )
}

export default Principal