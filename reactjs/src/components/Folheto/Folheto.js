import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import cartao from "../../image/Cartao_de_visita.png";
import {Link} from 'react-router-dom';
import './Folheto.css';

function Folheto() {
  return (
    <div className="form">
      <form id="formulario">
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolhafo">
          <option>Sulfite 90g</option>
          <option>Couchê 90g </option>
          <option>Couchê 115g </option>
          <option>Couchê 150g </option>
          <option>Kraft 80g  </option>
          <option>Reciclado 90g </option>
        </select>
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1">
          <option>105x148mm </option>
          <option>148x200mm </option>
          <option>200x280mm  </option>
          <option>210x297 mm  </option>
          <option>298x406 mm  </option>
        </select>
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2">
          <option>1x0 cor  </option>
          <option>2x0 cores </option>
          <option>4x0 cores (Colorido Frente)</option>
          <option>4x4 cores (Colorido Frente e verso)</option>
        </select>
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4fo">
          <option>Refilados</option>
          <option>Refilado 1 Dobra  </option>
          <option>Refilado 2 Dobras   </option>

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

export default Folheto;
