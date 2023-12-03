import React from 'react';
import './Product.css'
interface ChildProps {
    data: { title: string, content: string }
}
const AdditionalDetailsItem: React.FC<ChildProps> = ({ data }) => {
    return <div className="additional-details__item">
        <div className="additional-details__title">{data.title}:</div>
        <div className="additional-details__content">{data.content}</div>
    </div>;
};

export default AdditionalDetailsItem;