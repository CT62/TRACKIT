import { useEffect, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [token, setToken] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  let navLinks = [];

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    setToken(accessToken);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.getElementById('main-nav');
      if (navElement && !navElement.contains(event.target)) {
        setMobileMenuOpen(false);
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen, accountDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('access');
    setToken(null);
  };

  
  if(!token) {
      navLinks = ["Home", "Login", "Sign up"];
  }else{
      navLinks = ["Home", "Services", "Pricing", "Account"];
  }


  return (
  <div className="pb-4">
    <nav id="main-nav" className="fixed top-0 z-50 w-full border-b-2 transition-all duration-300 bg-gray-50 border-black dark:bg-zinc-900 dark:border-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3 relative">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-semibold whitespace-nowrap px-4 py-1 bg-black text-white dark:bg-white dark:text-black">
            TRACKIT
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((label, i) => (
            <li key={i}>
              <a
                href={`/${label.toLowerCase().replace(" ", "")}`}
                className="text-black dark:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-black dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          {token && (
            <div className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <UserCircleIcon className="w-9 h-9 text-black dark:text-white cursor-pointer" />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                  <a
                    href="/account"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    View Profile
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-zinc-900 shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((label, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="block py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 px-3 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
