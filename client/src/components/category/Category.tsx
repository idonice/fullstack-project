import React from 'react';
import { IProduct } from '../../types';
import ProductCard from './ProductCard';
import Loader from '../shared/Loader';

interface ChildProps {
    data: IProduct[];
}

interface Filter {
    key: string;
    value: any;
}


const Category: React.FC<ChildProps> = ({ data }) => {
    // function productsFilter(products: IProduct[], filters: Filter[]): IProduct[] {
    //     if (filters.length === 0) {
    //         // No filters provided, return the whole products array
    //         return products;
    //     } else {
    //         let temp: IProduct[] = [];
    //         products.forEach((p) => {
    //             filters.forEach(f => {
    //                 if (f.key === 'Brand' && f.value === p.productDetails.brand)
    //                     temp.push(p)
    //             })
    //         })
    //         return temp;
    //     }
    // }

    if (!data) {
        return <Loader />;
    } else {
        return <div className='product-card__list'>
            <h2 className='result-title'>Results</h2>
            <span style={{ color: '#565959', fontSize: '14px' }}>Price and other details may vary based on product size and color.</span>
            {data.map((product, i) => {
                return <ProductCard key={i} data={product} />
            })}
        </div>
    }
};

export default Category;