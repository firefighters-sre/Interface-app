// StatusButton.jsx

import React from 'react';

const StatusButton = ({ isActive, status, toggleStatus }) => {
  const buttonText = status === 'Off' ? 'Turn On' : 'Turn Off';

  return (
    <button
      className={`buttonStatus ${status.toLowerCase()}`}
      onClick={toggleStatus}
      // disabled={!isActive} // If you want the button to always be clickable, remove this line
    >
      {buttonText}
    </button>
  );
};

export default StatusButton;
