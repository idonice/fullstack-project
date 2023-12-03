import React, { ReactNode } from 'react';
import './Popup.css'; // Create a corresponding CSS file for styling

interface PopupProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  hasSubmit?: boolean;
}

const Popup: React.FC<PopupProps> = ({ title, onClose, children, hasSubmit }) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Check if the click is outside the popup content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onSubmit = () => {
    
  }

  return (
    <div className="popup-container" onClick={handleBackgroundClick}>
      <div className="popup-content">
        <div className="popup-header">
          <h2>{title}</h2>
        </div>
        <div className="popup-body">
          {/* Render children received from the parent */}
          {children}
        </div>
        <div className='popup-actions'>
            {hasSubmit && <button onClick={onClose}>Submit</button>}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
