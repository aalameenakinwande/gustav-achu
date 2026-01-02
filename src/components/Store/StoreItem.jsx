import React from 'react';
import { Link } from 'react-router-dom';
import CapImage from '../../images/StoreImages/blueandwhite.webp';
import CapTee from '../../images/StoreImages/Tees.webp';
import CapMug from '../../images/StoreImages/blackbluecup.webp';
import Book1 from "../../images/bookImages/Book1.webp";
import WorkBookImageOne from "../../images/workbookImages/WorkBookImage.png";
import MediocreShirt from '../../images/StoreImages/shirt5.jpg';

const items = [
  {
    id: 1,
    name: '#YouREnough# Cap',
    price: '$34.99',
    imageUrl: CapImage
  },
  {
    id: 2,
    name: '#YouREnough# Mug',
    price: '$10',
    imageUrl: CapMug
  },
  {
    id: 3,
    name: '#YouREnough# Shirt (Unisex)',
    price: '$29.99',
    imageUrl: CapTee
  },
  {
    id: 6,
    name: 'Refuse to Mediocre Shirts',
    price: '$29.99',
    imageUrl: MediocreShirt
  },
  {
    id: 4,
    name: 'The Seeker',
    price: '$32.99',
    imageUrl: Book1
  },
  {
    id: 5,
    name: 'How to Pivot and Reinvent Your Life After Devastating Life-Altering Crisis',
    price: '$7.00',
    imageUrl: WorkBookImageOne
  },
];

const StoreItem = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1600px] mx-auto py-8 md:py-20 md:px-20 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md md:text-xl font-bold">Featured</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => {
          const linkPath = item.name === 'The Seeker' ? '/the-seeker' : `/store/${item.id}`;
          return (
            <Link key={item.id} to={linkPath} className="text-center">
              <div className="h-[500px] flex flex-col justify-between group">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="mb-4 shadow-lg rounded-lg h-[450px] object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-md text-gray-600 text-start font-medium">{item.name}</h3>
                  <p className="font-semibold text-md md:text-lg">{item.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
});

export default StoreItem;
