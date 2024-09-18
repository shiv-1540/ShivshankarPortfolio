import React from 'react';

function Education() {
  return (
    <div className="education bg-gray-100 py-16">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">EDUCATION</h2>

  <div className="edu max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
    {/* 10th [SSC] */}
    <div className="flex flex-col items-center relative">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-800 text-xl">10th [SSC]</span>
          <span className="text-gray-600 text-lg">93.60%</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">Sukhdevanand Vidyalya Bhandegaon, Hingoli</p>
      </div>
      {/* Arrow */}
      <svg className="w-8 h-8 absolute -bottom-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* 12th [HSC] */}
    <div className="flex flex-col items-center relative">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-800 text-xl">12th [HSC]</span>
          <span className="text-gray-600 text-lg">88.17%</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">Sukhdevanand Junior College Bhandegaon, Hingoli</p>
      </div>
      {/* Arrow */}
      <svg className="w-8 h-8 absolute -bottom-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* BTech */}
    <div className="flex flex-col items-center relative">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-800 text-xl">Pursuing BTech in Computer Science</span>
          <span className="text-gray-600 text-lg">MIT Academy of Engineering, Pune</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">Expected Graduation: 2026</p>
      </div>
      {/* Arrow */}
      <svg className="w-8 h-8 absolute -bottom-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* First Year */}
    <div className="flex flex-col items-center relative">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-800 text-xl">First Year</span>
          <span className="text-gray-600 text-lg">Completed 30 credits</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          <b className="text-gray-800">Courses:</b> Programming Fundamentals (C, C++), Data Structures, Web Development (Basics)
        </p>
        <p className="text-gray-500 text-sm mt-2">
          <b className="text-gray-800">Coding Platforms:</b> Codechef (000-1100)
        </p>
      </div>
      {/* Arrow */}
      <svg className="w-8 h-8 absolute -bottom-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* Second Year */}
    <div className="flex flex-col items-center relative">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8 w-full hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-800 text-xl">Second Year</span>
          <span className="text-gray-600 text-lg">Completed 30 credits</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          <b className="text-gray-800">Courses:</b> Advanced Data Structures, DBMS, Computer Graphics, DSGT (Discrete Structure & Graph Theory), Full Stack Development
        </p>
        <p className="text-gray-500 text-sm mt-2">
          <b className="text-gray-800">Coding Platforms:</b> Codeforces (900-1000), GeeksforGeeks, Leetcode, Codechef (1200-1300)
        </p>
      </div>
      {/* Arrow */}
      <svg className="w-8 h-8 absolute -bottom-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

  {/* Certifications Section */}
  <h2 className="font-bold text-3xl mt-10 text-center text-gray-800">Certifications</h2>

  <div className="certifications grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-5xl mx-auto">
    {/* Certificate 1 */}
    <div className="flex flex-col items-center">
      <img src="./Images/Certificates/apibootcamp.png" alt="API Bootcamp" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
      <caption className="text-center mt-4 text-gray-700">API Bootcamp: Summer Edition - Sponsored by Postman</caption>
    </div>

    {/* Certificate 2 */}
    <div className="flex flex-col items-center">
      <img src="./Images/Certificates/codesoft.png" alt="Web Development Internship at CODESOFT" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
      <caption className="text-center mt-4 text-gray-700">Web Development Internship at CODESOFT</caption>
    </div>

    {/* Certificate 3 */}
    <div className="flex flex-col items-center">
      <img src="./Images/Certificates/filpcartgrid06.jpg" alt="Filpcart Grid 06 Hackathon" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
      <caption className="text-center mt-4 text-gray-700">Participated in Filpcart Grid 06 Hackathon</caption>
    </div>

     <div className="flex flex-col items-center">
       <img src="./Images/Certificates/CloudVirtualInternship.png" alt="apibootcamp" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"/>
       <caption> AWS CLOUD Cloud Virtual Internship[Foundation]</caption>
     </div>

     <div className="flex flex-col items-center">
       <img src="./Images/Certificates/python1st.png" alt="apibootcamp" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"/>
       <caption>Programming Essential in Python [Fundamentals in Python]</caption>
     </div>
     <div className="flex flex-col items-center">
       <img src="./Images/Certificates/functionalblog.png" alt="apibootcamp" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"/>
       <caption> Super30 [6weeks]Project -Functional Blog </caption>
     </div>
     <div className="flex flex-col items-center">
        <img src="./Images/Certificates/datathon.png" alt="apibootcamp" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"/>
        <caption> Datathon 24 Competition under Equilibrium 2024 [National Level Event] </caption>
    </div>
  </div>
  <hr className='font-bold'/>

  <h2 className="font-bold text-3xl mt-10 text-center text-gray-800">Badges</h2>
  <div className="badges grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-5xl mx-auto">
        {/* Badge 1 */}
        <div className="flex flex-col items-center border-5 border-gray-900">
          <img src="./Images/Badges/awsfoundationbadge.png" alt="" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 " />
          <caption className="text-center mt-4 text-black-900 border-2 border-black-500">AWS Cloud Foundation Badge</caption>
        </div>
          {/* Badge 2 */}
       <div className="flex flex-col items-center border-5 border-gray-900">
         <img src="./Images/Badges/awsarcbadge.png" alt="" className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105  transition-transform duration-300 " />
         <caption className="text-center mt-4 text-black-900 border-2 border-black-500">AWS Cloud Architecuring Badge</caption>
       </div>
         {/* Badge 3 */}
         <div className="flex flex-col items-center border-5 border-gray-900">
         <img src="./Images/Badges/Leetcode50days.png" alt="" className="w- h-56 object-cover rounded-lg shadow-lg hover:scale-105  transition-transform duration-300 " />
         <caption className="text-center mt-4 text-black-900 border-2 border-black-500">Leetcode 50 problems Badge</caption>
       </div>
          {/* Badge 4 */}
          <div className="flex flex-col items-center border-5 border-gray-900">
          <img src="./Images/Badges/leetcode100badge.png" alt="" className="w- h-56 object-cover rounded-lg shadow-lg hover:scale-105  transition-transform duration-300 " />
          <caption className="text-center mt-4 text-black-900 border-2 border-black-500">Leetcode 100 problems Badge</caption>
        </div>
          {/* Badge 5*/}
          <div className="flex flex-col items-center border-5 border-gray-900">
          <img src="./Images/Badges/4apr.gif" alt="" className="w- h-56 object-cover rounded-lg shadow-lg hover:scale-105  transition-transform duration-300 " />
          <caption className="text-center mt-4 text-black-900 border-2 border-black-500">Leetcode 100 problems Badge</caption>
        </div>
    </div>

</div>

  );
}

export default Education;
