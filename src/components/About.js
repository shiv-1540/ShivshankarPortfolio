import React from 'react';

function About() {
  return (
    <div id="aboutme" className="min-h-screen bg-gray-100 py-16 text-gray-800">
    <h2 className="text-4xl font-extrabold text-center mb-12 animate-fadeInUp">
      About Me
    </h2>
    <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center mx-auto px-4 gap-8 md:px-8 max-w-6xl">
      <div className="mb-8 md:mb-0 md:mr-12 flex-shrink-0">
         <img
          className="mt-6 rounded-full shadow-lg border-4 border-red-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          src="./Images/meportfolio.jpg"
          alt="Me"
          style={{ width: '260px', height: '340px' }}
          />
    
      </div>
      <div className='mt-6'>
       <p className="text-lg leading-relaxed text-center md:text-left max-w-2xl animate-fadeInUp delay-200">
          I come from a farming background and managed to pursue my education despite financial challenges. After completing my 12th grade, I took the JEE exam and made it to college, but due to financial constraints, I joined a lower-tier college through the TFWS (Tuition Fee Waiver Scheme).<br/><br/>

          Starting from my first year, I dived into coding and explored various programming languages and tools. My journey in college has been marked by hard work and dedication, and I’ve gained experience in web development ,AIML & Proble solving on different platforms, working on several projects using Git, GitHub, and other development tools.<br/><br/>

          My goal is to continue growing in technology, using my skills to make a difference and improve my community. My journey shows that with determination and hard work, it's possible to overcome obstacles and achieve success.
       </p>
      </div>
     
    </div>
  </div>
  
  );
}

export default About;
