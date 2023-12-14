import React from 'react';
import './Product.css';
interface ChildProps {
  price:
  {
    curr: string,
    whole: number,
    fraction: number
  };
}
const Price: React.FC<ChildProps> = ({ price }) => {

  return <div className="product-price flex">
    <div className="product-price">
      <span className="product-price__currency">{price.curr}</span>
      <div className="product-price__whole">{price.whole}</div>
      <span className="product-price__fraction">{price.fraction}</span>
    </div>
  </div>;
};

export default Price;