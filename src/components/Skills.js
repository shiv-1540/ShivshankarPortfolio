import React from 'react';

function Skills() {
  return (
    <div id="skills" className="bg-gray-100 py-16">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
  
  {/* Skills Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* Web Development */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">Web Development</h3>
      <ol className="list-none text-lg text-gray-700 space-y-6">
        <li className="flex items-center space-x-4">
          <img src="./Images/webdev/js.webp" alt="JavaScript" className="w-8 h-8" />
          <span>JavaScript</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/webdev/mongodb.png" alt="MongoDB" className="w-8 h-8" />
          <span>MongoDB</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/webdev/express.png" alt="ExpressJS" className="w-8 h-8" />
          <span>ExpressJS</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/webdev/reactjs.svg" alt="ReactJS" className="w-8 h-8" />
          <span>ReactJS</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/webdev/nodejs.webp" alt="NodeJS" className="w-8 h-8" />
          <span>NodeJS</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/webdev/sql.jpg" alt="SQL" className="w-8 h-8" />
          <span>SQL</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </li>
      </ol>
    </div>

    {/* Programming Languages */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">Programming Languages</h3>
      <ol className="list-none text-lg text-gray-700 space-y-6">
        <li className="flex items-center space-x-4">
          <img src="./Images/Lang/c.png" alt="C" className="w-8 h-8" />
          <span>C</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/Lang/cpp.jpg" alt="C++" className="w-8 h-8" />
          <span>C++</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/Lang/python.png" alt="Python" className="w-8 h-8" />
          <span>Python</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img src="./Images/Lang/java.png" alt="Java" className="w-8 h-8" />
          <span>Java</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </li>
      </ol>
    </div>

    {/* Problem Solving Skills */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">Problem Solver</h3>
      <table className="min-w-full text-left text-gray-700">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200">Platform</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Questions Solved</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition duration-200">
            <td className="py-2 px-4">Codeforces</td>
            <td className="py-2 px-4">150+</td>
            <td className="py-2 px-4">925</td>
          </tr>
          <tr className="hover:bg-gray-100 transition duration-200">
            <td className="py-2 px-4">CodeChef</td>
            <td className="py-2 px-4">90+</td>
            <td className="py-2 px-4">1360</td>
          </tr>
          <tr className="hover:bg-gray-100 transition duration-200">
            <td className="py-2 px-4">LeetCode</td>
            <td className="py-2 px-4">150+</td>
            <td className="py-2 px-4">1426</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>

  );
}

export default Skills;
