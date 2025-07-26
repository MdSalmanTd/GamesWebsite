import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import IntrovertRun from './pages/IntrovertRun'
import PingPong from './pages/PingPong'
import Home from './pages/Home'
import { DiGithubAlt } from "react-icons/di"; 

const App = () => {
  return (
    <div className='bg-gradient-to-br from-sky-100 via-white to-gray-100'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introvert-run" element={<IntrovertRun />} />
        <Route path="/ping-pong" element={<PingPong />} />
      </Routes>

      <Link
  to="https://github.com/MdSalmanTd"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 p-3 bg-black text-white rounded-full shadow-xl border border-white/20 backdrop-blur-lg hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group"
>
  <DiGithubAlt className="w-8 h-8 group-hover:animate-pulse transition-transform" />
</Link>


    </div>
  )
}

export default App