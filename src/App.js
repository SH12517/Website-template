import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Service from './component/Servic/Service'
import Contact from './component/Contact/Contact'
export default function App() {
  return (
    <div>
         <Navbar/>
         <Home/>
         <About/>
         <Service/>
         <Contact/>
       </div>
  )
}
