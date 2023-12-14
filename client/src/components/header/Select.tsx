interface ChildProps {
    onClose: () => void;
    className: string;
}

const Select: React.FC<ChildProps> = ({ onClose, className }) => {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Check if the click is outside the popup content
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (<select style={{ "display": `${className}` }} name="search" id="">
        <option value="">All departments</option>
        <option value="saab">Computer</option>
        <option value="mercedes">Phones</option>
    </select>)
}

export default Select;