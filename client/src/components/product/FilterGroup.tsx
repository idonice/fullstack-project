import React from 'react';
import FilterLine from './FilterLine';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

interface ChildProps {
    data: {
        title: string,
        checkbox: boolean,
        contents: string[] | { minRange: number; maxRange: number }[];
    },

    filtersHandler: (checkBoxValue: { property: string, value: string, isChecked: boolean }) => void;
}

const FilterGroup: React.FC<ChildProps> = ({ data, filtersHandler }) => {

    return <div className='filter-group'>
        <span className="filer-title bold">{data.title}</span>
        {data.contents && data.contents.map((content, i) => {
            return <FilterLine key={`fl-${i}`} property={data.title} isCheckbox={data.checkbox} content={content} isPricesLine={data.title === 'Price'} filtersHandler={filtersHandler} />
        })}
    </div>;
};

export default FilterGroup;