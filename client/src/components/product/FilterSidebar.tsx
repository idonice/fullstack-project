import React from 'react';
import FilterGroup from './FilterGroup';

interface ChildProps {
    data: {
        title: string,
        checkbox: boolean,
        contents: string[] | { minRange: number; maxRange: number }[];
    }[]
}
const FilterSidebar: React.FC<ChildProps> = ({ data }) => {
    return <div className="category-page__filter-sidebar">
        {data.map((filter) => {
            return <FilterGroup data={filter} />
        })}
    </div>;
};

export default FilterSidebar;