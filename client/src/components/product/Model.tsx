import React from 'react';
interface ChildProps{
    id: string;
    name: string;
}
const Model: React.FC<ChildProps> = ({id, name}) => {
  return <div className='model-item'><span className="model-item-content">{name}</span></div>;
};

export default Model;