import React, { useEffect, useState } from 'react'

const Lista = () => {
    const [items,setItems]=useState(['item1','item2','item3'])

    useEffect(()=>{
        console.log('La lista de items ha cambiado ',items);
    },[items])
  return (
    <div>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={()=>setItems([...items,`item${items.length+1}`])}>Agregar Item</button>
    </div>
  )
}

export default Lista