import React from 'react';
import Book1 from '../../images/bookImages/book1.webp';
import Book2 from '../../images/bookImages/book2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Books.css'
const Books = () => {


  return (
    <div className="bg-[#181349] flex flex-col justify-start items-center pt-16 mt-8 pb-16">
      <header className="px-8 text-center">
        <p style={{ color: '#EFE359', fontSize: '13px' }}>BOOKS</p>
        <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4">
          BOOKS WRITTEN BY <span style={{ color: '#EFE359' }}>GUSTAV ACHU?</span>
        </h1>
        <p style={{ fontSize: '13px' }} className='text-white text-center'>
          Lorem ipsum dolor sit amet consectetur. Curabitur cursus ipsum vel eu hendrerit malesuada urna et <br />sit. Id dignissim turpis orci viverra mi.
        </p>
      </header>
      <div className="books-container flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4" style={{ maxWidth: '90%' }}>
        <div className="book-card rounded-lg p-1" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Book1} alt="Book 1" style={{ width: '180px', height: '230px', marginBottom: '20px' }} />
          <div>
            <h2 className="text-center text-sm text-white font-bold mb-1">The Design of books</h2>
            <p style={{ fontSize: '13px' }} className='text-white text-center'>
              Book description for The Design of books.
            </p>
            <div className="flex justify-center">
            <button
            className="mt-10 bg-[#0D1BE1] hover:scale-105 transition-transform duration-300 text-white py-2 px-8 self-center md:self-start"
            style={{ fontSize: '13px' }}
          >                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="book-card rounded-lg p-1" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Book2} alt="Book 2" style={{ width: '180px', height: '230px', marginBottom: '20px' }} />
          <div>
            <h2 className="text-center text-sm text-white font-bold mb-1">Harry Potter and the Cursed Child</h2>
            <p style={{ fontSize: '13px' }} className='text-white text-center'>
              Book description for Harry Potter and the Cursed Child.
            </p>
            <div className="flex justify-center">
            <button
            className="mt-10 bg-[#0D1BE1] hover:scale-105 transition-transform duration-300 text-white py-2 px-8 self-center md:self-start"
            style={{ fontSize: '13px' }}
          >                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
      <button
            className="mt-10 bg-[#0D1BE1] hover:scale-105 transition-transform duration-300 text-white py-2 px-8 self-center md:self-start"
            style={{ fontSize: '13px' }}
          >          See More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Books;
