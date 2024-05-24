import { useState } from 'react'
function App() {
  const initialState={
    firstName:'',
    lastName:'',
    country:'',
    title:'',
  }
const [formData,setData]=useState(initialState)

const onChange=(e)=>{
  const {name,value}=e.target
  setData({...formData,[name]:value})
}
const onSubmit =(e)=>{
  e.preventDefault()
  console.log(formData);
}
const {firstName,lastName,country,title} = formData
  return (
    <>
    <div>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input 
          type="text"
          name='firstName'
          placeholder='first Name'
          value={firstName}
          onChange={onChange}
          />
        </div>
        <div>
          <input 
          type="text"
          name='lastName'
          placeholder='last Name'
          value={lastName}
          onChange={onChange}
          />
        </div>
        <div>
          <input 
          type="text"
          name='country'
          placeholder='country'
          value={country}
          onChange={onChange}
          />
        </div>
        <div>
          <input 
          type="text"
          name='title'
          placeholder='title'
          value={title}
          onChange={onChange}
          />
        </div>
        <button >Submit</button>
      </form>
    </div>
    </>
  )
}
export default App
