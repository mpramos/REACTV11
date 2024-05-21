import React from 'react'

const TechList = ({props}) => {
    const techList= props.skills.map(tech=> <li>{tech}</li>)
 return techList
}

export default TechList