import React, { useEffect } from 'react';
import './Feedback.css';

function Feedback({ message, type, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // disappears after 4 seconds

      return () => clearTimeout(timer); // clear timer if component unmounts
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`feedback-container ${type}`}>
      <div className="feedback-message">
        {message}
        <button className="dismiss-button" onClick={onClose}>✖</button>
      </div>
    </div>
  );
}

export default Feedback;
