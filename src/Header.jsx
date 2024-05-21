import React, { version } from 'react'

const showDate =(time)=>{
  const months =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month= months[time.getMonth()].slice(0,3)
  const year= time.getFullYear()
  const date= time.getDate()
  return `${month} ${date} ${year}`
}

const Header = ({
  data:{
    bienvenida,
    titulo,
    subtitulo,
    autor:{nombre,version},
    fecha
  }
}) => {
    return (
        <>
           <h1>{bienvenida}</h1>
           <h2>{titulo}</h2> 
           <h3>{subtitulo}</h3>
           <p>Academia {nombre} {version}</p>
           <small>{showDate(fecha)}</small>
        </>
  )
}

export default Header