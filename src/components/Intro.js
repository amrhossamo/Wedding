import React from 'react';
import { FaCheck, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

const Intro = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:gap-[210px] bg-white items-center p-4 md:p-8" dir="ltr">
                <div className="text-center md:text-right mb-6 md:mb-0">
                    <img src='/img/Frame.png'></img>
                    

                    <p className="text-base md:text-xl text-gray-700 mb-2 flex items-center justify-center md:justify-start">
                        
                        Make your wedding luxurious and glamorousan 
                    </p>

                    <p className="text-base md:text-lg text-gray-700 mb-2 flex items-center justify-center md:justify-start">
                        
                        with amazing views that make your special day
                    </p>

                    <p className="text-base md:text-lg text-gray-700 mb-4 flex items-center justify-center md:justify-start">
                    exceptional event with special service
                    </p>

                    <div className="flex justify-center md:justify-start">
                           <a 
                              href="https://wa.me/966538990894?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{ backgroundColor: '#775D47' }} 
                              className="text-white px-3 md:px-4 py-2 rounded-md flex items-center"
                                                              >
                             contact us via whatsapp
                             <FaWhatsapp className="mr-4 m-2" />
                           </a>
                    </div>
                </div>

                <div className="w-full md:w-auto flex justify-center">
                    <img src="/img/unsplash.png" alt="قرآن" className="max-w-full h-auto w-3/4 md:w-auto" />
                </div>
            </div>
        </>
    );
}

export default Intro;
