import React, { useEffect } from 'react';


const IntrovertRun = () => {
    useEffect(() => {
        const iframe = document.getElementById('game-frame');
        iframe?.focus();
      }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-100 via-white to-gray-100">
      <div className='max-w-7xl mx-auto'>
      <iframe
        id="game-frame"
        src="/introvert-run/index.html"
        className="w-full h-screen border-none"
        allowFullScreen
        title="Introvert Run"
      ></iframe>
      </div>
    </div>
  );
};

export default IntrovertRun;
