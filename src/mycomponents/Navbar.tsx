import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-lg fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-bold text-gray-800'>
              <a href='/'>MatCla</a>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                to='/leaderboard'
                className='text-gray-600 hover:text-matcha-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Leaderboard
              </Link>

              <Link
                to='/profile'
                className='text-gray-600 hover:text-matcha-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200'>
            <Link
              to='/leaderboard'
              className='text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              to='/profile'
              className='text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
