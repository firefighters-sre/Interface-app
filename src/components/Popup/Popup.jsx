// Popup.jsx

import React from 'react';

const Popup = ({ children, onClose }) => {
  return (
    <div className="popup">
      {children}
      <button className="fecharPopup" onClick={onClose}>
        Fechar
      </button>
    </div>
  );
};

export default Popup;
