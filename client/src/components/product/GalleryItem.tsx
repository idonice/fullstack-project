import React from 'react';
interface ChildProps {
    id: number;
    image: string;
    onMouseOver: (id: number) => void;
    isActive: boolean;
  }

const GalleryItem: React.FC<ChildProps> = ({ id, onMouseOver, isActive, image }) => {
  return ( <div className={`carrousel-item ${isActive ? 'active-img' : ""}`} onMouseOver={() => onMouseOver(id)} >
    <img src={image} alt="" />
  </div>)
};
  

export default GalleryItem;