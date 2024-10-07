import React, { useRef } from 'react';
import StoreHero from './StoreHero';
import StoreItem from './StoreItem';

const StorePage = () => {
  // Create a ref for the StoreItem component
  const storeItemRef = useRef(null);

  // Function to scroll to StoreItem component
  const scrollToStoreItem = () => {
    storeItemRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <StoreHero scrollToStoreItem={scrollToStoreItem} />
      <StoreItem ref={storeItemRef} />
    </div>
  );
};

export default StorePage;
