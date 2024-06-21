import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import envelope from "../../image/Envolepes-personalizado.png";
import {Link} from 'react-router-dom';
import './Envelope.css';

function Envelope() {
  return (
    <div className="form">
                  <img id='imgen' src={envelope} alt='' />

      <form id="formulario">
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha">
          <option>Sulfite 80g </option>
          <option>Sulfite 90g  </option>
          <option>Kraft 80g </option>
          <option>Reciclado 90g </option>
        </select>
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1">
          <option>114x229mm </option>
          <option>200x280mm </option>
          <option>260x360mm  </option>
        </select>
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2">
          <option>1x0 cor </option>
          <option>2x0 cores </option>
          <option>4x0 cores (Colorido Frente)</option>
         
        </select>
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4">
          <option>Faca Padrão</option>
         
        </select>
      </form>
      <div className="direita">
        <input id="valortotal" type="text" placeholder="Valor total" />
        <div className="botoes">
        <Link to='/paginaupload'><button id="avancar">Avançar</button></Link>   
        <Link to='/produtos'><button id="voltar">Voltar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
