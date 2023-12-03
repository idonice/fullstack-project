import React from 'react';
import { IProduct } from '../../types';
import { Link } from 'react-router-dom';
import Price from './Price';
import Shipping from './Shipping';
import ColorsGallery from './ColorsGallery';
import Models from './Models';
import AdditionalDetails from './AdditionalDetails';
import About from './About';
interface ChildProps {
    data: IProduct;
}
const LeftCol: React.FC<ChildProps> = ({ data }) => {
    return <div className="product-details__left">
        <div className="product-details__title">
            <span>{data.productDetails.description}</span>
        </div>
        <Link to={'/'}><span className="special-details">Brand: {data.productDetails.brand}</span></Link>
        <div className="review-field">
            <span className="reviews review-score">{data.reviews.stars}</span>
            <div className="reviews review-stars">stars</div>
            <span className="reviews review-amount special-details">{data.reviews.amount} ratings</span>
            <span className='reviews'>|</span>
            <span className="reviews review-questions special-details">{data.reviews.questions} answered questions</span>
        </div>
        <Price />
        <Shipping data={data} />
        {data.colors.length ? <ColorsGallery colors={data.colors} /> : ''}
        {data.modelsID.length && <Models data={data.modelsID} />}
        {data.additionalDetails && <AdditionalDetails data={data.additionalDetails} />}
        {data.about && <About data={data.about} />}
    </div>;
};

export default LeftCol;