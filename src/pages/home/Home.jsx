// Home.jsx

import React, { useState } from 'react';
import './home.scss';
import StatusButton from './StatusButton'; // Make sure this file exists
import ElevatorStatus from './ElevatorStatus'; // Make sure this file exists

const Home = () => {
  const [status, setStatus] = useState('Off');
  const [botaoAtivo, setBotaoAtivo] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleStatus = () => {
    setStatus((currentStatus) => {
      // If the current status is 'Off', we want to turn it 'On', and vice versa
      return currentStatus === 'Off' ? 'On' : 'Off';
    });
  
    // We will toggle 'botaoAtivo' regardless of the current state
    // This means the button will always be clickable to switch between 'On' and 'Off'
    setBotaoAtivo((currentActive) => !currentActive);
  };

  const openPopupWithElevadoremchamas = () => {
    if (status === 'On') { // Check if the status is 'On' before opening the popup
      setPopupVisible(true);
      // You might want to set other states here depending on your popup's requirements
    }
  };

  return (
    <div className="home">
      <div className="homeFContainer">
        <h1>Firefighters-sre</h1>
      </div>
      
      <StatusButton isActive={botaoAtivo} status={status} toggleStatus={toggleStatus} />
      <ElevatorStatus
        status={status}
        onElevatorClick={openPopupWithElevadoremchamas}
      />
      
      {/* Other components and logic */}
    </div>
  );
};

export default Home;
