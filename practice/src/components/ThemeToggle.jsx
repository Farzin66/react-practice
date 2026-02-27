import React from 'react'
import { useMultiSliceStore } from '../stores/multi-slice-store'

const ThemeToggle = () => {
    const theme = useMultiSliceStore ((state) => state.theme);
    const toggleTheme = useMultiSliceStore ((state) => state.toggleTheme);

  return (
    <>
      <h1>Theme Toggle</h1>
      <br />
      <h1>Theme: {theme}</h1>
      <br />
      <button onClick={toggleTheme}>Toggle</button>
    </>
  )
}

export default ThemeToggle