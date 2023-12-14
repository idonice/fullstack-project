import React from 'react';
interface ChildProps {
    content: any;
    checkbox: boolean;
    pricesLine: boolean;
}
const FilterLine: React.FC<ChildProps> = ({ content, checkbox, pricesLine }) => {
    return <div>
        <div className="filter-line">
            {checkbox && <input type="checkbox" name="" id="f1" />}
            {checkbox && <label className='filer-content' htmlFor="f1">{content}</label>}
            {!checkbox && !pricesLine && <span>{content}</span>}
            {pricesLine && <span>${content.minRange} to ${content.maxRange}</span>}
        </div>
    </div>;
};

export default FilterLine;