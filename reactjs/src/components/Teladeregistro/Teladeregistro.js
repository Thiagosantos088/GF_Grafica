import logo from '../../image/logoatu.png'
import './Teladeregistro.css'
import {Link} from 'react-router-dom';



function Teladeregistro (){
    return(
      <>
      <div className='logoreg'>
    <Link to='/'>
        <img id='logotr' src={logo} alt='' />
    </Link>
    </div>
    <div className='container-registro'>
    
    <p id='txtcadastro'>Cadastro</p>
  
    <input  type="text" name="nome" id="nometr" placeholder='Nome completo'  />
    <inpu type="email" name="email" id="emailtr" placeholder='Email'  />
    <input  type="tel" name="telefone" id="telefonetr" placeholder='Telefone'  />
    
    <div className='residencia'>
    <input  type="number" name="cep" id="ceptr" placeholder='CEP'  />
    <input  type="text" name="endereco" id="enderecotr" placeholder='Endereço'  />
    <input type="number" name="numero" id="numerotr" placeholder='Numero'  />
     </div>

     
    <input className='bairro' type="bairro" name="bairro" id="bairro" placeholder='Bairro'  />
    <input className='senhareg' type="password" name="senhareg" id="senhareg" placeholder='Senha'  />
    <input className='senhareg' type="password" name="senhareg" id="confreg" placeholder='Confirme a senha'  />
    <div className='botaoreg'>
    <button id='criarconta' type="submit">Criar conta</button>
    <button id='reset' type="reset">Limpar</button>
    </div>
    </div>     
     </>
    )
}

export default Teladeregistro;