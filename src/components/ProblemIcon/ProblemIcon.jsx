// ProblemIcon.jsx

import React from 'react';
import problema from '../../assets/problema.png';

const ProblemIcon = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <img
      src={problema}
      className="problema"
      onClick={onClick}
      alt="Report a problem"
    />
  );
};

export default ProblemIcon;
