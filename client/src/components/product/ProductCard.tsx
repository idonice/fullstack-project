import React from 'react';

import { IProduct } from '../../types';
import { Link } from 'react-router-dom';
import Price from './Price';
import Shipping from './Shipping';
import LinkWrapper from '../shared/LinkWrapper';

interface ChildProps {
    data: IProduct;
}
const ProductCard: React.FC<ChildProps> = ({ data }) => {
    return <LinkWrapper target='' href={`/products/${data.productID}`}><div className='product-card'>
        <div className="product-card__left" style={{ backgroundImage: `url(${data.productDetails.images[0]})` }}>
        </div>
        <div className="product-card__right">
            <div className="product-details__title product-card__description">
                <span>{data.productDetails.description}</span>
            </div>
            <div className="review-field">
                <span className="reviews review-score">{data.reviews.stars}</span>
                <div className="reviews review-stars">stars</div>
                <span className="reviews review-amount special-details">{data.reviews.amount} ratings</span>
            </div>
            <Price price={data.price} />
            <div className='shipping-date'>
                <span>Delivery <span className='bold'>{data.shipping.date}</span> to {data.shipping.country}</span>
            </div>
        </div>
    </div >
    </LinkWrapper >
};

export default ProductCard;