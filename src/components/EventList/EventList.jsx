// EventList.jsx

import React from 'react';
import ListaEvento from './ListaEvento.jsx';

const EventList = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="listaevento">
      <ListaEvento />
    </div>
  );
};

export default EventList;
