import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <div className="min-h-[calc(100vh-288px)] mb-15 ">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
