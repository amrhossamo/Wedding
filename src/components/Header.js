import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md" dir="ltr">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src="/img/wedding.png" alt="شعار الموقع" className="w-10 h-10" />
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block lg:hidden text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } w-full lg:flex lg:w-auto lg:space-x-10 text-lg items-center`}
                >
                    <Link
                        to="/"
                        className="block px-4 py-2 lg:inline text-gray-700 hover:text-gray-900"
                    >
                        Home
                    </Link>
                    <Link
                        to="#home"
                        className="block px-4 py-2 lg:inline text-gray-700 hover:text-gray-900"
                    >
                        About
                    </Link>
                    <Link
                        to="#teachers"
                        className="block px-4 py-2 lg:inline text-gray-700 hover:text-gray-900"
                    >
                        Services
                    </Link>
                    <Link
                        to="#services"
                        className="block px-4 py-2 lg:inline text-gray-700 hover:text-gray-900"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Buttons Section */}
                <div className="hidden lg:flex items-center">
                    <a
                        href="https://wa.me/966538990894?text=Hello%20I%20would%20like%20to%20book%20an%20appointment"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#775D47' }}
                        className="text-white px-6 py-2 rounded-md"
                    >
                        Book Now
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;

