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
      javascript:false
    }
  }
  const [formData,setData]=useState(initialState)
  const onChange=(e)=>{
      const {name,value}=e.target
      setData({...formData,[name]:value})
  }

  const onSubmit=(e)=>{
      e.preventDefault()
      console.log(formData)
  }

  const {firstName,lastName,title,country}=formData
    return (
    <>
    <div>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
      <div>
      <input 
        type="text"
        name='firstName'
        placeholder='First Name'
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
        placeholder='Country'
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
      <button > Submit</button>
      </form>
    </div>

    </>
  )
}
export default App
