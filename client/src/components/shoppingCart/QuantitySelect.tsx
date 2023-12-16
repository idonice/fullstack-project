import React from 'react';

interface ChildProps {
    stock: number;
}

const QuantitySelect: React.FC<ChildProps> = ({ stock }) => {
    const quantity: number = Math.min(stock, 10);
    const options = Array.from({ length: quantity }, (_, index) => ({
        value: `${index + 1}`,
        label: ` ${index + 1}`,
    }));

    return (
        <div>
            <select id="mySelect" className='qty-select'>
                {options.map((option, i) => (
                    <option key={option.value} value={option.value}>
                        {!i && 'Qty:'}{option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default QuantitySelect;
