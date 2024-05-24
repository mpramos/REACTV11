import './App.css'

const Number=({numbers})=>numbers.map(number=> <li key={number}>{number}</li>)
const Skill= ({skill:[tech,level]})=>(<li>{tech} {level}</li>)
const Skills=({skills})=>{
  const skillsList=skills.map((skill)=><Skill key={skill[0]} skill={skill}/>)
  return <ul>{skillsList}</ul>
} 
const Country=({country: {name,city}})=>{
    return(
      <div>
        <h1>{name}</h1>
        <small>{city}</small>
      </div>
    )
}
const Countries=({countries})=>{
  const countryList=countries.map(country=><Country key={country.name} country={country}/>)
  return <div>{countryList}</div>
}
function App() {
  const numbers=[1,2,3,4,5]
  const skills=[
    ['HTML',10],
    ['CSS',7],
    ['JavaScript',9],
    ['React',8],
  ]
  const countries =[
    {name:'Argentina', city:'Buenos Aires'},
    {name:'Colombia', city:'Bogotá'},
    {name:'Peru', city:'Lima'},
    {name:'Chile', city:'Santiago de Chile'},
    {name:'Bolivia', city:'Sucre'},
  ]
  return (
    <>
    <div>
      <h1>Number List</h1>
      <ul>
        <Number numbers={numbers}/>
      </ul>
      <h1>Skills List</h1>
      <Skills skills={skills}/>
      <h1>Countries List</h1>
      <Countries countries={countries}/>
    </div>
    </>
  )
}

export default App
