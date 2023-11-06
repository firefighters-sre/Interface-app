import React, { useState } from "react";
import "./home.scss";
import ListaEvento from "./ListaEvento.jsx";
import elevadordesativado from "./elevador-desativado.png";
import elevadorligado from "./elevador-ativado.png";
import elevadoremchamas from "./elevador-em-chamas.png";
import caboscortados from "./cabos-cortados.png";
import cabosconectados from "./cabos-conectados.png";

const Home = () => {
  const [status, setStatus] = useState("Off");
  const [botaoAtivo, setBotaoAtivo] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [elevadorStatus, setElevadorStatus] = useState("ligado");
  const [listaEventosVisible, setListaEventosVisible] = useState(true);
  const [valor1] = useState();
  const [valor2] = useState();
  const [metricasVisiveis, setMetricasVisiveis] = useState(false);

  const toggleStatus = () => {
    if (botaoAtivo) {
      setStatus("On");
      setBotaoAtivo(false);
    }
  };

  const toggleElevadorStatus = () => {
    if (elevadorStatus === "chamas") {
      setElevadorStatus("caboscortados");
    } else if (elevadorStatus === "caboscortados") {
      setElevadorStatus("cabosconectados");
    }
  };

  const openPopupWithElevadoremchamas = () => {
    setElevadorStatus("chamas");
    setPopupVisible(true);
    setListaEventosVisible(false);
    setBotaoAtivo(false); // Oculte permanentemente o botão "ON"
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);

    if (popupVisible) {
      // Se o popup foi fechado, reexiba a lista de eventos
      setListaEventosVisible(false);
     
      setMetricasVisiveis(true); 

    }
  };
  

  return (
    <div className="home">
      <div className="homeFContainer">
        <h1>Firefighters-sre</h1>
      </div>
      {listaEventosVisible && ( // Renderize a lista de eventos apenas se ela estiver visível
        <div className="listaevento">
          <ListaEvento />
        </div>
      )}
      <div className="status">
        {botaoAtivo && (
          <button
            className="buttonStatus"
            onClick={toggleStatus}
            disabled={!botaoAtivo}
          >
            {botaoAtivo ? "OFF" : "ON"}
          </button>
        )}
      </div>
      <div>
        <img
          src={status === "Off" ? elevadordesativado : elevadorligado}
          className="elevador"
          onClick={openPopupWithElevadoremchamas}
        />
        {popupVisible && (
          <div className="popup">
            <img
              src={
                elevadorStatus === "chamas"
                  ? elevadoremchamas
                  : elevadorStatus === "caboscortados"
                  ? caboscortados
                  : cabosconectados
              }
              className="elevadoremchamas"
              onClick={toggleElevadorStatus}
            />
            <button className="fecharPopup" onClick={togglePopup}>
              Fechar
            </button>
          </div>
        )}
      {metricasVisiveis && (
  <div className="metricas">
    <div className="valor-box">
      <span>Tempo: 50%</span>
      <span>{valor1}</span>
    </div>
    <div className="valor-box">
      <span>Disponibilidade: 60% </span>
      <span>{valor2}</span>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Home;
