import React from 'react';
import Price from './Price';
import Shipping from './Shipping';
import DealDetails from './DealDetails';
import { IProduct } from '../../types';

interface ChildProps {
    data: IProduct;
}
const RightCol: React.FC<ChildProps> = ({ data }) => {
    return <div className="product-details__right">
        <Price price={data.price} />
        <Shipping data={data} />
        <div className="in-stock"><span className={data.stock ? 'stock' : ''}>{data.stock ? 'In Stock' : 'Sold Out'}</span></div>
        <button className="bg-btn yellow-btn">Add to Cart</button>
        <button className="bg-btn orange-btn">Buy Now</button>
        <DealDetails data={data.saleDetails} />

    </div>;
};

export default RightCol;