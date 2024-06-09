import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import cartao from "../../image/Cartao_de_visita.png";
import './CartaoVisita.css';

function CartaoVisita() {
  return (
    <div className="form">
      <img id="imagem" src={cartao} alt="Cartão de Visita" />
      <form id="formulario">
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha">
          <option>Papel Couche Brilho 250g</option>
          <option>Papel Couche Brilho 300g</option>
          <option>Papel perolizado 300g</option>
          <option>Kraft 240G</option>
        </select>
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1">
          <option>88x48mm</option>
          <option>50x50mm</option>
        </select>
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2">
          <option>1x0 cores (preto)</option>
          <option>4x0 cores (colorido frente)</option>
          <option>4x1 cores (Colorido frente e 1 cor verso)</option>
          <option>4x4 cores (Colorido Frente e verso)</option>
        </select>
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4">
          <option>Refilados</option>
          <option>Cantos Arredondados</option>
        </select>
      </form>
      <div className="direita">
        <input id="valortotal" type="text" placeholder="Valor total" />
        <div className="botoes">
          <button id="avancar">Avançar</button>
          <button id="voltar">Voltar</button>
        </div>
      </div>
    </div>
  );
}

export default CartaoVisita;
