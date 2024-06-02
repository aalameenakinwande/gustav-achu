import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import GustavImage from '../../images/homeImages/Gustav.webp';
import './HomeAboutGustav.css'; // Import the CSS file for animations

const HomeAboutGustav = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    if (imageInView) {
      const timer = setTimeout(() => setTextInView(true), 500); // 500ms delay
      return () => clearTimeout(timer);
    }
  }, [imageInView]);

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col md:flex-row text-white py-16 lg:py-24">
        {/* First Column: Image */}
        <div
          ref={imageRef}
          className={`md:w-1/2 w-full mb-4 md:mb-0 transform transition-transform duration-1000 ${imageInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-[300px] md:h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Second Column: Text and Button */}
        <div
          className={`md:w-1/2 w-full flex flex-col items-start md:pl-6 md:ml-20 transform transition-transform duration-1000 ${textInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div className="md:max-h-[600px] md:overflow-y-auto">
            <p style={{ color: '#EFE359', fontSize: '13px' }}>About Gustav</p>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-black">
              ABOUT IPSUM DOLORE{' '}
              <span style={{ color: '#EFE359' }}>RISUS DONEC FAUCIBUS AC</span> AC
              EGET.
            </h1>
            <p className="text-black pb-6" style={{ fontSize: '13px' }}>
              Lorem ipsum dolor sit magna a velit elit. Vulputate suscipit mauris
              aenean duis nisi porttitor tortor eu. Arcu sit elit libero tellus
              ut sed. Egestas arcu faucibus ante orci porttitor tellus. Leo
              fermentum sed ultrices aliquam a massa magna commodo. Tellus cras
              fusce pellentesque sed neque enim.aenean duis nisi porttitor tortor eu. Arcu sit elit libero tellus
              ut sed. Egestas arcu faucibus ante orci porttitor tellus. Leo
              fermentum sed ultrices aliquam a massa magna commodo. Tellus cras
              fed ultrices aliquam a massa magna commodo. Tellus cras
              fusce pellentesque sed neque enim.aenean duis nisi porttitor tortor eu. Arcu sit elit libero tellus
              ut sed. Egestas arcu faucibus ante orci porttitor tellus. Leo
              fermentum sed ultrices aliquam a massa magna commodo. Tellus cras
              fusce pellentesque sed neque enim. 
            </p>
          </div>
          <button
            className="bg-[#0D1BE1] hover:scale-105 transition-transform duration-300 text-white py-2 px-8 self-center md:self-start mt-1"
            style={{ fontSize: '13px' }}
          >
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutGustav;
