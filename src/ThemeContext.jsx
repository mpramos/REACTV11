import { createContext, useState } from "react";

export const ThemeContext=createContext()

export function ThemeProvider({children}) {
    const [theme,setTheme]=useState('light')

    const toggleTheme=()=>{
        setTheme(prevTheme => (prevTheme ==='light' ? 'dark':'light'))
        console.log(theme)
    }
    
    return(
       <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
       </ThemeContext.Provider>
    )
}