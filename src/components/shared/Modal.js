// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, title, onAction, actionLabel }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                padding: '20px',
                background: '#fff',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <p>{title}</p>
                <button onClick={onAction}>{actionLabel}</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
