import React from 'react';
import './Product.css'
import Gallery from './Gallery';
import { IProduct } from '../../types';
import LeftCol from './LeftCol';
import RightCol from './RightCol';

interface ChildProps {
  data: IProduct;
}

const Product: React.FC<ChildProps> = ({ data }) => {

  return (
    <div className='product__main-details'>
      <Gallery />
      <div className="product-details">
        <LeftCol data={data} />
        <RightCol data={data} />
      </div>

    </div>
  );
};

export default Product;
