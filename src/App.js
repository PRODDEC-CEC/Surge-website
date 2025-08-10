import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/homePage';
import EventsPage from './Pages/allEvents';
import FacultiesPage from './Pages/facultiesPage';
 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/faculties" element={<FacultiesPage/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
