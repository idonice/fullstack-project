import React from 'react';
import star from './full-star.png'
const Star: React.FC = () => {
    return <div className='star' style={{ backgroundImage: `url(${star})` }} />
};

export default Star;