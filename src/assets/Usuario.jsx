import React, { useEffect, useState } from 'react'

function Usuario() {
    const [usuario,setUsuario]=useState({nombre:'Juan',edad:25})

    useEffect(()=>{
        console.log('El objeto ha cambiado: ',usuario);
    },[usuario])
  return (
    <div>
       <p>Nombre : {usuario.nombre}</p> 
       <p>Edad : {usuario.edad}</p> 
       <button onClick={()=>setUsuario({...usuario,edad:usuario.edad+1})}>Incrementar edad</button>
    </div>
  )
}

export default Usuario