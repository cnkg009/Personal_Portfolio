import React, { useState } from 'react'
import { Home, User, Code, Mail, HeartPulse, Users, Shield, Clock, Play, Menu } from "lucide-react"
import { Link } from 'react-router-dom'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 bg-black text-white shadow-md z-50">
      <div className=" flex items-center justify-between h-16 container mx-auto">

      <Link className="flex items-center justify-center" to={'/'}>
       
        <span className="text-xl font-bold">PortFolio</span>
      </Link>
      <nav className="hidden sm:flex items-center space-x-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/"
        >
          <Home className="inline-block mr-1 h-4 w-4" />
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/about"
        >
          <Users className="inline-block mr-1 h-4 w-4" />
          About
        </Link>
        
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/projects"
          >
          <Play className="inline-block mr-1 h-4 w-4" />
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/contact"
          >
          <Play className="inline-block mr-1 h-4 w-4" />
          Contact
        </Link>
      </nav>
      <div className="sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-black text-white shadow-md z-40">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/"
              onClick = {()=>setIsMenuOpen(!isMenuOpen)}
            >
              <Home className="inline-block mr-1 h-4 w-4" href="#" />
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/about"
              onClick = {()=>setIsMenuOpen(!isMenuOpen)}
              >
              <Users className="inline-block mr-1 h-4 w-4" href="#about" />
              About
            </Link>
           
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/projects"
              onClick = {()=>setIsMenuOpen(!isMenuOpen)}
            >
              <Play className="inline-block mr-1 h-4 w-4" href="#contact" />
              Projects
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/contact"
              onClick = {()=>setIsMenuOpen(!isMenuOpen)}
            >
              <Play className="inline-block mr-1 h-4 w-4" href="#contact" />
              Contact
            </Link>
          </nav>
        </div>
      )}
          </div>
    </header>
  )
}

export default Header