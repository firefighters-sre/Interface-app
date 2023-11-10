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
      <div className="homeFContainer">
        <h1>Firefighters-sre</h1>
      </div>
      
      <StatusButton isActive={botaoAtivo} status={status} toggleStatus={toggleStatus} />
      <Elevator status={status} />
      
      {/* Other components and logic */}
    </div>
  );
};

export default Home;
