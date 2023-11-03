import React from 'react';
import './home.scss';
import ListaEvento from './ListaEvento.jsx';
import elevadordesativado from './elevador-desativado.png';

const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
        <h1>Firefighters-sre</h1>
        </div> 
      <div className="listaevento">
      < ListaEvento />
      </div>
       <div className='status'>
      <h2>Off</h2>
    
      </div> 
       <div>
      <img src={elevadordesativado} className='elevadordesativado'/>
      </div>
    </div>
   
  )
}

export default Home