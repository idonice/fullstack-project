import React from 'react';
import './Product.css';
interface ChildProps {
  price:
  {
    curr: string,
    price: number;
  };
}
const Price: React.FC<ChildProps> = ({ price }) => {
  const [whole, fraction] = price.price.toString().split('.');

  return <div className="product-price flex">
    <div className="product-price">
      <span className="product-price__currency">{price.curr}</span>
      {whole && <div className="product-price__whole">{whole}</div>}
      {fraction && <span className="product-price__fraction">{fraction}</span>}
    </div>
  </div>;
};

export default Price;