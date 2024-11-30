// // VideoSlider.js
// // VideoSlider.js
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaPlay } from 'react-icons/fa';

// const VideoSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
//     focusOnSelect: true,
//     beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const videos = [
//     { src: 'img/video1.png', alt: 'Video 1' },
//     { src: 'img/video2.png', alt: 'Video 2' },
//     { src: 'img/video3.png', alt: 'Video 3' },
//     { src: 'img/video4.png', alt: 'Video 4' },
//   ];

//   return (
//     <div className="bg-green-600 py-10 text-center text-white">
//       <h2 className="text-2xl font-bold mb-2">فيديوهات التحفيظ</h2>
//       <p className="text-lg mb-6">فيديوهات تجريبية لاختيار شكل وحجم النصوص والخطوط وطريقة عرضها</p>

//       <div className="relative mx-auto max-w-5xl px-4">
//         <Slider {...settings}>
//           {videos.map((video, index) => (
//             <div key={index} className="px-2">
//               <div
//                 className={`relative overflow-hidden rounded-lg transition-transform duration-500 ${
//                   index === activeSlide ? 'transform scale-110 shadow-2xl' : 'transform scale-90 opacity-75'
//                 }`}
//               >
//                 <img src={video.src} alt={video.alt} className="w-full h-64 object-cover rounded-lg" />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                   <FaPlay className="text-white text-4xl" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default VideoSlider;



// // VideoSlider.js
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaPlay } from 'react-icons/fa';

// const VideoSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
//     focusOnSelect: true,
//     beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const videos = [
//     { src: 'img/book.png', alt: 'Video 1' },
//     { src: 'img/book.png', alt: 'Video 2' },
//     { src: 'img/book.png', alt: 'Video 3' },
//     { src: 'img/book.png', alt: 'Video 4' },
//   ];

//   return (
//     <div className="bg-green-600 py-10 text-center text-white">
//       <h2 className="text-2xl font-bold mb-2">فيديوهات التحفيظ</h2>
//       <p className="text-lg mb-6">فيديوهات تجريبية لاختيار شكل وحجم النصوص والخطوط وطريقة عرضها</p>

//       <div className="relative mx-auto max-w-5xl px-4">
//         <Slider {...settings}>
//           {videos.map((video, index) => (
//             <div key={index} className="px-2">
//               <div
//                 className={`relative overflow-hidden rounded-lg transition-transform duration-500 ${
//                   index === activeSlide ? 'transform scale-105 shadow-2xl z-20' : 'transform scale-90 opacity-75 z-10'
//                 }`}
//                 style={{
//                   marginTop: index === activeSlide ? '-10px' : '10px',
//                   zIndex: index === activeSlide ? '20' : '10',
//                 }}
//               >
//                 <img src={video.src} alt={video.alt} className="w-full h-64 object-cover rounded-lg" />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                   <FaPlay className="text-white text-4xl" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default VideoSlider;
















import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from 'react-icons/fa';

const VideoSlider = () => {
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

  const videos = [
    { src: 'img/Video1.mp4', alt: 'Video 1' },
    { src: 'img/Video1.mp4', alt: 'Video 2' },
    { src: 'img/Video1.mp4', alt: 'Video 3' },
    { src: 'img/Video1.mp4', alt: 'Video 4' },
    { src: 'img/Video1.mp4', alt: 'Video 5' },
    { src: 'img/Video1.mp4', alt: 'Video 6' },


  ];

  return (
    <div className=" py-10 text-center text-white">
      <h2 style={{ color: '#775D47' }} className="text-2xl font-bold mb-2"> Capella for luxury weddings & event designer</h2>
      
      <div className="relative mx-auto max-w-5xl px-4 overflow-hidden p-10">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="flex mb-10 mt-10  justify-center">
              <div
                className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                  index === activeSlide
                    ? 'transform scale-110 z-20' // Larger scale and higher z-index for center
                    : 'transform scale-100 z-10 opacity-75'
                }`}
                style={{
                  transformOrigin: 'center', // Scale from the center of each video
                  marginLeft: index === activeSlide - 1 ? '-30px' : '0', // Overlap left
                  marginRight: index === activeSlide + 1 ? '-30px' : '0', // Overlap right
                }}
              >
                <video controls  loop src={video.src} alt={video.alt} className="aspect-video w-full h-64 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const VideoSlider = () => {
//   // Array of random YouTube video IDs
//   const videos = [
//     { id: 1, videoId: "Rl6fV6pIEy0", title: "Wedding Highlights 1" },
//     { id: 2, videoId: "IBFWlwnrpdU", title: "Wedding Highlights 2" },
//     { id: 3, videoId: "vFSblBFfg8c", title: "Wedding Highlights 3" },
//     { id: 4, videoId: "IBFWlwnrpdU", title: "Wedding Highlights 4" },
//     { id: 5, videoId: "IBFWlwnrpdU", title: "Wedding Highlights 5" },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10 text-center text-white">
//       <h2  style={{ color: '#775D47' }} 
//   className="text-center text-2xl font-bold mb-6">
//         Capella for luxury weddings & event designer
//       </h2>
//       <Slider {...settings}>
//         {videos.map((video) => (
//           <div key={video.id} className="px-2">
//             <div className="relative group">
//               <iframe
//                 className="rounded-lg w-full aspect-video"
//                 src={`https://www.youtube.com/embed/${video.videoId}`}
//                 title={video.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <p className="text-center mt-2 text-sm text-gray-600">
//                 {video.title}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoSlider;



