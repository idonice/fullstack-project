import React, { useState } from 'react';
import './Home.css'
import CategoryItem from './CategoryItem';
import { data } from './data';
interface GalleryProps {
    images: string[];
}

const HomeGallery: React.FC<GalleryProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };


    return (
        <div className="home-page">
            <div className="gallery-container" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
                <div onClick={handlePrevClick} className="gallery-button gallery-prev prev" />
                <div onClick={handleNextClick} className="gallery-button gallery-next next" />
                <div className="gallery-category-container" >
                    <CategoryItem title={data[0].title} subCategories={data[0].subCategories} />
                    <CategoryItem title={data[1].title} subCategories={data[1].subCategories} />
                    <CategoryItem title={data[2].title} subCategories={data[2].subCategories} />
                    <CategoryItem title={data[3].title} subCategories={data[3].subCategories} />
                </div >
            </div>
            <a className='icon' href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>

        </div>
    );
};

export default HomeGallery;
