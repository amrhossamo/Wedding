// src/components/Header.js
import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <header className="flex justify-between items-center p-4 bg-white shadow-md" dir='ltr'>
            {/* Logo Section - Hidden on Small and Medium Screens */}
            <div className="flex items-start mr-4 hidden lg:flex">
                <img src="/img/wedding.png" alt="شعار الموقع" className="w-15 h-30" />
            </div>

            {/* Navigation Links - Always Visible */}
            <nav className=" text-xl flex space-x-20  ">
                <Link to={"/"} className="text-gray-700 hover:white hover:text-gray-900">Home</Link>
                <Link to={"#home"} className="text-gray-700  hover:text-gray-900">About</Link>
                <Link to={"#teachers"} className="text-gray-700  hover:text-gray-900">Services</Link>
                <Link to={"#services"} className="text-gray-700 hover:text-gray-900">Contact</Link>
                
            </nav>

            {/* Buttons Section */}
            <div className="flex items-center">
    {/* Buttons - Hidden on Small Screens */}
    <a 
        href="https://wa.me/966538990894?text=Hello%20I%20would%20like%20to%20book%20an%20appointment" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ backgroundColor: '#775D47' }} 
        className="text-white px-8 py-2 rounded-md ml-6 hidden sm:block"
    >
        Book Now
    </a>
</div>
        </header>
        </>
    );
}

export default Header;


