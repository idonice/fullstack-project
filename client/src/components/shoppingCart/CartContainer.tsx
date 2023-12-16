import React from 'react';
import CartList from './CartList';
import { IProduct } from '../../types';

interface ChildProps {
    cartList: IProduct[];
}
const CartContainer: React.FC<ChildProps> = ({ cartList }) => {
    return <div className='cart-container'>
        <h1 className='cart-title'>Shopping Cart</h1>
        <CartList cartList={cartList} />
    </div>;
};

export default CartContainer;