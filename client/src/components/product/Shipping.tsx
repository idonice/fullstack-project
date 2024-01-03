import React from 'react';
import './Product.css';
interface ChildProps {
  data: {
    price: {
      curr: string,
      price: number
    },
    shipping: {
      price: number,
      date: string,
      country: string
    }
  }
}


const Shipping: React.FC<ChildProps> = ({ data }) => {

  return <div className="shipping">
    <div className='shipping-price '>
      <span>{data.price.curr}{data.shipping.price} Shipping & Import Fees Deposit to {data.shipping.country} <span className='special-details'>Details</span></span>
    </div>
    <div className='shipping-date'>
      <span>Delivery <span className='bold'>{data.shipping.date}</span></span>
    </div>
    <div className="shipping-to">
      <span className='special-details'>Deliver to <span>{data.shipping.country}</span></span>
    </div>
  </div>;
};

export default Shipping;