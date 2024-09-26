import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin, setShowSignup, setShowQuiz }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/Home" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/plants" className="text-gray-700 hover:text-blue-600 font-medium">Plants</Link>
          <Link to="/bookmark" className="text-gray-700 hover:text-blue-600 font-medium">Bookmark</Link>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowQuiz(true)}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Quiz
          </button>
          <button onClick={() => setShowLogin(true)} className="text-gray-700 hover:text-blue-600 font-medium">Login</button>
          <button onClick={() => setShowSignup(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
