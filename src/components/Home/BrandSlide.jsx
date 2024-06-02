import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS
import './BrandSlide.css'; // Import custom CSS for the animation
import Image1 from '../../images/brandimages/IBM logo.svg';
import Image2 from '../../images/brandimages/Hitachi_logo.svg';
import Image3 from '../../images/brandimages/Forbeslogo.svg';
import Image4 from '../../images/brandimages/Tecno logo.svg';
import Image5 from '../../images/brandimages/Business insider logo.svg';
import Image6 from '../../images/brandimages/Bank of America logo.svg';
import Image7 from '../../images/brandimages/Business insider logo.svg';
import Image8 from '../../images/brandimages/Walmart_logo.svg';

const BrandSlide = () => {
    const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
    ];

 

    return (
        <div className="max-w-[1600px]  carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content">
                    {images.concat(images).map((url, index) => ( // Duplicate the images array to create a seamless loop
                        <img key={index} src={url} alt={`Brand ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandSlide;
