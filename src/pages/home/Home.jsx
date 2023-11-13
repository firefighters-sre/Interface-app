import React, { useState } from 'react';
import StatusButton from '../../components/StatusButton/StatusButton';
import Elevator from '../../components/Elevator/Elevator';
import './home.scss';

const Home = () => {
  const [status, setStatus] = useState('Off');
  const [botaoAtivo, setBotaoAtivo] = useState(true);

  const toggleStatus = () => {
    setStatus(currentStatus => currentStatus === 'Off' ? 'On' : 'Off');
    setBotaoAtivo(!botaoAtivo);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen text-center p-4">
      <header className="mt-8">
        <h1 className="text-4xl font-bold text-gray-800">Firefighters-sre</h1>
      </header>
      
      <section className="mb-20">
        <StatusButton isActive={botaoAtivo} status={status} toggleStatus={toggleStatus} />
      </section>

      <div className="predio">
        <Elevator status={status} />
      </div>
      
    </main>
  );
};

export default Home;
