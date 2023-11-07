import React, { useState, useEffect } from "react";
import "./home.scss";
import ListaEvento from "./ListaEvento.jsx";
import elevadordesativado from "./elevador-desativado.png";
import elevadorligado from "./elevador-ativado.png";
import elevadoremchamas from "./elevador-em-chamas.png";
import caboscortados from "./cabos-cortados.png";
import cabosconectados from "./cabos-conectados.png";
import problema from "./problema.png";
import documento from "./document.png";

const Home = () => {
  const [status, setStatus] = useState("Off");
  const [botaoAtivo, setBotaoAtivo] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [elevadorStatus, setElevadorStatus] = useState("ligado");
  const [listaEventosVisible, setListaEventosVisible] = useState(true);
  const [valor1] = useState();
  const [valor2] = useState();
  const [metricasVisiveis, setMetricasVisiveis] = useState(false);
  const [iconeProblemaVisivel, setIconeProblemaVisivel] = useState(false);
  const [novoPopupVisivel, setNovoPopupVisivel] = useState(false);
  const [iconeDocumento, setDocumento] = useState(false);
  const [metricpopupVisible, setMetricPopupVisible] = useState(false);
  const [documentoPopupVisible, setDocumentoPopupVisible] = useState(false);
  const [exibirEmPorcentagem, setExibirEmPorcentagem] = useState(false);
  const [displayedPopup, setDisplayedPopup] = useState("documentoPopup"); // Inicia com o documentoPopup

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
    setBotaoAtivo(false);
    setMetricasVisiveis(false);
    setIconeProblemaVisivel(true);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
    setMetricasVisiveis(true);
    setIconeProblemaVisivel(true);

    if (popupVisible) {
      setListaEventosVisible(false);
    }
  };

  useEffect(() => {
    if (popupVisible) {
      setMetricasVisiveis(false);
      setIconeProblemaVisivel(false);
      setListaEventosVisible(false);
      setNovoPopupVisivel(false);
    }
  }, [popupVisible]);

  const openPopupWithProblema = () => {
    setNovoPopupVisivel(true);
    setListaEventosVisible(false);
    setBotaoAtivo(false);
    setMetricasVisiveis(false);
    setIconeProblemaVisivel(false);
  };

  const fecharNovoPopup = () => {
    setNovoPopupVisivel(false);
    setMetricasVisiveis(true);
    setDocumento(true);
    setIconeProblemaVisivel(false);
  };

  const openDocumentoPopup = () => {
    if (displayedPopup === "metricpopupVisible") {
      setDocumentoPopupVisible(true);
      setMetricPopupVisible(false);
      setDisplayedPopup("documentoPopup");
    } else {
      setMetricPopupVisible(!metricpopupVisible);
      setDocumentoPopupVisible(!documentoPopupVisible);
    }
  };

  const openMetricPopup = () => {
    if (displayedPopup === "documentoPopup") {
      setMetricPopupVisible(true);
      setDocumentoPopupVisible(false);
      setDisplayedPopup("metricpopup");
    } else {
      setMetricPopupVisible(!metricpopupVisible);
      setDocumentoPopupVisible(!documentoPopupVisible);
    }
  };

  return (
    <div className="home">
      <div className="homeFContainer">
        <h1>Firefighters-sre</h1>
      </div>
      {listaEventosVisible && (
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
              <span>Disponibilidade: 60%</span>
              <span>{valor2}</span>
            </div>
          </div>
        )}
        {iconeProblemaVisivel && (
          <img
            src={problema}
            className="problema"
            onClick={openPopupWithProblema}
          />
        )}
        {novoPopupVisivel && (
          <div className="novopopup">
            <h2>Relatório Inicial de Incidente</h2>
            Data: 21 de Outubro de 2023
            <br />
            Hora: 15:00 PM <br />
            Local: Prédio Principal <br />
            Notificado por: Sr. João Cardoso (Funcionário do Departamento de TI){" "}
            <br />
            Descrição do Incidente: <br />
            A equipe de segurança foi alertada sobre uma inundação em um dos
            andares do prédio. O sistema de alarme de inundação foi acionado às
            08:15 AM, e as câmeras de segurança capturaram imagens de água
            vazando de uma das caixas d'água no corredor central. <br />
            Duas salas, denominadas ROXA e VERMELHA, foram as mais afetadas, com
            água acumulando rapidamente no chão. Pouco tempo depois, as luzes
            nestas salas começaram a piscar e um cheiro de queimado foi notado,
            indicando um possível curto-circuito. <br />
            Todos os funcionários no andar afetado foram evacuados imediatamente
            e a energia foi desligada por precaução às 08:21 AM. <br />
            <button onClick={fecharNovoPopup} className="fecharPopup">
              Fechar
            </button>
          </div>
        )}
          <div>
    {iconeDocumento && (
      <img src={documento} className="documento" onClick={openDocumentoPopup} />
    )}
    {metricpopupVisible && (
      <div className="metricpopup">
        <h2>Tempo médio em cada local</h2>
        <button onClick={() => setExibirEmPorcentagem(!exibirEmPorcentagem)}>
          Alternar Exibição
        </button>
        <table>
          <thead>
            <tr>
              <td>Recepção:</td>
              <td>{exibirEmPorcentagem ? "95%" : "30 segundos"}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Elevador:</td>
              <td>{exibirEmPorcentagem ? "95%" : "30segundos"}</td>
            </tr>
            <tr>
              <td>Escritório: </td>
              <td>{exibirEmPorcentagem ? "95%" : "5 horas"}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={openMetricPopup} className="fecharPopup">
          Fechar
        </button>
      </div>
    )}
    
  </div>
      </div>
    </div>
  );
};

export default Home;
