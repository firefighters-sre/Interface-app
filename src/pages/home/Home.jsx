import React, { useState } from 'react';
import './home.scss';
import StatusButton from '../../components/StatusButton/StatusButton';
import Elevator from '../../components/Elevator/Elevator';

const Home = () => {
  const [status, setStatus] = useState('Off');
  const [botaoAtivo, setBotaoAtivo] = useState(true);

  const toggleStatus = () => {
    setStatus(currentStatus => currentStatus === 'Off' ? 'On' : 'Off');
    setBotaoAtivo(currentActive => !currentActive);
  };

  return (
    <div className="home">

      <div className="title-container">
        <h1>Firefighters-sre</h1>
      </div>
      
      <div className="status-button-container">
        <StatusButton isActive={botaoAtivo} status={status} toggleStatus={toggleStatus} />
      </div>

      <div className="predio">
        <Elevator status={status} />
      </div>
      
      {/* Outros componentes e lógica conforme necessário */}
    </div>
  );
};

export default Home;
