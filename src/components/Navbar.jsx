import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setShowLogin, setShowSignup, setShowQuiz }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600 transition'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600 transition'}>
            About
          </NavLink>
          <NavLink to="/plants" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600 transition'}>
            Plants
          </NavLink>
          <NavLink to="/bookmark" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600 transition'}>
            Bookmark
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => setShowQuiz(true)} className="text-gray-700 hover:text-blue-600 font-medium transition">Quiz</button>
          <button onClick={() => setShowLogin(true)} className="text-gray-700 hover:text-blue-600 font-medium transition">Login</button>
          <button onClick={() => setShowSignup(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;