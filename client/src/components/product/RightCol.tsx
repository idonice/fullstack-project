import React from 'react';
import Price from './Price';
import Shipping from './Shipping';
import DealButtons from './DealButtons';
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
        <DealButtons />
        <DealDetails data={data.dealDetails} />

    </div>;
};

export default RightCol;