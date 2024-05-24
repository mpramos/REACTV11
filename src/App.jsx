import { useState } from 'react'
function App() {
  const [count,setCount]=useState(0)
  const url='https://rickandmortyapi.com/api/character/avatar/41.jpeg'

  const[image,setImage]=useState(url)

  const changeCharacter=()=>{
    let characterOne='https://rickandmortyapi.com/api/character/avatar/196.jpeg'
    let characterTwo='https://rickandmortyapi.com/api/character/avatar/41.jpeg'
    let result= image===characterOne ? characterTwo:characterOne
    setImage(result)
  }

  const AddOne=()=>{
    let value=count+1
    setCount(value)
  }
  const MinusOne=()=>{
    let value=count-1
    setCount(value)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={AddOne}>Add One</button>
    <button onClick={MinusOne}>Minus One</button>
    <div>
      <img src={image} alt="character" />
    </div>
    <button onClick={changeCharacter}>Change</button>
    </>
  )
}

export default App
