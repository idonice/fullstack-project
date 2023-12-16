import React from 'react';
interface ChildProps {
    quantity: number;
    totalPrice: number;
    currency: string;
}
const Total: React.FC<ChildProps> = ({ quantity, totalPrice, currency }) => {
    return <div className='total'>
        <span className='total-txt'>{`Subtotal (${quantity} items): `}<span className='bold'>{`${totalPrice}${currency}`}</span></span>

        <button className="bg-btn yellow-btn" id='to-checkout'>Proceed to checkout</button>
    </div>;
};

export default Total;