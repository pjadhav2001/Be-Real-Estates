import React from "react";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-amber-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <div className="text-xl text-white font-bold hover:text-gray-300 cursor-pointer">
              Be Real Estates
            </div>
          </div>
          
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">About Us</h3>
            <p className="text-white mb-4">
              We provide the best real estate services, helping you find your dream home.            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="text-white">
              <li className="mb-2">
                <Link to="home" className="hover:text-gray-300">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="about" className="hover:text-gray-300">About-us</Link>
              </li>
              <li className="mb-2">
                <Link to="clients" className="hover:text-gray-300">Agents</Link>
              </li>
              <li className="mb-2">
                <Link to="onsale" className="hover:text-gray-300">Onsale</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Contact-info</h3>
            <ul className="text-white">
              <li className="mb-2">Email: berealestate@.com</li>
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li className="mb-2">Mob No.:9075371671</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Social Links</h3>
            <ul className="text-white">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="text-base text-white">&copy; {new Date().getFullYear()} Be Real Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
