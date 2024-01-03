import React, { useState } from 'react';
import FilterGroup from './FilterGroup';

interface ChildProps {
    data: {
        title: string,
        checkbox: boolean,
        contents: string[] | { minRange: number; maxRange: number }[];
    }[],
    filtersHandler: (checkBoxValue: { key: string, value: string, isChecked: boolean }) => void;
}

const FilterSidebar: React.FC<ChildProps> = ({ data, filtersHandler }) => {
    return <div className="category-page__filter-sidebar">
        {data.map((filter, i) => {
            return <FilterGroup key={`fg-${i}`} data={filter} filtersHandler={filtersHandler} />
        })}
    </div>;
};

export default FilterSidebar;