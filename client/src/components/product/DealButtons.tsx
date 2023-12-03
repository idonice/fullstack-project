import React from 'react';
import './Product.css';
const DealButtons: React.FC = () => {
  return <div>
    <button className="bg-btn yellow-btn">Add to Cart</button>
    <button className="bg-btn orange-btn">Buy Now</button>
  </div>;
};

export default DealButtons;