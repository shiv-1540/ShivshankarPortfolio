import React, { useRef } from 'react';

const Experience = () => {
  // Reference to the scroll container
  const scrollRef = useRef(null);

  // Scroll left and right
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= current.offsetWidth; // Scroll left
    } else {
      current.scrollLeft += current.offsetWidth; // Scroll right
    }
  };

  return (
    <div id="exp" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Experience</h2>
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div 
          ref={scrollRef} 
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Ensure scrollbar is hidden in all browsers
        >
          {/* Card 1 */}
          <div className="flex-shrink-0 w-[45%] bg-white rounded-lg shadow-lg p-6">
            <img src="./Images/Knoweldege Network.jpg" 
                 alt="Knowledge network" 
                 className="w-full object-cover rounded-t-lg mb-4" 
            />
            <p className="text-lg text-center text-gray-700">1st Yr Student C++ Guide Event</p>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-[45%] bg-white rounded-lg shadow-lg p-6">
            <img src="./Images/Tech Titan.jpg" 
                 alt="Hackathon" 
                 className="w-full  object-cover rounded-t-lg mb-4" 
            />
            <p className="text-lg text-center text-gray-700">Participated in Hackathon 2023</p>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-[45%] bg-white rounded-lg shadow-lg p-6">
            <img src="./Images/Experience/mozilla_me1.jpg" 
                 alt="Mozilla Club" 
                 className="w-full object-cover rounded-t-lg mb-4" 
            />
            <p className="text-lg text-center text-gray-700">Guiding & Showcasing AIML Project Equilibirium 2023[Mozilla Club]</p>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 w-[45%] bg-white rounded-lg shadow-lg p-6">
            <img src="./Images/Experience/sih2024.png" 
                 alt="SIH 2024" 
                 className="w-full object-cover rounded-t-lg mb-4" 
            />
            <p className="text-lg text-center text-gray-700">Participated in SIH 2024[Team Sudharshana]</p>
          </div>

          {/* Add more cards as needed */}
        </div>

        {/* Previous Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          &lt;
        </button>

        {/* Next Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Experience;
