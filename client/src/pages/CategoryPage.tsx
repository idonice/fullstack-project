import React, { useState, useEffect } from 'react';
import '../components/product/Product.css';
import Category from '../components/category/Category';
import FilterSidebar from '../components/category/FilterSidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/shared/Loader';

interface checkBoxValues {
    checkBoxValues: {
        key: string, // brands, color 
        value: string, // apple, red
        isChecked: boolean
    }
}

function toUrlFriendlyString(str: string): string {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('%20');
}

const CategoryPage: React.FC = () => {
    const { c, sc } = useParams(); //category , subcategory
    const [data, setData] = useState<any>(null);
    // const [queryString, setQueryString] = useState<string>('');
    const [filterQuerys, setFilterQuerys] = useState<{ key: string, value: string[] }[]>([]);

    const queryStringHandler = (): string => {
        let tempString: string = '';
        if (c) {
            tempString ? tempString += `&c=${c}` : tempString += `c=${c}`;
        }
        if (sc) {
            tempString ? tempString += `&sc=${sc}` : tempString += `sc=${sc}`;
        }
        tempString ? tempString = '?' + tempString : tempString = tempString;
        return tempString;
    }

    useEffect(() => {
        const queryString = queryStringHandler();
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/p/${queryString}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProducts();
    }, []);
    let brands: string[] = [];
    if (data) {
        for (const product of data) {
            const brand = product.details.brand;
            if (!brands.includes(brand)) {
                brands.push(brand);
            }
        }
    }

    const handleCheckboxChange = (checkBoxValue: { key: string, value: string, isChecked: boolean }) => {
        const { key, value, isChecked } = checkBoxValue;
        if (isChecked) {
            // Checkbox is checked, update state
            setFilterQuerys((prev) => {
                console.log('pushing');

                let temp = prev;
                const itemIndex = prev.findIndex(item => item.key === key);
                if (itemIndex !== -1) {
                    temp[itemIndex].value.push(value);
                } else {
                    temp.push({ key, value: [value] })
                }
                return temp;
            })
        } else {
            setFilterQuerys((prev) => {
                let temp = prev;
                const itemIndex = prev.findIndex(item => item.key === key);
                if (temp[itemIndex].value.length === 1 && temp[itemIndex].value[0] === value) {
                    return temp.splice(itemIndex, 1);
                } else {
                    const valueIndex = prev[itemIndex].value.indexOf(value);
                    const newKey = temp[itemIndex].key;
                    const newValues = temp[itemIndex].value.splice(valueIndex, 1);
                    temp.splice(itemIndex, 1);
                    temp.push({ key: newKey, value: newValues });
                    return temp;
                }
            })
        }
    }

    return <div className="category-page">
        < div className="category-page__header" > {data ? data.length : 0} results for "{sc ? sc : c}"</div >
        <div className="category-filter__wrapper">
            <FilterSidebar data={[{ title: 'Brand', checkbox: true, contents: brands }]} filtersHandler={handleCheckboxChange} />
            <Category data={data} />
        </div>
    </div >
};

export default CategoryPage;