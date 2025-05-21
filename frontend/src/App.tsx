import { useState,useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import Jumbotron from './components/Jumbotron';
import AboutSection from './components/About';
import Features from './components/Features';
import Testonials from './components/Testimonials';
import AutoScrollGallery from './components/AutoScrollGallery';
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
          <Jumbotron />
          <AutoScrollGallery />
          <AboutSection />
	  <Features />
	  <Footer />
    </>
  );
}

export default App;

