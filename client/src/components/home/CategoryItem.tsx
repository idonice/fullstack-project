import React from 'react';
import './Home.css'

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
                    <div className='gallery-subCategory'>
                        <div className='gallery-subCategory__img' style={{ backgroundImage: `url(${c.image})` }} />
                        <span className='gallery-subCategory__title'>{c.subTitle}</span>
                    </div>)
            })}
        </div>
    </div>;
};

export default CategoryItem;