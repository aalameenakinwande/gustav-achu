import React from 'react';
import { Link } from 'react-router-dom';
import CapImage from '../../images/StoreImages/CapImage.webp';
import CapTee from '../../images/StoreImages/Tees.webp';
import CapMug from '../../images/StoreImages/Cup.webp';

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
];

const StoreItem = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1600px] mx-auto py-8 md:py-20 md:px-20 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md md:text-xl font-bold">Featured</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <Link key={item.id} to={`/store/${item.id}`} className="text-center">
            <div className="h-[500px] flex flex-col justify-between group">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="mb-4 shadow-lg rounded-lg h-[450px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-md text-gray-600  font-medium">{item.name}</h3>
                <p className="font-semibold text-md md:text-lg">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default StoreItem;
