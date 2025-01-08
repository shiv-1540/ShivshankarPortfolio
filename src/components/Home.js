import React from 'react';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Intro Text */}
        <div className="intro text-center md:text-left mb-8 md:mb-0 flex-1">
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
            Hello Folks..! 👋
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I am <span className="text-red-500">Shivshankar Ghyar</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-8">
            Passionate Programmer | AI/ML Enthusiast | FullStack Developer
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="./resume.pdf"
              download
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="box flex-shrink-0 md:ml-10 mt-8 md:mt-0">
          <img
            src="./Images/meportfolio.png"
            alt="Shivshankar"
            width="300px"
            className="rounded-full shadow-lg border-4 border-red-500 transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;