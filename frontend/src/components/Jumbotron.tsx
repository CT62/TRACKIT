import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Jumbotron = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem('access');
    if (token) {
      navigate('/home');
    } else {
      navigate('/signup');
    }
  };
 
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-24 bg-gray-50 dark:bg-black text-center px-4">
      <div className="relative">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to TRACKIT
        </h1>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
        The easiest way to track your calories on the go.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button 
          className="px-6 py-3 bg-black text-white dark:bg-black dark:text-white border-2 border-white rounded-full transition-all duration-300 flex items-center gap-2"
	  onClick={handleGetStarted}
        >
          Get Started
          <ArrowRightIcon className="w-5 h-5" />
	  </button>
      </div>
    </div>
  );
};

export default Jumbotron;
