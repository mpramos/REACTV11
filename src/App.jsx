import { useState } from 'react'
function App() {
  const options=[
    {
      value:'',
      label: '--Select Country--'
    },
    {
      value:'Argentina',
      label: 'Argentina'
    },
    {
      value:'Perú',
      label: 'Perú'
    },
    {
      value:'Colombia',
      label: 'Colombia'
    }
  ]
  const initialState={
    firstName:'',
    lastName:'',
    email:'',
    title:'',
    country:'',
    tel:'',
    dateOfBirth:'',
    favoriteColor:'',
    weight:'',
    gender:'',
    file:'',
    bio:'',
    skills:{
      html:false,
      css:false,
      javascript
    }
  }
  const [formDate,setFormData]=useState(initialState)
  const {firstName,lastName,title,country,email,tel,dateOfBirth,favoriteColor,weight,gender,bio}=formDate
    return (
    <>
    <div>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input 
      type="text"
      name='firstName'
      />
      </form>
    </div>

    </>
  )
}
export default App
