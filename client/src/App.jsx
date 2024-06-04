import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/HeroSection/HeroSection'
import Donate from './Components/Donate/Donate'
import Request from './Components/Request/Request'
import Bloodbank from './Components/BloodBank/Bloodbank'
import About from './Components/About/About'
import DonationForm from './Components/DonationForm/DonationForm'
import Admin from './Components/Admin/Admin'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';


const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme? current_theme : 'light');

  useEffect(() =>{
    localStorage.setItem('current_theme',theme)
  },[theme])

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
      path: "/request",
      element: <><Request /></>
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
    },
    {
      path: "/admin",
      element: <><Admin /></>
    }
  ])

  return (
    <div className={`container ${theme}`}>
      <Navbar  theme={theme} setTheme={setTheme}/>
      <RouterProvider router={router}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App