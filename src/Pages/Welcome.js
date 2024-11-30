import React from 'react';

function Welcome() {
  return (
    <div style={{ backgroundColor: '#775D47' }} className="   text-white py-16 px-6 md:px-24 lg:px-48">

      <div className="flex flex-col lg:flex-row-reverse items-center ">
        {/* Character Image */}
        <div className="flex-shrink-0 mb-8 lg:mb-0" >
  <img src="/img/whatsapp.png" alt="Character" className="w-96 max-h-max " />

          {/* Heart Icon */}
        
 



</div>


{/* Top-left Vector Image (Frame 37919) */}

{/* <img 
    src="/img/043.png" 
    alt="Vector Decoration" 
   className="ml-10 relative top-30 right-0 w-30 h-12 md:w-16 md:h-16 pointer-events-none z-10 transform translate-x-[-20%]"
/> */}






{/* Top-left Vector Image (Frame 37919) */}

{/* <img 
    src="/img/Group 33320.png" 
    alt="Vector Decoration" 
    style={{backgroundColor: 'black'}} className="relative top-16 left-0 w-12 h-12 md:w-16 md:h-16 pointer-events-none z-10 transform translate-x-[-20%]"
/> */}

        {/* Feature List */}
        <div className="space-y-12 text-center w-full lg:w-2/3" >
          <h2 className="text-4xl text-center font-bold mb-8">Why Us ? </h2>
          <div className="lg:translate-x-20">
          <Feature
            icon="/img/why4.png"
            title="Flower Design"
            description="We offer a wide range of luxury decorations options, including lighting,others"
            
          />
       </div>
        
          <Feature
            icon="/img/why4.png"
            title="Modern Decortaion"
            description="We offer a wide range of luxury decorations options, including lighting,others"

          />

<div className="lg:translate-x-20">
          <Feature
            icon="/img/why4.png"
            title="Modern Events"
            description="We offer a wide range of luxury decorations options, including lighting,others"
          />
          
</div>

          <Feature
            icon="/img/why4.png"
            title="Photography and video "
            description="We offer a wide range of luxury decorations options, including lighting,others"
          />
          

        </div>
      </div>
    </div>
  );
}

// Feature component with updated styles
function Feature({ icon, title, description }) {
  return (
    <div className="bg-white text-start p-8 w-3/4 rounded-xl shadow-lg flex  space-x-8 md:space-x-reverse ">
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 p-4 rounded-full">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 style={{ color: 'black' }} className="font-semibold  text-3xl mb-3">{title}</h3>
        <p style={{ color: 'gray' }} className="text-lg  leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default Welcome;
