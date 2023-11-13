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
    <div className="flex flex-col items-center justify-between min-h-screen text-center font-sans p-4">

      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-800">Firefighters-sre</h1>
      </div>
      
      <div className="mb-30">
        <StatusButton isActive={botaoAtivo} status={status} toggleStatus={toggleStatus} />
      </div>

      <div className="predio">
        <Elevator status={status} />
      </div>
      
    </div>
  );
};

export default Home;
