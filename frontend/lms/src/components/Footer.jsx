import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-orange-500 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">LMS</h3>
          <p className=" text-black text-sm">
            Empowering tech education through industry aligned training and
            real world projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-black flex flex-col">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About Us
              </Link>
              <Link to="/courses" className="hover:text-gray-400">
                Courses
              </Link>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-black flex flex-col">
              <Link to="#" className="hover:text-gray-400">
                FAQ
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Internships
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Project Repository
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Job Board
              </Link>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm text-black">Email: info@bytebuilders.com</p>
          <p className="text-sm text-black">Phone: +977-9876543210</p>
          <div className="flex space-x-4 mt-4">
            <Link to="#" className="hover:text-blue-500">
              Facebook
            </Link>
            <Link to="#" className="hover:text-blue-400">
              Twitter
            </Link>
            <Link to="#" className="hover:text-pink-500">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; 2025 LMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
