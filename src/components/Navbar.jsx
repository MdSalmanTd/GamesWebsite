import React from 'react'
import { Link } from 'react-router-dom';
import { DiGithubAlt } from "react-icons/di"; 
import logo from '../../public/Logo.png';



const Navbar = () => {
  return (
    <nav className='py-5'>
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="logo" className='w-56 h-auto invert rounded-lg' />
            <p className='text-xl text-center font-semibold'>games and stuff by Me</p>
          </Link>
        </div>
        {/* <div className="flex justify-center items-center space-x-6">
          <Link to="/introvert-run" className="text-xl font-semibold">
            Introvert Run
          </Link>
          <Link to="/ping-pong" className="text-xl font-semibold">
            Ping Pong
          </Link>
          <a href="https://github.com/MdSalmanTd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar