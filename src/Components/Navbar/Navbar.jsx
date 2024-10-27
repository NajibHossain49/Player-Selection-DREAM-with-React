import { BsCoin } from "react-icons/bs";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
const Navbar = ({ coinCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between items-center p-4 w-full">
      {/* Left Side Logo */}
      <div className="flex items-center lg:ml-20">
        <img src={logo} alt="Logo" className="h-12 w-12" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-2xl text-gray-500" />
        </button>
      </div>

      {/* Right Side Links and Coin Section (hidden on small screens) */}
      <div
        className={`flex items-center space-x-4 ${
          isOpen ? "block" : "hidden"
        } md:flex lg:mr-20`}
      >
        <a href="/home" className="text-gray-500">
          Home
        </a>
        <a href="/fixture" className="text-gray-500">
          Fixture
        </a>
        <a href="/teams" className="text-gray-500">
          Teams
        </a>
        <a href="/schedules" className="text-gray-500">
          Schedules
        </a>

        {/* Coin Section */}
        <button className="flex items-center space-x-2 border border-gray-500 px-3 py-2 rounded-md hover:bg-gray-100 md:px-4 md:py-2">
          <span className="text-gray-700 font-semibold text-sm md:text-base">
            {coinCount} Coin
          </span>
          <BsCoin className="text-lg md:text-xl text-yellow-400" />
        </button>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  coinCount: PropTypes.func.isRequired,
};

export default Navbar;
