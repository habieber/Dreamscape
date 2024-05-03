import { Link } from "react-router-dom"
import { useState } from "react"
import * as userService from '../../utilities/users-services'
import { FaBars } from 'react-icons/fa'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    console.log('handlenav')
    console.log(nav)
    setNav(!nav)
  }

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="nav">
      <div className="w-full min-h-[15px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
        <div className="flex items-center">
          <ul className="hidden sm:flex px-4">
            {user && (
              <>
                <li>
                  <Link to="/">All Dreams</Link>
                </li>
                <li>
                  <Link to="/new">New Dream</Link>
                </li>
              </>
            )} 
          </ul>
        </div>

        <div className="hidden sm:flex px-4 flex items-center">
          {user && (
            <>
              <span>Hello, {user}</span>
              <Link to="" onClick={handleLogOut} className="px-4">Log Out</Link>
            </>
          )}
        </div>
        
        <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={30} className="mr-4 cursor-pointer" />
        </div>
        <div 
        onClick={handleNav}
        className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-gray-700/80 px-4 py-7 flex flex-col' 
        : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 '}>
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py8">
              <a href="/">Home</a>
            </li>
            <li className="text-2xl py8">
              <a href="#index">My Dreams</a>
            </li>
            <li className="text-2xl py8">
              <a href="/">New Dream</a>
            </li>
            <li className="text-2xl py8">
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}