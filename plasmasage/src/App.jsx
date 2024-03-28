import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/HeroSection/HeroSection'
import Donate from './Components/Donate/Donate'
import Bloodbank from './Components/BloodBank/Bloodbank'
import About from './Components/About/About'
import DonationForm from './Components/DonationForm/DonationForm'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';


const App = () => {

  const [theme,setTheme] = useState('light');

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Hero /></>
    },
    {
      path: "/donate",
      element: <><Donate /></>
    },
    {
      path: "/bloodbank",
      element: <><Bloodbank /></>
    },
    {
      path: "/about",
      element: <><About /></>
    },
    {
      path: "/donationform",
      element: <><DonationForm /></>
    }
  ])

  return (
    <div className={`container ${theme}`}>
      <Navbar  theme={theme} setTheme={setTheme}/>
      <RouterProvider router={router}/>
      <Footer  theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App