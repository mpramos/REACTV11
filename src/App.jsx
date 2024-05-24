import { useState } from 'react'
function App() {
const [firstName,setFirstName]=useState('')

const handleChange =(e)=>{
  const value=e.target.value
  setFirstName(value)
}

  return (
    <>
      <label htmlFor="firstName">First Name :</label>
      <input 
        type="text"
        id='firstName'
        name='firstName'
        placeholder='First Name'
        value={firstName} 
        onChange={handleChange}
        />
        <h1>{firstName}</h1>
    </>
  )
}

export default App
