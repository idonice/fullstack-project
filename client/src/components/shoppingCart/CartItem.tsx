import React from 'react';
import { IProduct } from '../../types';
import AdditionalDetails from '../product/AdditionalDetails';
import ActionsRow from './ActionsRow';

interface ChildProps {
    data: IProduct;
}

const CartItem: React.FC<ChildProps> = ({ data }) => {
    return <div className='cart-item'>
        <input type="checkbox" name="" id="" />
        <div className="cart-item__img" style={{ backgroundImage: `url(${data.details.images[0]})` }}></div>
        <div className="cart-item__details">
            <div className="product-details__title product-card__description">
                <span className='cart-item__description'>{data.details.description}</span>
            </div>
            <div className="in-stock"><span className={data.stock ? 'stock' : ''}>{data.stock ? 'In Stock' : 'Sold Out'}</span></div>
            <ActionsRow stock={data.stock} />
        </div>
    </div>;
};

export default CartItem;