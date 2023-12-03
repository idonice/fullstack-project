import React from 'react';
import DetailLine from './DetailLine';
import './Product.css';

interface ChildProps {
  data: { title: string, content: string }[];
}
const DealDetails: React.FC<ChildProps> = ({ data }) => {

  return <div className="deal-details">
    {data.map((d) => { return <DetailLine title={d.title} content={d.content} /> })}
  </div>;
};

export default DealDetails;