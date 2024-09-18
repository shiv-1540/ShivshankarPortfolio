import React from 'react';

function Home() {
  return (
    <div id="home" className="min-h-screen pt-16 bg-gray-900 text-white flex items-center">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
    <div className="intro text-center md:text-left mb-8 md:mb-0 flex-1">
      <p className="text-2xl md:text-3xl font-semibold mb-4">Hello Folks..!</p>
      <h3 className="text-4xl md:text-5xl font-bold">
        I am <span className="text-red-500">Shivshankar Ghyar</span><br />
        <span className="block text-gray-400 mt-2">Passionate Programmer</span>
        <span className="block text-gray-400">AI/ML Enthusiast</span>
        <span className="block text-gray-400">FullStack Developer</span>
      </h3>
      <div className="flex justify-start items-center mt-8">
          <a href="./resume.pdf" download className="inline-block">
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                 Download Resume
              </button>
           </a>
      </div>
</div>

    <div className="box flex-shrink-0 md:ml-10 mt-8 md:mt-0">
      <img
        src="./Images/meportfolio.png"
        alt="Shivshankar"
        width="270px"
        className="photo rounded-full shadow-lg border-4 border-red-500 transition-transform duration-300 transform hover:scale-150 "
      />
    </div>
  </div>
</div>

  );
}

export default Home;
