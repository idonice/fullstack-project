import React from 'react';
import './Product.css';
interface ChildProps {
  title: string;
  content: string;
}

const DetailLine: React.FC<ChildProps> = ({title, content}) => {

  return (
   <div className="deal-details__line">
      <div className='deal-details__title'>{title}</div>
      <div className="special-details" style={{width: '150px', whiteSpace: 'normal'}}>{content}</div>
    </div>
    )
};

export default DetailLine;