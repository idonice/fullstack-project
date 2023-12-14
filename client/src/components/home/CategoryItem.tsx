import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
interface ChildProps {
    title: string;
    subCategories: { subTitle: string, image: string }[];
}
const CategoryItem: React.FC<ChildProps> = ({ title, subCategories }) => {
    return <div className="gallery-category">
        <h2 className='gallery-category__title'>{title}</h2>
        <div className="gallery-categories__wrapper">
            {subCategories.map((c) => {
                return (
                    <a className='gallery-subCategory' href={`/category/${c.subTitle.toLowerCase()}`}>
                        <div className='gallery-subCategory__img' style={{ backgroundImage: `url(${c.image})` }} />
                        <span className='gallery-subCategory__title'>{c.subTitle}</span>
                    </a>)
            })}
        </div>
        <Link to={'/'} className="special-details" style={{ margin: "10px" }}>See more</Link>
    </div>;
};

export default CategoryItem;