import React from 'react';

function Contact() {
  return (
    <div id="contact" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        If you have any doubt, don't hesitate to connect with me
      </p>
      <div className="max-w-lg mx-auto px-4">
        <form 
          action="https://formsubmit.co/shivghyar538@gmail.com" 
          method="POST" 
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
