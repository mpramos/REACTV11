import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const ThemeButton = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <button
        style={{
            background: theme==='light' ? '#fff':'#333',
            color:theme ==='light' ? '#000':'#fff',
            padding:'10px 20px',
            border:'none',
            cursor:'pointer'
        }}
        onClick={toggleTheme}
    >Toogle Theme</button>
  )
}

export default ThemeButton