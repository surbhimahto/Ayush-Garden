import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ setShowLogin, setShowSignup, setShowQuiz }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Optional Branding */}
        <div className="text-xl font-bold text-gray-800">MyBrand</div>

        {/* Centered Navbar Links and Search Box */}
        <div className="flex items-center mx-auto space-x-8">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold text-lg' : 'text-gray-700 hover:text-blue-600 transition text-lg'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold text-lg' : 'text-gray-700 hover:text-blue-600 transition text-lg'}>
            About
          </NavLink>
          <NavLink to="/plants" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold text-lg' : 'text-gray-700 hover:text-blue-600 transition text-lg'}>
            Plants
          </NavLink>
          <NavLink to="/bookmark" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold text-lg' : 'text-gray-700 hover:text-blue-600 transition text-lg'}>
            Bookmark
          </NavLink>

          {/* Search Box */}
          <div className="relative flex-shrink-0">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-200 shadow-md"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
        </div>

        {/* Right-aligned Buttons */}
        <div className="flex space-x-4">
          <button onClick={() => setShowQuiz(true)} className="text-gray-700 hover:text-blue-600 font-medium transition">Quiz</button>
          <button onClick={() => setShowLogin(true)} className="text-gray-700 hover:text-blue-600 font-medium transition">Login</button>
          <button onClick={() => setShowSignup(true)} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
