import { useEffect, useState } from 'react';

const Navbar = () => {

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 transition-all duration-300 bg-gray-50 border-black dark:bg-zinc-900 dark:border-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-2xl font-semibold whitespace-nowrap px-4 py-1 bg-black text-white dark:bg-white dark:text-black">
            TRACKIT
          </span>
        </a>

        {/* links */}
<ul className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
  {["Home", "Services", "Pricing", "Contact"].map((label, i) => (
    <li key={i}>
      <a
        href="#"
        className="text-black dark:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
      >
        {label}
      </a>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;

