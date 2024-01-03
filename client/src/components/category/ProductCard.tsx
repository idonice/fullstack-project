import React from 'react';
import { IProduct } from '../../types';
import Price from '../product/Price';
import LinkWrapper from '../shared/LinkWrapper';
import Stars from '../product/Stars';
import Loader from '../shared/Loader';

interface ChildProps {
    data: IProduct;
}
const ProductCard: React.FC<ChildProps> = ({ data }) => {
    if (!data) {
        return <Loader />
    } else
        return <LinkWrapper target='' href={`/`}><div className='product-card'>
            <div className="product-card__left" style={{ backgroundImage: `url('')` }}>
            </div>
            <div className="product-card__right">
                <div className="product-details__title product-card__description">
                    {data.details.description && <span>{data.details.description}</span>}
                </div>
                <div className="review-field">
                    <Stars stars={Math.floor(Number(data.reviews.stars))} />
                    <span className="reviews review-amount special-details">{data.reviews.amount} ratings</span>
                </div>
                <Price price={data.price} />
                <div className='shipping-date'>
                    <span>Delivery <span className='bold'>{data.shipping.date}</span> to your country</span>
                </div>
            </div>
        </div >
        </LinkWrapper >
};

export default ProductCard;