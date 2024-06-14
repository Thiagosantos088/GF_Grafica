import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import cartao from "../../image/Cartao_de_visita.png";
import {Link} from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <div className="form">
      <form id="formulario">
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha">
          <option>Lona brilho 340g </option>
          <option>Lona fosca 340g </option>
        </select>
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1">
          <option>400x600mm </option>
          <option>600x900mm </option>
          <option>700x1000mm  </option>
          <option>1000x1500mm  </option>

        </select>
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2">
          <option>4x0 cores (Colorido frente)</option>
        </select>
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4">
          <option>Bastão/Cordão</option>
          <option>Ilhós</option>
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

export default Banner;
