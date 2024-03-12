import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';

const App = () => {

  const [theme,setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <HeroSection theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App