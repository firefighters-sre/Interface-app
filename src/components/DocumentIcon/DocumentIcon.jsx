// DocumentIcon.jsx

import React from 'react';
import documento from '../../assets/document.png';

const DocumentIcon = ({ onClick }) => {
  return (
    <img
      src={documento}
      className="documento"
      onClick={onClick}
      alt="View documents"
    />
  );
};

export default DocumentIcon;
