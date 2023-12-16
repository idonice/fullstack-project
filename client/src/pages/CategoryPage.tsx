import React, { useState } from 'react';
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

interface Filter {
    key: string;
    value: any;
}

interface checkBoxValues {
    checkBoxValues: {
        property: string, // brands, color 
        value: string, // apple, red
        isChecked: boolean
    }
}

const CategoryPage: React.FC<ChildProps> = ({ category }) => {
    const [checkboxValues, setCheckboxValues] = useState<checkBoxValues>();
    const [filterQuerys, setFilterQuerys] = useState<Filter[]>([]);

    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxPrice = Number.MIN_SAFE_INTEGER;

    for (const product of category.products) {
        const price = product.price.whole + product.price.fraction / 100;
        minPrice = Math.min(minPrice, price);
        maxPrice = Math.max(maxPrice, price);
    }
    const priceRange = maxPrice - minPrice;
    const numberOfRanges = 5;
    const rangeSize = priceRange / numberOfRanges;
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

    const handleCheckboxChange = (checkBoxValue: { property: string, value: string, isChecked: boolean }) => {
        const { property, value, isChecked } = checkBoxValue;
        if (isChecked) {
            // Checkbox is checked, update state
            setFilterQuerys((prev) => [
                ...prev,
                { key: property, value: value },
            ])
        } else {
            setFilterQuerys((prev) => prev.filter((item) => item.value !== value));
        }
    }

    return <div className="category-page">
        <div className="category-page__header">{category.products.length} results for "{category.title}"</div>
        <div className="category-filter__wrapper">
            <FilterSidebar data={[{ title: 'Brand', checkbox: true, contents: brands }, { title: 'Price', checkbox: false, contents: priceRanges }]} filtersHandler={handleCheckboxChange} />
            <Category data={category.products} filters={filterQuerys} />
        </div>
    </div>
};

export default CategoryPage;