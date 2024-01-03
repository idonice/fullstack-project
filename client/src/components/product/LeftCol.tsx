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
            <span>{data.details.description}</span>
        </div>
        <Link to={'/'}><span className="special-details">Brand: {data.details.brand}</span></Link>
        <Reviews reviews={data.reviews} />
        <Price price={data.price} />
        <Shipping data={data} />
        {data.colors.length && <ColorsGallery colors={data.colors} />}
        {data.modelsID.length && <Models data={data.modelsID} />}
        {data.specification && <AdditionalDetails data={data.specification} />}
        {data.about && <About data={data.about} />}
    </div>
};

export default LeftCol;