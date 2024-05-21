import './App.css'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
import Peso from './Peso'
import Principal from './Principal'
import Skills from './Skills'
import Status from './Status'
import User from './User'


function App() {
  const gravedad=9.81
  const masa=75
  let edad=35
  let status = edad >=18

  const data={
    bienvenida:'Bienvenidos a React ',
    titulo:'Iniciando con react',
    subtitulo:'React es una libreria de JavaScript',
    autor:{
      nombre:'Evolutech',
      version:'JSE 11',
      imagen:'https://rickandmortyapi.com/api/character/avatar/39.jpeg'
    },
    fecha: new Date(),
    skills: ['HTML','CSS','JavaScript']
  }
  
  const decirHola=()=>{
    alert('Holaaa 😎')
  }
  const saludar=()=>{
    alert('Bienvenidos a React con JavaScript 😎')
  }
  
  return (
    <>
      <Header
        data={data}
      />
      <User nombre='Evolutech' version='JSE 11' />
      <Principal data={data} />
      <Button text='Hola ' onClick={()=>alert('Hi!!!')}/>
      <Button text='saludar ' onClick={saludar}/>
      <Button text='Ver la fecha ' onClick={()=> alert(new Date())}/>
      <Peso peso={gravedad*masa}/>
      <Status status={status}/>
      <Skills skills={['HTML','CSS','JavaScript']}/>
      <Footer />
    </>
  )
}

export default App
