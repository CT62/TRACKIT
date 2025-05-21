'use client';

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 dark:bg-black">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto gap-12">
        
        <div className="text-center lg:text-left lg:w-1/2 mb-16 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Available on Android
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">
            TRACKIT is built to be fast and convenient to use, using the Android app allows you to track on the go.
            Download now and take control of your progress.
          </p>
        </div>

        <div className="flex justify-center lg:w-1/2">
          <img 
            src="/mockup.png" 
            alt="TRACKIT app mockup" 
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

