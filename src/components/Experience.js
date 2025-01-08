import React, { useRef, useState, useEffect } from 'react';

const Experience = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Scroll left and right
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -current.offsetWidth, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: current.offsetWidth, behavior: 'smooth' });
    }
  };

  // Update scroll position state
  const updateScrollState = () => {
    const { current } = scrollRef;
    if (current) {
      setIsAtStart(current.scrollLeft === 0);
      setIsAtEnd(current.scrollLeft + current.offsetWidth >= current.scrollWidth);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener('scroll', updateScrollState);
      return () => current.removeEventListener('scroll', updateScrollState);
    }
  }, []);

  return (
    <section id="experience" className="py-16 bg-gray-900 text-gray-100">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">
        My Experience
      </h2>

      {/* Scrollable Cards Container */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Previous Button */}
        <button
          onClick={() => scroll('left')}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition ${
            isAtStart ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isAtStart}
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={() => scroll('right')}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition ${
            isAtEnd ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isAtEnd}
        >
          &gt;
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Card 1 */}
          <div className="flex-shrink-0 w-[90%] md:w-[45%] bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
            <img
              src="./Images/Knoweldege Network.jpg"
              alt="Knowledge Network"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <p className="text-lg text-center text-gray-300">
              1st Yr Student C++ Guide Event
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-[90%] md:w-[45%] bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
            <img
              src="./Images/Tech Titan.jpg"
              alt="Hackathon"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <p className="text-lg text-center text-gray-300">
              Participated in Hackathon 2023
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-[90%] md:w-[45%] bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
            <img
              src="./Images/Experience/mozilla_me1.jpg"
              alt="Mozilla Club"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <p className="text-lg text-center text-gray-300">
              Guiding & Showcasing AIML Project Equilibrium 2023 [Mozilla Club]
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 w-[90%] md:w-[45%] bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
            <img
              src="./Images/Experience/sih2024.png"
              alt="SIH 2024"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <p className="text-lg text-center text-gray-300">
              Participated in SIH 2024 [Team Sudharshana]
            </p>
          </div>

          {/* Add more cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;