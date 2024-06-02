import React from 'react'
import GustavContact from '../../images/heroImages/GustavContact.webp';


const ContactHero = () => {
    return (
      <div
      className="w-full h-auto"
      style={{ backgroundColor: "#181349" }}
    >
      <div className="max-w-[1600px] mx-auto lg:-mt-38  sm:px-6 ">
        <div className="flex flex-col lg:flex-row px-7 text-white md:pt-28 relative">
              {/* Left Side */} 
              <div className="lg:w-1/2 flex flex-col justify-center pt-72 px-0 lg:px-0 lg:pt-0 md:pt-30">
              <p className="text-lg lg:text-base mt-4 lg:-mt-48" style={{fontWeight: 'bold'}}> {/* Adjusted margin-top */}
              You're just step away from                </p>
                <h6 className="text-4xl lg:text-5xl font-bold leading-tight mt- lg:mt-10" style={{color: '#D7CC50'}}> {/* Adjusted margin-top */}
                UNLEASHING BRILLIANCE!                </h6>
                <p className="text-sm lg:text-base mt-4 lg:mt-8"> {/* Adjusted margin-top */}
                Drop us a line through the contact form to kickstart your journey. As a token of our gratitude, we'll send you a complimentary leadership guide to ignite your transformation. Let's make magic happen together!"
                </p>
                
              </div>
    
              {/* Right Side */}
              <div className="hidden lg:w-1/2 md:block">
                <img src={GustavContact} alt="Gustav Achu" className="w-full h-auto object-cover"   style={{marginLeft: '23px'}} />
              </div>

              <div className="lg:w-1/2 lg:-mt-16 md:hidden">
            <img
              src={GustavContact}
              alt="Hero_Image"
              className="w-full h-auto object-cover"
              style={{marginLeft: '28px'}} 
            />
          </div>
            </div>
          </div>
        </div>
      );
}

export default ContactHero
