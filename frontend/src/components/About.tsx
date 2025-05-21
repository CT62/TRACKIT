import { BoltIcon, ChartBarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';

const AboutSection = () => {
	return (
		<section className="py-24 px-6 bg-white dark:bg-zinc-900 text-center">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
					Why TRACKIT?
				</h2>
				<p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
					TRACKIT is your modern companion for tracking food, calories, and progress. Designed for simplicity and speed, it helps you stay on top of your nutrition goals with ease—whether you're cutting, bulking, or maintaining.
				</p>

				<div className="grid md:grid-cols-3 gap-8 text-left">
					<div className="flex items-start gap-4">
						<BoltIcon className="w-6 h-6 text-black dark:text-white mt-1" />
						<div>
							<h3 className="text-xl font-semibold text-black dark:text-white mb-1">Fast & Convenient</h3>
							<p className="text-gray-600 dark:text-gray-400">No clutter. Just the essentials for quick logging and tracking.</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<ChartBarIcon className="w-6 h-6 text-black dark:text-white mt-1" />
						<div>
							<h3 className="text-xl font-semibold text-black dark:text-white mb-1">Smart Analytics</h3>
							<p className="text-gray-600 dark:text-gray-400">Visualize your intake trends and hit your targets with precision.</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<FaceSmileIcon className="w-6 h-6 text-black dark:text-white mt-1" />
						<div>
							<h3 className="text-xl font-semibold text-black dark:text-white mb-1">Eat better and hit your macro goals</h3>
							<p className="text-gray-600 dark:text-gray-400">Learn which foods help you reach your goals.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

