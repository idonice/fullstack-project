import React from 'react';
import HomeGallery from '../components/home/HomeGallery';

const HomePage: React.FC = () => {
  return <div className='home-page'>
    <HomeGallery images={['https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg', 'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg']} />
  </div>;
};

export default HomePage;