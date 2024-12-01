

// src/App.js
import React , {useState , useEffect , CSSProperties}from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Services from './Pages/Services';

import Down from './Pages/Down';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RoleSelectionPage from "./Pages/RoleSelectionPage";
import ScaleLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#3A3126",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
 
};


function AppContent() {
  const [loading, setLoading] = useState(false);

 useEffect(() => {
   setLoading(true);
   setTimeout(() => {
     setLoading(false);
   }, 2000)

 }, []);

  return (
    <div className=" bg-gray-100 min-h-screen">

        {
        loading ?

        <ScaleLoader


        color={'#36d7b7'}
        display="flex"
        cssOverride={override}
        size={150}
        loading={loading}
      />

        :

      <div>
         { <Header />}
        <Routes>
          <Route path="/" element={<Down />} />
          <Route path="/role" element={<RoleSelectionPage />} />
          <Route path="/services" element={<Services />} />
          
          {/* Protected Routes */}
     
        </Routes>
        { <Footer />}
      </div>
      }
     
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
