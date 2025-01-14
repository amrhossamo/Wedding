import React from 'react';
const character = require('../img/WhatsApp.png');
function Welcome() {
  return (
    <div
      style={{ backgroundColor: '#775D47' }}
      className="text-white py-16 px-6 md:px-24 lg:px-48"
    >
      <div className="flex flex-col lg:flex-row-reverse items-center">
        {/* Character Image */}
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <img
            src={character}
            alt="Character"
            className="w-80 md:w-96 max-w-full h-auto"

          />
        </div>

        {/* Feature List */}
        <div className="space-y-12 text-center w-full lg:w-2/3">
          <h2 style={{ fontFamily: 'Cormorant , serif' }} className="text-4xl font-bold mb-8">Why Us?</h2>
          <div className="lg:translate-x-20">
            <Feature
              icon="/img/why4.png"
              title="Flower Design"
              description="Luxurious flower designs with stunning decor and lighting, perfect for transforming any space beautifully."/>
          </div>

          <Feature
            icon="/img/why4.png"
            title="Modern Decoration"
            description="Modern decoration with sleek designs, luxury lighting, and elegant flower arrangements for any occasion."
          />

          <div className="lg:translate-x-20">
            <Feature
              icon="/img/why4.png"
              title="Modern Events"
              description="Modern event designs with stylish decor, elegant flowers, and sophisticated lighting for unforgettable moments."
            />
          </div>

          <Feature
            icon="/img/why4.png"
            title="Photography and Video"
            description="Professional photography and video services to capture your special moments with creativity and style."
          />
        </div>
      </div>
    </div>
  );
}

// Feature Component
function Feature({ icon, title, description }) {
  return (
    <div className="bg-white text-start p-8 w-full md:w-3/4 mx-auto rounded-xl shadow-lg flex space-x-8 md:space-x-reverse">
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 p-4 rounded-full">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 className="font-semibold text-2xl lg:text-3xl mb-3 text-black">{title}</h3>
        <p className="text-base lg:text-lg leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Welcome;