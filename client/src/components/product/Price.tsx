import React from 'react';
import './Product.css';
const Price: React.FC = () => {
    const price = 
    {
      curr: '$',
      whole: 99,
      fraction: 99
    };
  
  return <div className="product-price flex">
    <div className="product-price">
      <span className="product-price__currency">{price.curr}</span>
      <div className="product-price__whole">{price.whole}</div>
    <span className="product-price__fraction">{price.fraction}</span>
 </div>
</div>;
};

export default Price;