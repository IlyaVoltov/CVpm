import React from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast-container">
      <div className="toast-message">
        {message}
        <button className="toast-close-button" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default Toast;
