import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-services'
import { FaBars } from 'react-icons/fa'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // delegate to the users-service
    userService.logOut();
    // update state will also cause a re-render
    setUser(null);
  }
  return (
    <div className="w-full min-h-[15px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        {user && (
          <>
          <li>
            <Link to="/">All Dreams</Link>
          </li>
          <li>
          <Link to="/new">New Dream</Link>
          </li>  
          <li>
            <span>Hello, {user}</span>
          </li>          
          <li>
          <Link to="">Log Out</Link>
          </li>       
          </>
        )} 
      <div>
        <FaBars />
      </div>
      </ul>
    </div>

  )
}