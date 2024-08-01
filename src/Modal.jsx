import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div id="modal" className="modal">
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-container">
          <div className="modal-header">
            <button onClick={onClose} className="close-button">
              <span className="close-icon">×</span>
            </button>
          </div>
          <div className="modal-content">
            <div className="modal-message">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

