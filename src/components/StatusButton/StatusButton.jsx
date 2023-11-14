import React from 'react';

const StatusButton = ({ isActive, status, toggleStatus }) => {
  const buttonText = status === 'Off' ? 'OFF' : 'ON';
  
  // Conditional Tailwind classes for styling
  const buttonClass = status === 'Off' 
    ? 'bg-red-500 hover:bg-red-600 text-white' 
    : 'bg-green-500 hover:bg-green-600 text-white';

  return (
    <button
      className={`${buttonClass} px-4 py-2 rounded focus:outline-none focus:ring`}
      onClick={toggleStatus}
      // disabled={!isActive} // Uncomment this line if you want to disable the button conditionally
    >
      {buttonText}
    </button>
  );
};

export default StatusButton;
