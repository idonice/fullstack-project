import React from 'react';
import { useState, useEffect } from 'react';
import Product from '../components/product/Product'
import axios from 'axios';
import Loader from '../components/shared/Loader';
import { useParams } from 'react-router';
const ProductPage: React.FC = () => {
  const [product, setProduct] = useState(null);


  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <Loader />;
  } else {
    return (
      <div>
        <Product data={product} />
        <a style={{ fontSize: '10px' }} href="https://www.flaticon.com/free-icons/half-star" title="star icons">star icons created by Pixel perfect - Flaticon</a>
      </div>
    )
  }
};

export default ProductPage;