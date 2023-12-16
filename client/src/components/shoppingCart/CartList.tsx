import React from 'react';
import CartItem from './CartItem';
import ProductCard from '../product/ProductCard';
import { IProduct } from '../../types';

interface ChildProps {
    cartList: IProduct[];
}
const CartList: React.FC<ChildProps> = ({ cartList }) => {
    return <div className='cart-list'>
        {cartList.map(p => {
            return <CartItem data={p} />
        })}
    </div>;
};

export default CartList;