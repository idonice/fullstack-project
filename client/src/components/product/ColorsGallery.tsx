import React, { useState } from 'react';
import ColorItem from './ColorItem';

interface ChildProps{
    colors: {color: string, img: string}[]
}

const ColorsGallery: React.FC<ChildProps> = ({colors}) => {

    const [selectedColor, setSelectedColor] = useState<string>('');

    const selectedColorHandler = (color: string) : void => {
        setSelectedColor(color)
    }
  return (<div>
    <span>{`Color: ${selectedColor}`}</span>
    {colors.map((color, i) => {
      return <ColorItem id={i} img={color.img} color={color.color} colorHandler={selectedColorHandler}/>
    })}
  </div>);
};

export default ColorsGallery;