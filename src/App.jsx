import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import ProfilePage from './ProfilePage'
import Menu from './Menu'
import Lista from './Lista'
import Usuario from './assets/Usuario'

function App() {
  const [count,setCount]=useState(0)
useEffect(()=>{
console.log(`El contador ha cambiado a :${count}`);  
},[count])

return(
<>
<p>Tu clickeaste {count} veces</p>
<button onClick={()=>setCount(count+1)}>Click Me</button>
<Lista/>
<Usuario/>
</> 
)  
}
export default App
