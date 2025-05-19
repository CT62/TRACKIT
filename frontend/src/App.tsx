import { motion } from 'framer-motion';
import Jumbotron from './components/Jumbotron.tsx';
import AboutSection from './components/About.tsx';
import { useNavigate } from 'react-router-dom';
import AutoScrollGallery from './components/AutoScrollGallery.tsx';
import './index.css'; // TailwindCSS assumed configured

export default function App() {
 return (
	  <>
      <Jumbotron />
      <AutoScrollGallery />
      <AboutSection />

	  </>
  );
}
