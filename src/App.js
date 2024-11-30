// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TeacherList from './components/TeacherList';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import RegistrationPage from './Pages/RegistrationPage';
// import Services from './Pages/Services';  // Assuming you have a Services component for the Services page
// import TeacherProfile from './Pages/TeacherProfile';
// import Down from './Pages/Down';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import RoleSelectionPage from "./Pages/RoleSelectionPage"
// import StudentPage from "./Pages/StudentPage"

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Down />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<RegistrationPage />} />
//           <Route path="/role" element={<RoleSelectionPage />} />
//           <Route path="/teacherprofile" element={<TeacherProfile />} />
//           <Route path="/studentprofile" element={<StudentPage />} />
//           <Route path="/services" element={<Services />} /> {/* Route for Services page */}
//           <Route path="/teachers" element={<TeacherList />} />

//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import TeacherList from './components/TeacherList';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import RegistrationPage from './Pages/RegistrationPage';
// import Services from './Pages/Services'; 

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginToggle = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">
//         {isLoggedIn && <Header />} {/* Render Header if logged in */}

//         <Routes>
//           <Route
//             path="/"
//             element={
//               isLoggedIn ? <TeacherList /> : <Navigate to="/login" />
//             }
//           />

//           <Route
//             path="/login"
//             element={
//               isLoggedIn ? <Navigate to="/" /> : <Login />
//             }
//           />

//           <Route
//             path="/register"
//             element={
//               isLoggedIn ? <Navigate to="/" /> : <RegistrationPage />
//             }
//           />

//                     {/* Services Route */}
//                     <Route path="/services" element={isLoggedIn ? <Services /> : <Navigate to="/login" />} />
//         </Routes>

//         {isLoggedIn && <Footer />}

//         <button
//           onClick={handleLoginToggle}
//           className="fixed bottom-4 right-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
//         >
//           {isLoggedIn ? 'تسجيل خروج' : 'تسجيل الدخول'}
//         </button>
//       </div>
//     </Router>
//   );
// }

// export default App;









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
