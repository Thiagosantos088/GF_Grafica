import './Telalogin.css'
import {Link} from 'react-router-dom';
import insta from '../../image/instagram2.png'
import face from '../../image/facebook2.png'
import gmail from '../../image/gmail.png'
import logo from '../../image/logoatu.png'
function Telalogin() {
    
    return(
        
        <>
        <div className='logo'>            
        <Link to='/'>
        <img id='logotl' src={logo} alt='' />
        </Link>
        </div>
        <main>
            
            <p id='txtlogin'>Login</p>
            <div className='login'>
            <input className='email' type="text" name="email" id="email" placeholder='Email'  />
            <input className='senha' type="password" name="senha" id="senha" placeholder='Senha'  />
            </div>
            <div className='botaologin'>
            <Link to='/teladeregistro'>
            <button id='criar' type="submit">Criar conta</button>
            </Link>
            <button id='entrar' type="submit">Entrar</button>
            </div>
            <div className='redeslogin'>
            <p>Login com:</p>
            <img id='instatl' src={insta} alt='' />
            <img id='facetl' src={face} alt='' />
            <img id='gmailtl' src={gmail} alt='' />
            
            </div>

        </main>


        </>
    )
    
}

export default Telalogin