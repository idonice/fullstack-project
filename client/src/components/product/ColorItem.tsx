import React from 'react';
import './Product.css'
interface ChildProps {
  id: number;
  img: string;
  color: string;
  colorHandler: (color: string) => void;
}
const ColorItem: React.FC<ChildProps> = ({ img, color, colorHandler }) => {
  return <div className='carrousel-item'>
    <img src={img} alt="" style={{ width: '40px', height: '40px', borderRadius: '5px' }} onMouseOver={() => colorHandler(color)} />
  </div>;
};

export default ColorItem;