import React from 'react';

function Projects() {
  return (
    <div id="projects" className="min-h-screen py-16 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp">Projects</h2>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div
          className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp"
          id="farm"
        >
          <img src="./Images/Projects/userhome.png" alt="Farm Helper app" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-red-500">LITARC PAGES[Functional Blog Website]</h3>
          </div>
        </div>

        <div
          className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp"
          id="civil"
        >
          <img src="./Images/Projects/Civil photo.jpg" alt="Civil Prototyping" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-red-500">Civil Prototyping</h3>
          </div>
        </div>

        <div
          className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp"
          id="email_detect"
        >
          <img src="./Images/Projects/email_detect.jpg" alt="Email detection" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-red-500">Email Detection</h3>
          </div>
        </div>

        <div
          className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp"
        >
          <img src="./Images/Projects/location.png" alt="Location Tracking" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-red-500">Location Tracking Application</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
