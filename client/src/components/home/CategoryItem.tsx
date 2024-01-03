import React from 'react';
import './Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
interface ChildProps {
    title: string
}

const CategoryItem: React.FC<ChildProps> = ({ title }) => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/sc/${title}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchData();
    }, []);

    return <div className="gallery-category">
        <h2 className='gallery-category__title'>{title}</h2>
        <div className="gallery-categories__wrapper">
            {data.map((c: { title: string, imgURL: string }) => {
                return (
                    <a className='gallery-subCategory' href={`/p/${title}/${c.title}`}>
                        <div className='gallery-subCategory__img' style={{ backgroundImage: `url(${c.imgURL})` }} />
                        <span className='gallery-subCategory__title'>{c.title}</span>
                    </a>)
            })}
        </div>
        <Link to={`/p/${title}/`} className="special-details" style={{ margin: "10px" }}>See more</Link>
    </div>;
};

export default CategoryItem;