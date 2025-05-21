import { motion } from 'framer-motion';

const images = [
  'food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg',
  'food6.jpg', 'food7.jpg', 'food8.jpg', 'food9.jpg', 'food10.jpg',
  'food11.jpg', 'food12.jpg',
];

const AutoScrollGallery = () => {
  return (
    <div className="overflow-hidden w-full bg-white dark:bg-black py-4">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 100,
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Food image ${i}`}
            className="h-48 w-auto rounded-lg object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollGallery;

