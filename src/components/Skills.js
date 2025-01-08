import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-16 text-gray-100">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Programming Languages */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Programming Languages</h3>
          <div className="space-y-4">
            {[
              { name: "C++", logo: "./Images/Lang/cpp.jpg", proficiency: "90%" },
              { name: "Java", logo: "./Images/Lang/java.png", proficiency: "85%" },
              { name: "Python", logo: "./Images/Lang/python.png", proficiency: "80%" },
              { name: "C", logo: "./Images/Lang/c.png", proficiency: "90%" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                <span className="text-lg text-gray-300">{skill.name}</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Stack Development */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Full-Stack Development</h3>
          <div className="space-y-4">
            {[
              { name: "JavaScript", logo: "./Images/webdev/js.webp", proficiency: "85%" },
              { name: "ReactJS", logo: "./Images/webdev/reactjs.svg", proficiency: "80%" },
              { name: "NodeJS", logo: "./Images/webdev/nodejs.webp", proficiency: "75%" },
              { name: "ExpressJS", logo: "./Images/webdev/express.png", proficiency: "70%" },
              { name: "MongoDB", logo: "./Images/webdev/mongodb.png", proficiency: "75%" },
              { name: "MySQL", logo: "./Images/webdev/sql.jpg", proficiency: "70%" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                <span className="text-lg text-gray-300">{skill.name}</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Solving */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Problem Solving</h3>
          <div className="space-y-4">
            {[
              { platform: "LeetCode", solved: "150+", rating: "1426" },
              { platform: "CodeChef", solved: "90+", rating: "1360" },
              { platform: "Codeforces", solved: "150+", rating: "925" },
              { platform: "GeeksforGeeks", solved: "100+", rating: "N/A" },
            ].map((skill, index) => (
              <div key={index} className="flex justify-between items-center text-gray-300">
                <span className="text-lg">{skill.platform}</span>
                <span className="text-lg">{skill.solved}</span>
                <span className="text-lg">{skill.rating}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Learning */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Machine Learning</h3>
          <div className="space-y-4">
            {[
              { name: "Python", logo: "./Images/Lang/python.png", proficiency: "80%" },
              { name: "TensorFlow", logo: "./Images/ml/tensorflow.png", proficiency: "70%" },
              { name: "Scikit-Learn", logo: "./Images/ml/scikit-learn.png", proficiency: "75%" },
              { name: "Pandas", logo: "./Images/ml/pandas.png", proficiency: "80%" },
              { name: "NumPy", logo: "./Images/ml/numpy.png", proficiency: "85%" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                <span className="text-lg text-gray-300">{skill.name}</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Computing */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Cloud Computing</h3>
          <div className="space-y-4">
            {[
              { name: "AWS", logo: "./Images/cloud/aws.png", proficiency: "70%" },
              { name: "Google Cloud", logo: "./Images/cloud/gcp.png", proficiency: "65%" },
              { name: "Docker", logo: "./Images/cloud/docker.png", proficiency: "75%" },
              { name: "Kubernetes", logo: "./Images/cloud/kubernetes.png", proficiency: "60%" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                <span className="text-lg text-gray-300">{skill.name}</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Tools & Platforms</h3>
          <div className="space-y-4">
            {[
              { name: "Git", logo: "./Images/tools/git.png", proficiency: "85%" },
              { name: "GitHub", logo: "./Images/tools/github.png", proficiency: "90%" },
              { name: "VS Code", logo: "./Images/tools/vscode.png", proficiency: "95%" },
              { name: "Postman", logo: "./Images/tools/postman.png", proficiency: "80%" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                <span className="text-lg text-gray-300">{skill.name}</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;