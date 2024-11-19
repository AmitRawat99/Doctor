import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './assets/Components/mainPage'
import AboutPage from './assets/Components/AboutPage'
import Service from './assets/Components/Service'
import Blogs from './assets/Components/Blogs'
import Appoinments from './assets/Components/Appoinments'
import Contact from './assets/Components/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Service" element ={<Service/>}/>
      <Route path="/Blogs" element ={<Blogs/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
      <Route path="/Appoinments" element ={<Appoinments/>}/>
    </Routes>
    </>
  )
}

export default App
