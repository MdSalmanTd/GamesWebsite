import React, { useEffect } from 'react'

const PingPong = () => {
    useEffect(() => {
        const iframe = document.getElementById('game-frame');
        iframe?.focus();
      }, []);

  return (
      <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <iframe 
            id="game-frame"
            src="/ping-pong/pingpong.html"
            title="Ping Pong Game"
            className="w-full min-h-screen border-0"
        allowFullScreen

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </div>
  )
}

export default PingPong