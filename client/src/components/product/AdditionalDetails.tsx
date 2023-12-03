import AdditionalDetailsItem from './AdditionalDetailsItem';
import './Product.css';

import React from 'react';

interface ChildProps {
    data: { title: string, content: string }[];
}
const AdditionalDetails: React.FC<ChildProps> = ({ data }) => {
    return <div className='additional-details'>
        {data.map((d) => {
            return <AdditionalDetailsItem data={d} />
        })}
    </div>;
};

export default AdditionalDetails;