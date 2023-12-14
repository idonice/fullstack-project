import React from 'react';
import FilterLine from './FilterLine';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

interface ChildProps {
    data: {
        title: string,
        checkbox: boolean,
        contents: string[] | { minRange: number; maxRange: number }[];
    }
}
const FilterGroup: React.FC<ChildProps> = ({ data }) => {

    return <div className='filter-group'>
        <span className="filer-title bold">{data.title}</span>
        {data.contents && data.contents.map((content) => {
            return <FilterLine checkbox={data.checkbox} content={content} pricesLine={data.title === 'Price'} />
        })}
    </div>;
};

export default FilterGroup;