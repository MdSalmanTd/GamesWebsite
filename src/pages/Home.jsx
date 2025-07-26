import React from 'react'
import pingpong from '../../public/pingpong.png'
import introvertrun from '../../public/introvertrun.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 via-white to-gray-100 overflow-hidden">
      <div className="flex flex-col justify-start items-center px-4 py-16 text-center">
        <h1 className="max-w-6xl text-5xl md:text-9xl pt-20 font-extrabold text-black leading-tight drop-shadow-md">
          😶‍🌫️ WHY ARE YOU HERE? GO AWAY
        </h1>
        <p className="mt-6 text-2xl md:text-5xl text-gray-700 font-medium">
          Before Going, Wanna Play the Games Below? 🤖
        </p>
      </div>

      <div className="mt-10 px-4 py-16 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-16">
          C++ Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* Ping Pong */}
          <Link
            to="/ping-pong"
            className="relative rounded-3xl overflow-hidden shadow-2xl group hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={pingpong}
              alt="Ping Pong"
              className="w-full h-80 md:h-96 object-cover brightness-90 group-hover:brightness-100 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Ping Pong</h3>
              <p className="text-gray-200 mt-2 text-lg">Classic retro game, now on web.</p>
            </div>
          </Link>

          {/* Introvert Run */}
          <Link
            to="/introvert-run"
            className="relative rounded-3xl overflow-hidden shadow-2xl group hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={introvertrun}
              alt="Introvert Run"
              className="w-full h-80 md:h-96 object-cover brightness-90 group-hover:brightness-100 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Introvert Run</h3>
              <p className="text-gray-200 mt-2 text-lg">Dodge the crowd and race home.</p>
            </div>
          </Link>
        </div>
      </div>

    </div>

  )
}

export default Home