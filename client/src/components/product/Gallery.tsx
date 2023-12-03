import React, { useState } from 'react';
import './Product.css';
import GalleryItem from './GalleryItem';
const Gallery: React.FC = () => {
  const images = [
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1610746650000',
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1610746650000',
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1610746640000',
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002_AV5?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1610746646000'
  ]
  const [activeChild, setActiveChild] = useState<number>(0);

  const handleChildHover = (childId: number) => {
    setActiveChild(childId);
  };

  return (
    <div className="product-gallery">
      <div className="carrousel">
        {images.map((src, i) => {
          return <GalleryItem image={images[i]} onMouseOver={handleChildHover} id={i} isActive={activeChild === i} />
        })}
      </div>
      <div className="main-img">
        <img src={images[activeChild]} alt="" />
      </div>
    </div>
  )
};

export default Gallery;