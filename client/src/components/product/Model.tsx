import React from 'react';
import LinkWrapper from '../shared/LinkWrapper';
interface ChildProps {
  id: string;
  name: string;
}
const Model: React.FC<ChildProps> = ({ id, name }) => {
  return <LinkWrapper href={`/products/${id}`}>
    <div className='model-item'><span className="model-item-content">{name}</span></div>
  </LinkWrapper>
};

export default Model;