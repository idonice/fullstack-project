import React from 'react';
import '../components/product/Product.css';
import Category from '../components/product/Category';
import FilterSidebar from '../components/product/FilterSidebar';
import { IProduct } from '../types';

interface ChildProps {
    category: {
        title: string,
        products: IProduct[];
    }
}
const CategoryPage: React.FC<ChildProps> = ({ category }) => {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxPrice = Number.MIN_SAFE_INTEGER;

    for (const product of category.products) {
        const price = product.price.whole + product.price.fraction / 100;

        // Update min and max prices
        minPrice = Math.min(minPrice, price);
        maxPrice = Math.max(maxPrice, price);
    }

    // Calculate the range between min and max
    const priceRange = maxPrice - minPrice;

    // Specify the number of ranges you want (e.g., 3, 5, 10)
    const numberOfRanges = 5;

    // Calculate the range size
    const rangeSize = priceRange / numberOfRanges;

    // Create an array of price ranges
    const priceRanges: { minRange: number; maxRange: number }[] = [];

    for (let i = 0; i < numberOfRanges; i++) {
        const minRange = minPrice + i * rangeSize;
        const maxRange = minRange + rangeSize;

        priceRanges.push({
            minRange,
            maxRange,
        });
    }

    let brands: string[] = [];
    for (const product of category.products) {
        const brand = product.productDetails.brand;
        if (!brands.includes(brand)) {
            brands.push(brand);
        }
    }

    return <div className="category-page">
        <div className="category-page__header">{category.products.length} results for "{category.title}"</div>
        <div className="category-filter__wrapper">
            <FilterSidebar data={[{ title: 'Brand', checkbox: true, contents: brands }, { title: 'Price', checkbox: false, contents: priceRanges }]} />
            <Category data={category.products} />
        </div>
    </div>
};

export default CategoryPage;