import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 33);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 text-black ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      {/* Logo */}
      <div className="text-4xl text-amber-800">
        <Link to="/">Be Real Estates</Link>
      </div>

      {/* Navbar Items */}
      <ul className="hidden md:flex space-x-6 relative">
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Blog</Link></li>

        {/* Features Dropdown */}
       

        <li><Link to="/onsale">On Sale</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li><Link to="/clients">Agent</Link></li>
        <li 
          className="relative group"
          onMouseEnter={() => setShowFeaturesDropdown(true)}
          onMouseLeave={() => setShowFeaturesDropdown(false)}
        >
          <button className="focus:outline-none">
          Seller Info ▼
          </button>

          {showFeaturesDropdown && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/features">Seller 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/features">Seller 2</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/features">Seller 3</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Contact Button */}
      <div className="hidden md:flex">
        <button className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 mx-2">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
