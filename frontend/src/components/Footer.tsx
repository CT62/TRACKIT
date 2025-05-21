'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 border-t border-gray-300 dark:border-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 text-center lg:text-left">

        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">TRACKIT</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            TRACKIT. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Privacy Policy</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Terms</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Support</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

