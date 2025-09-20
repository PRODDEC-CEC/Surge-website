import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import HomePage from './Pages/homePage';
import EventsPage from './Pages/allEvents';
import FacultiesPage from './Pages/facultiesPage';
import LearnMorePage from './Sections/learnMoreSection';
import PageNotFound from './Pages/page_not_found';
 

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/faculties" element={<FacultiesPage/>} />
        <Route path="/learnMore" element={<LearnMorePage/>} />
        <Route path="*" element={<PageNotFound/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
