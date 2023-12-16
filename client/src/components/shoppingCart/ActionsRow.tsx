import React from 'react';
import QuantitySelect from './QuantitySelect';
interface ChildProps {
    stock: number;
}
const ActionsRow: React.FC<ChildProps> = ({ stock }) => {

    return <div className='actions-row'>
        <QuantitySelect stock={stock} />
        <div className="action">
            <span className="action-txt">Delete</span>
        </div>
        <div className="action">
            <span className="action-txt">Save for later</span>
        </div>

    </div>;
};

export default ActionsRow;