import React from 'react';
import Banner from '../../images/homeImages/cta-banner.png';

const ProgramsCount = () => {
  return (
    <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-full text-white py-4 lg:py-8">
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold">5760</p>
              <p style={{fontSize: '13px', textAlign: 'center'}} className='text-sm'>coaching hours</p>
            </div>
            <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">72</p>
            <p style={{fontSize: '13px', textAlign: 'center'}}>topics & counting</p>
            </div>
            <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">31</p>
              <p style={{fontSize: '13px', textAlign: 'center'}}>years experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsCount;
