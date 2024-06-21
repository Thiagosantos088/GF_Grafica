import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import blocos from "../../image/blocos.png";
import {Link} from 'react-router-dom';
import './Blocos.css';

function Blocos() {
  return (
    <div className="form">
                  <img id='imgblo' src={blocos} alt='' />

      <form id="formulario">
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha">
          <option>Sulfite 75g </option>
          <option>Sulfite 90g  </option>
          <option>1ª via Branca, 2ª via amarela, 3ª via Azul (56g) </option>
          <option>1ª via Branca, 2ª via amarela (56g) </option>
        </select>
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1">
          <option>70x 105 mm </option>
          <option>100x148 mm </option>
          <option>200x280mm  </option>

        </select>
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2">
          <option>1x0 cor  </option>
          <option>4x0 cores </option>
        </select>
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4bl">
          <option>Blocagem com 100 folhas </option>
          <option>Blocagem com 50 folhas </option>
          <option>Blocagem com 50 folhas  2 vias  serrilhado  </option>
          
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

export default Blocos;
