import React from 'react'
import {  HiArrowRight } from 'react-icons/hi';
import Card from './Card';
const image1= require("../img/Icon.png");
const image2= require("../img/Icon (1).png");
const image3= require("../img/Icon (2).png");
const ServicesMain = () => {
    return (
        <>
            <div className="flex flex-col items-center px-6 md:px-10 lg:px-[90px] py-8 md:py-10 lg:py-12 relative">
                <img src="/img/Vector.png" alt="Vector Decoration 2" className="absolute top-5 left-[39%] w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-9 pointer-events-none z-10" />
                <img src="/img/Vector1.png" alt="Vector Decoration 3" className="absolute top-5 left-[60%] w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-9 pointer-events-none z-10" />
                <h2 style={{ color: '#775D47' , fontFamily: 'Cormorant , serif',  }} className="text-xl md:text-4xl font-semibold  mb-2">Our Services </h2>
                
                
                {/* الشبكة لتصبح Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-9 " >
                    <div className="col-span-1  ">
                        <Card
                            icon={<img src={image1} alt=" wedding management" />}
                            heading="Wedding Management  "
                            paragraph="Elegant and charming, our wedding celebrations blend tradition and modernity with rich cultural values. Every detail is meticulously planned, creating an unforgettable experience of splendor and luxury. "
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src={image2} alt=" event" />}
                            heading=" Modern Events"
                            paragraph="Weddings and special events mark life’s most cherished moments. We dedicate our expertise to understanding your vision, values, and message, delivering uniquely creative and personalized event solutions."
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src={image3} alt="kids " />}
                            heading=" Kide parties "
                            paragraph="our younger clients love big parties too which why we offer our party planning, design and entertainment service"
                        />
                    </div>
                </div>

                {/* الزر لعرض المزيد */}
                <div className="mt-6 flex justify-center w-full">
                    <button  className="py-2 px-4 bg-transparent text-stone-700 border border-stone-700 rounded-lg flex items-center justify-center">
                        <span> See More </span>
                        <HiArrowRight className="w-4 h-4 ml-2 text-current" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ServicesMain;
