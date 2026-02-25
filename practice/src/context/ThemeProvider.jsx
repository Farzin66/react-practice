import React from 'react'
import { ThemeContext } from './themeContext'
import { useState } from 'react';


const ThemeProvider = ({children}) => {
   const [theme,setTheme] = useState('light');

   const toggleTheme = () => {
    setTheme (prev => (prev === 'light' ? 'dark' : 'light'))
   }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider