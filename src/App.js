

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


import Services from './Pages/Services';

import Down from './Pages/Down';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RoleSelectionPage from "./Pages/RoleSelectionPage";



function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/register', '/role'].includes(location.pathname);

  return (
    <div className="bg-gray-100 min-h-screen">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Down />} />
        <Route path="/role" element={<RoleSelectionPage />} />
        <Route path="/services" element={<Services />} />
        
        {/* Protected Routes */}
   
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
