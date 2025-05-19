import { motion } from 'framer-motion';
import { useMemo } from 'react';

const images = [
  'food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg',
  'food6.jpg', 'food7.jpg', 'food8.jpg', 'food9.jpg', 'food10.jpg',
  'food11.jpg', 'food12.jpg', 'food13.jpg', 'food14.jpg', 'food15.jpg',
  'food16.jpg', 'food17.jpg', 'food18.jpg', 'food19.jpg', 'food20.jpg',
  'food21.jpg'
];

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const AutoScrollGallery = () => {
  const shuffledImages = useMemo(() => shuffleArray(images), []);

  return (
    <div className="overflow-hidden w-full bg-white dark:bg-black py-4">
      <div
        className="flex gap-4"
      >
        {[...shuffledImages, ...shuffledImages].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Food image ${i}`}
            className="h-48 w-auto rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollGallery;

