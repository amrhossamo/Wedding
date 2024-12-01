// TestimonialsSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Tamer Ahmed",
    text: "I Highly recommend this platform if you want to enjoy and book a wedding or event in Saudi Arabia",
    rating: 4,
  },
  {
    id: 2,
    name: " Tamer Ahmed",
    text: "I Highly recommend this platform if you want to enjoy and book a wedding or event in Saudi Arabia",
    rating: 5,
  },
  {
    id: 3,
    name: "Tamer Ahmed ",
    text: "I Highly recommend this platform if you want to enjoy and book a wedding or event in Saudi Arabia",
    rating: 4,
  },
  {
    id: 4,
    name: " Tamer Ahmed",
    text: "I Highly recommend this platform if you want to enjoy and book a wedding or event in Saudi Arabia",
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white mb-20 mt-20 py-10 text-center">
      <h2 style={{ color: '#775D47',fontFamily: 'Cormorant , serif', }} className="text-3xl font-bold  mb-8"> Clients Reviews</h2>

      <div className="relative mx-auto max-w-7xl px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="px-2 ">
              <div
                className={`relative overflow-hidden rounded-lg transition-transform duration-500 ${
                  index === activeSlide ? 'transform scale-105 shadow-2xl z-20 bg-white' : 'transform scale-90 opacity-50 z-10 bg-gray-100'
                }`}
                style={{
                  marginTop: index === activeSlide ? '-10px' : '10px',
                  zIndex: index === activeSlide ? '20' : '10',
                  padding: index === activeSlide ? '20px' : '10px',
                }}
              >
                {index === activeSlide && (
                  <div style={{ color: '#775D47' }}  className="absolute top-4 left-4 text-3xl  leading-none">
                    &ldquo;
                  </div>
                )}
                <p className="text-xl font-medium text-gray-800 mb-4">
                  {testimonial.text}
                </p>
                <p className="text-lg font-semibold text-gray-700">{testimonial.name}</p>
                <div className="flex justify-center mt-2 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
