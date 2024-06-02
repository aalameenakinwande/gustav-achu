import React, { useEffect, useRef } from 'react';
import './Goals.css'; 

const Goals = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="flex flex-col justify-start items-center pt-16 relative">
      <header className="px-8 text-center">
        <p style={{ color: '#EFE359', fontSize: '13px' }}>WHY GUSTAV?</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          WHAT ARE YOUR <span style={{ color: '#EFE359' }}>GOALS</span>?
        </h1>
        <p style={{ fontSize: '13px' }} className='text-center'>
          Select your meeting goals below to Learn more about Gustav Achu’s <br />
          cutting edge content, powerful demonstrations, and custom meetings.
        </p>
      </header>
      <div className="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-x-14 sm:space-y-0 relative">
        <div
          className="card shadow-md p-6"
          style={{
            backgroundColor: '#0B1623',
            color: 'white',
            height: '330px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
          }}
          ref={el => cardRefs.current[0] = el}
        >
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ textAlign: 'start', marginBottom: '20px' }}>
            <h2 className="text-sm font-bold mb-2">Unleash Potential</h2>
            <p style={{ fontSize: '10px' }}>
              By confronting self-limiting beliefs, individuals open the door to their untapped potential, paving the way for personal growth.
            </p>
          </div>
        </div>
        <div
          className="card shadow-md p-6"
          style={{
            backgroundColor: '#0B1623',
            color: 'white',
            height: '330px',
              width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
          }}
          ref={el => cardRefs.current[1] = el}
        >
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ textAlign: 'start', marginBottom: '20px' }}>
            <h2 className="text-sm font-bold mb-2">Achieve Excellence</h2>
            <p style={{ fontSize: '10px' }}>
              Strive for excellence in every endeavor, setting high standards and pushing boundaries to reach new heights of success.
            </p>
          </div>
        </div>
        <div className="relative">
          <div
            className="card shadow-md p-6 relative"
            style={{
              backgroundColor: '#0B1623',
              color: 'white',
              height: '330px',
              width: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 10
            }}
            ref={el => cardRefs.current[2] = el}
          >
            <div style={{ flexGrow: 1 }}></div>
            <div style={{ textAlign: 'start', marginBottom: '20px' }}>
              <h2 className="text-sm font-bold mb-2">Embrace Innovation</h2>
              <p style={{ fontSize: '10px' }}>
                Embrace innovation and creativity to stay ahead of the curve, constantly seeking new solutions and opportunities for growth.
              </p>
            </div>
          </div>
          {/* Conditional rendering based on screen size */}
          <div className="hidden sm:block absolute inset-0 transform translate-x-[75px] translate-y-[200px]" style={{ zIndex: 5 }}>
            <div className="bg-yellow-400" style={{ width: '150px', height: '150px' }}></div>
          </div>
          <div className="hidden sm:block absolute inset-0 transform translate-x-[63px] translate-y-[190px]" style={{ zIndex: 5 }}>
            <div className="bg-blue-700" style={{ width: '150px', height: '150px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
