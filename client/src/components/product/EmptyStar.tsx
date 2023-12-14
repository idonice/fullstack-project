import React from 'react';
import emptyStar from './empty-star.png'
const EmptyStar: React.FC = () => {
    return <div className='star' style={{ backgroundImage: `url(${emptyStar})` }} />
};

export default EmptyStar;