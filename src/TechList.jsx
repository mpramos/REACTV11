import React from 'react'

const TechList = ({skills}) => {
    if (!skills || skills.length===0) {
        return <div>No hay habilidades para mostrar</div>
    }
    const techList= skills.map(tech=><li>{tech}</li>)
    return <ul>{techList}</ul>
}

export default TechList