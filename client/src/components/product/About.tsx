import React from 'react';
interface ChildProps {
    data: string[];
}
const About: React.FC<ChildProps> = ({ data }) => {
    return <div className='about'>
        <span className="about-title">About this item:</span>
        <ul>{data.map((d) => { return <li>{d}</li> })}</ul>
    </div>;
};

export default About;
<ul></ul>