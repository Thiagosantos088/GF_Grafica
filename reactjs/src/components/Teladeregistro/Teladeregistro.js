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
    <main>
    <p id='txtcadastro'>Cadastro</p>
    <input className='Nome' type="text" name="nome" id="nome" placeholder='Nome completo'  />
    <input className='Email' type="email" name="email" id="emailtr" placeholder='Email'  />
    <input className='telefone' type="tel" name="telefone" id="telefone" placeholder='Telefone'  />
    <input className='Cpf' type="number" name="cpf" id="cpf" placeholder='CPF ou CNPJ'  />
    <div className='residencia'>
    <input className='Cep' type="number" name="cep" id="cep" placeholder='CEP'  />
    <input className='Endereco' type="text" name="endereco" id="endereco" placeholder='Endereço'  />
    <input className='Numero' type="number" name="numero" id="numero" placeholder='Numero'  />
     </div>

     
    <input className='bairro' type="bairro" name="bairro" id="bairro" placeholder='Bairro'  />
    <input className='senha' type="password" name="senha" id="senhareg" placeholder='Senha'  />
    <input className='senha' type="password" name="senha" id="confreg" placeholder='Confirme a senha'  />
    <div className='botao'>
    <button id='criarconta' type="submit">Criar conta</button>
    <button id='reset' type="reset">Limpar</button>
    </div>












        
    </main>
      </>
    )
}

export default Teladeregistro;