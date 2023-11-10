import React from 'react';
import elevadorDesativado from '../../assets/elevador-desativado.png';
import elevadorAtivado from '../../assets/elevador-ativado.png';

const Elevator = ({ status }) => {
  const elevatorImage = status === 'Off' ? elevadorDesativado : elevadorAtivado;
  const elevatorClasses = `elevador ${status === 'On' ? 'on' : ''}`;

  return (
    <img
      src={elevatorImage}
      className={elevatorClasses}
      alt="Elevator"
    />
  );
};

export default Elevator;
