import React from 'react';

function Education() {
  return (
    <section id="education" className="bg-gray-900 py-16 text-gray-100">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">
        Education
      </h2>

      {/* Education Timeline */}
      <div className="edu max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* 10th [SSC] */}
        <div className="flex flex-col items-center relative">
          <div className="bg-gray-800 shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-500 text-xl">10th [SSC]</span>
              <span className="text-gray-400 text-lg">93.60%</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Sukhdevanand Vidyalya Bhandegaon, Hingoli
            </p>
          </div>
          {/* Arrow */}
          <svg
            className="w-8 h-8 absolute -bottom-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* 12th [HSC] */}
        <div className="flex flex-col items-center relative">
          <div className="bg-gray-800 shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-500 text-xl">12th [HSC]</span>
              <span className="text-gray-400 text-lg">88.17%</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Sukhdevanand Junior College Bhandegaon, Hingoli
            </p>
          </div>
          {/* Arrow */}
          <svg
            className="w-8 h-8 absolute -bottom-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* BTech */}
        <div className="flex flex-col items-center relative">
          <div className="bg-gray-800 shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-500 text-xl">
                Pursuing BTech in Computer Science
              </span>
              <span className="text-gray-400 text-lg">MIT Academy of Engineering, Pune</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Expected Graduation: 2026
            </p>
          </div>
          {/* Arrow */}
          <svg
            className="w-8 h-8 absolute -bottom-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* First Year */}
        <div className="flex flex-col items-center relative">
          <div className="bg-gray-800 shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-500 text-xl">First Year</span>
              <span className="text-gray-400 text-lg">Completed 30 credits</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              <b className="text-gray-300">Courses:</b> Programming Fundamentals (C, C++), Data Structures, Web Development (Basics)
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <b className="text-gray-300">Coding Platforms:</b> Codechef (000-1100)
            </p>
          </div>
          {/* Arrow */}
          <svg
            className="w-8 h-8 absolute -bottom-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Second Year */}
        <div className="flex flex-col items-center relative">
          <div className="bg-gray-800 shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-500 text-xl">Second Year</span>
              <span className="text-gray-400 text-lg">Completed 30 credits</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              <b className="text-gray-300">Courses:</b> Advanced Data Structures, DBMS, Computer Graphics, DSGT (Discrete Structure & Graph Theory), Full Stack Development
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <b className="text-gray-300">Coding Platforms:</b> Codeforces (900-1000), GeeksforGeeks, Leetcode, Codechef (1200-1300)
            </p>
          </div>
          {/* Arrow */}
          <svg
            className="w-8 h-8 absolute -bottom-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Certifications Section */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 animate-fadeInUp">
        Certifications
      </h2>
      <div className="certifications grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-6xl mx-auto">
        {[
          {
            img: "./Images/Certificates/apibootcamp.png",
            caption: "API Bootcamp: Summer Edition - Sponsored by Postman",
          },
          {
            img: "./Images/Certificates/codesoft.png",
            caption: "Web Development Internship at CODESOFT",
          },
          {
            img: "./Images/Certificates/filpcartgrid06.jpg",
            caption: "Participated in Filpcart Grid 06 Hackathon",
          },
          {
            img: "./Images/Certificates/CloudVirtualInternship.png",
            caption: "AWS CLOUD Cloud Virtual Internship [Foundation]",
          },
          {
            img: "./Images/Certificates/python1st.png",
            caption: "Programming Essentials in Python [Fundamentals in Python]",
          },
          {
            img: "./Images/Certificates/functionalblog.png",
            caption: "Super30 [6 weeks] Project - Functional Blog",
          },
          {
            img: "./Images/Certificates/datathon.png",
            caption: "Datathon 24 Competition under Equilibrium 2024 [National Level Event]",
          },
        ].map((cert, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={cert.img}
              alt={cert.caption}
              className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-gray-400">{cert.caption}</p>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 animate-fadeInUp">
        Badges
      </h2>
      <div className="badges grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-6xl mx-auto">
        {[
          {
            img: "./Images/Badges/awsfoundationbadge.png",
            caption: "AWS Cloud Foundation Badge",
          },
          {
            img: "./Images/Badges/awsarcbadge.png",
            caption: "AWS Cloud Architecting Badge",
          },
          {
            img: "./Images/Badges/Leetcode50days.png",
            caption: "Leetcode 50 Problems Badge",
          },
          {
            img: "./Images/Badges/leetcode100badge.png",
            caption: "Leetcode 100 Problems Badge",
          },
          {
            img: "./Images/Badges/4apr.gif",
            caption: "Leetcode 100 Problems Badge",
          },
        ].map((badge, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={badge.img}
              alt={badge.caption}
              className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-gray-400">{badge.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;