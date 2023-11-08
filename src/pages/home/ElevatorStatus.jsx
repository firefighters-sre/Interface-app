// ElevatorStatus.jsx

import React from 'react';
import elevadorDesativado from './elevador-desativado.png';
import elevadorAtivado from './elevador-ativado.png';

const ElevatorStatus = ({ status, onElevatorClick }) => {
  const elevatorImage = status === 'Off' ? elevadorDesativado : elevadorAtivado;
  const elevatorClasses = `elevador ${status === 'On' ? 'on' : ''}`;

  return (
    <img
      src={elevatorImage}
      className={elevatorClasses}
      alt="Elevator status"
      onClick={() => {
        if (status === 'On') {
          onElevatorClick(); // Only call the function if the elevator is on
        }
      }}
    />
  );
};

export default ElevatorStatus;
