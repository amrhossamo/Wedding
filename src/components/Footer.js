
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#775D47' }} className=" text-white py-32 px-6 md:px-8"  >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Links Section */}
        <div>
          <h4 className="font-bold text-xl mb-4">Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li><button className="text-gray-200 mb-2 text-lg hover:text-gray-300">Help</button></li>
            <li>
  <Link to="/services">
    <button className="text-gray-200 mb-2 text-lg hover:text-gray-300">Services</button>
  </Link>
</li>         
   <li><button className="text-gray-200 text-lg hover:text-gray-300">Security</button></li>
            <li><button className="text-gray-200 mb-2 text-lg hover:text-gray-300">Blog</button></li>
          </ul>
        </div>

        {/* Rules Section */}
        <div>
          <h4 className="font-bold text-xl mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-200">
            <li><button className="text-gray-200 mb-2 text-lg hover:text-gray-300">Privacy Policy</button></li>
            <li><button className="text-gray-200 mb-2 text-lg hover:text-gray-300">Licens</button></li>
            <li><button className="text-gray-200 mb-2 text-lg hover:text-gray-300">Terms & Conditions</button></li>
            
          </ul>
        </div>

        {/* Pages Section */}
        <div>
          <h4 className="font-bold text-xl mb-4">Pages</h4>
          <ul className="space-y-2 text-gray-200">
          
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-200 hover:text-gray-300 text-lg" 
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/">
                <button className="text-gray-200 text-lg hover:text-gray-300"> FAQS</button>
              </Link>
            </li>     
            <li><button className="text-gray-200 text-lg hover:text-gray-300">Contact Us</button></li>
            <li><button className="text-gray-200 text-lg hover:text-gray-300">About Us</button></li>
          </ul>
        </div>

        {/* Logo and Description Section */}
        <div className="flex flex-col items-center md:items-end" >
          {/* Logo */}
          <div className="mb-4 ml-4">
            <img src="/img/wedding.png" alt=" Icon" className="w-10 h-10 filter invert" />
          </div>

          {/* Description Text */}
          <p  className="text-gray-200 text-lg leading-relaxed text-center md:text-right" dir="ltr">
          we are  pleased to enable you to know
          how to book wedding and events easily
          and smothly
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-300 text-2xl" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-gray-300 text-2xl" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-gray-300 text-2xl" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
