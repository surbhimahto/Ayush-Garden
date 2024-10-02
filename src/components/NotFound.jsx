import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>
        <img
          src="https://via.placeholder.com/150"
          alt="Not Found Illustration"
          className="my-6 mx-auto"
        />
        <Link
          to="/home"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
