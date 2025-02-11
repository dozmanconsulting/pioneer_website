import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="bg-[#041322] text-gray-300">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 mb-6">
            CloudPioneer
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link to="/" className="text-sm hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/solutions" className="text-sm hover:text-white transition-colors duration-200">
              Solutions
            </Link>
            <Link to="/pricing" className="text-sm hover:text-white transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <Link to="/contact" className="text-sm hover:text-white transition-colors duration-200">
              Contact
            </Link>
            {!user ? (
              <>
                <Link to="/login" className="text-sm hover:text-white transition-colors duration-200">
                  Login
                </Link>
                <Link to="/signup" className="text-sm hover:text-white transition-colors duration-200">
                  Sign Up
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className="text-sm hover:text-white transition-colors duration-200">
                Dashboard
              </Link>
            )}
          </div>

          <p className="text-sm"> 2025 CloudPioneer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
