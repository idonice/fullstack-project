import React, { useState, useEffect } from 'react';
import './Home.css'
import CategoryItem from './CategoryItem';
import axios from 'axios';
interface GalleryProps {
    images: string[];
}

const HomeGallery: React.FC<GalleryProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [data, setData] = useState([]);
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
                    <CategoryItem title={'Gaming Accessories'} />
                    <CategoryItem title={'Electronics'} />
                    <CategoryItem title={'Kitchen & Home'} />
                </div >
            </div>
            <a className='icon' href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>

        </div>
    );
};

export default HomeGallery;
