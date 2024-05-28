import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import ProfilePage from './ProfilePage'
import Menu from './Menu'
import Lista from './Lista'
import Usuario from './assets/Usuario'
import { ThemeProvider } from './ThemeContext'
import ThemeButton from './ThemeButton'

function App() {

return(
<ThemeProvider>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
  <ThemeButton/>
</ThemeProvider>
)  
}
export default App
