import React from 'react';
import { IProduct } from '../../types';
import { Link } from 'react-router-dom';
import Price from './Price';
import Shipping from './Shipping';
import ColorsGallery from './ColorsGallery';
import Models from './Models';
import AdditionalDetails from './AdditionalDetails';
import About from './About';
import Reviews from './Reviews';
interface ChildProps {
    data: IProduct;
}
const LeftCol: React.FC<ChildProps> = ({ data }) => {
    return <div className="product-details__left">
        <div className="product-details__title">
            <span>{data.productDetails.description}</span>
        </div>
        <Link to={'/'}><span className="special-details">Brand: {data.productDetails.brand}</span></Link>
        <Reviews reviews={data.reviews} />
        <Price price={data.price} />
        <Shipping data={data} />
        {data.colors.length && <ColorsGallery colors={data.colors} />}
        {data.modelsID.length && <Models data={data.modelsID} />}
        {data.additionalDetails && <AdditionalDetails data={data.additionalDetails} />}
        {data.about && <About data={data.about} />}
    </div>
};

export default LeftCol;