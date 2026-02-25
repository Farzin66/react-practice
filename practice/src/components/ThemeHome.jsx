import React from 'react'
import { ThemeContext } from '../context/themeContext'
import { useContext } from 'react'

const ThemeHome = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <h2>Theme: {theme}</h2>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeHome