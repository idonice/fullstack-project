import React, { useState } from 'react';
interface ChildProps {
    property: string;
    content: any;
    isCheckbox: boolean;
    isPricesLine: boolean;
    filtersHandler: (checkBoxValue: { property: string, value: string, isChecked: boolean }) => void;
}

const FilterLine: React.FC<ChildProps> = ({ property, content, isCheckbox, isPricesLine, filtersHandler }) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        filtersHandler({ property: name, value: value, isChecked: checked });
    };
    //to move checking to parent

    return <div>
        <div className="filter-line">
            {isCheckbox && <input type="checkbox"
                name={property} value={content} onChange={handleCheckboxChange} />}
            {isCheckbox && <label className='filer-content' htmlFor="">{content}</label>}
            {!isCheckbox && !isPricesLine && <span>{content}</span>}
            {isPricesLine && <span>${Math.floor(content.minRange)} to ${Math.round(content.maxRange)}</span>}
        </div>
    </div>;
};

export default FilterLine;