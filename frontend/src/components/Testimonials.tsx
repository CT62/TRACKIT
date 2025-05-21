const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 dark:bg-zinc-800 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <p className="text-gray-800 dark:text-white">
              “TRACKIT made tracking calories way less annoying. Fast, easy, and clean.”
            </p>
            <footer className="mt-4 text-gray-600 dark:text-gray-400">— Alex J.</footer>
          </blockquote>
          <blockquote className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <p className="text-gray-800 dark:text-white">
              “Perfect for cutting. The analytics help me stay on track every week.”
            </p>
            <footer className="mt-4 text-gray-600 dark:text-gray-400">— Maya K.</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

