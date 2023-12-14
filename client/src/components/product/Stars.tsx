import React from 'react';
import Star from './Star';
import EmptyStar from './EmptyStar';
interface ChildProps {
    stars: number;
}
const Stars: React.FC<ChildProps> = ({ stars }) => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
        if (stars) {
            starArray.push(<Star />);
            stars--;
        } else
            starArray.push(<EmptyStar />);
    }
    return <div className='stars'>{starArray}</div>;
};

export default Stars;