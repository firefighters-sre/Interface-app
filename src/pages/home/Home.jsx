import React from 'react';
import './home.scss';
import ListaEvento from './ListaEvento.jsx';

const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
        <h1>Firefighters-sre</h1>
        </div> 
      <div className="lista">
      < ListaEvento />
      </div>
      <div className='status'>
        <h2>Off</h2>
      </div>
     
  
    </div>
   
  )
}

export default Home